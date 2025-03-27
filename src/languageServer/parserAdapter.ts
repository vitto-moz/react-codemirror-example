import { Parser, Tree, Input, PartialParse, TreeFragment } from "@lezer/common";
import { LanguageServer } from ".";
import { parserAdapterNodeSet, tokenToNodeType } from "./nodeTypes";
import { Token } from "antlr4";

const DEFAULT_NODE_GROUP_SIZE = 4;

export class ParserAdapter extends Parser {
  private languageServer = new LanguageServer();

  private getNodeTypeIdForTokenType(index: number) {
    const tokenType = this.languageServer.getTokenTypeForIndex(index);

    return tokenToNodeType[tokenType].id;
  }

  private createBufferFromTokens(tokens: Token[]) {
    const buffer = [];

    tokens.forEach((token) => {
      const nodeTypeId = this.getNodeTypeIdForTokenType(token.type);
      const startOffset = token.start;
      // Adding 1 to include the character that lies to the right of the stopIndex (which is included in the word)
      const endOffset = token.stop + 1;

      buffer.push(nodeTypeId, startOffset, endOffset, DEFAULT_NODE_GROUP_SIZE);
    });

    const documentNodeId = tokenToNodeType.document.id;
    const startOffset = tokens[0].start;
    const endOffest = tokens[tokens.length - 1].stop + 1;
    const documentNodeSize =
      tokens.length * DEFAULT_NODE_GROUP_SIZE + DEFAULT_NODE_GROUP_SIZE;

    buffer.push(documentNodeId, startOffset, endOffest, documentNodeSize);

    return buffer;
  }

  private buildTree(document: string) {
    const tokens = this.languageServer.getTokenStream(document);

    if (tokens.length < 1) {
      return Tree.build({
        buffer: [
          tokenToNodeType.document.id,
          0,
          document.length,
          DEFAULT_NODE_GROUP_SIZE,
        ],
        nodeSet: parserAdapterNodeSet,
        topID: tokenToNodeType.document.id,
      });
    }

    const buffer = this.createBufferFromTokens(tokens);

    return Tree.build({
      buffer: buffer,
      nodeSet: parserAdapterNodeSet,
      topID: tokenToNodeType.document.id,
    });
  }

  createParse(
    input: Input,
    fragments: readonly TreeFragment[],
    ranges: readonly { from: number; to: number }[]
  ): PartialParse {
    return this.startParse(input, fragments, ranges);
  }

  startParse(
    input: string | Input,
    _0?: readonly TreeFragment[] | undefined,
    _1?: readonly { from: number; to: number }[] | undefined
  ): PartialParse {
    const document =
      typeof input === "string" ? input : input.read(0, input.length);

    const tree = this.buildTree(document);

    return {
      stoppedAt: input.length,
      parsedPos: input.length,
      stopAt: (_) => {},
      advance: () => tree,
    };
  }

  configure() {}
}
