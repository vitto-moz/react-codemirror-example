import { CharStreams, CommonTokenStream } from "antlr4";
import LogQueryLexer from "../grammar/LogQueryLexer";

const lexerTokenToTokenLookup: { [key: number]: Token } = {
  [LogQueryLexer.NOT]: "not",
  [LogQueryLexer.AND]: "and",
  [LogQueryLexer.OR]: "or",
  [LogQueryLexer.LPAREN]: "(",
  [LogQueryLexer.RPAREN]: ")",
  [LogQueryLexer.NOT_EQUALS_CI]: "!=~",
  [LogQueryLexer.NOT_EQUALS_CS]: "!=",
  [LogQueryLexer.EQUALS_CI]: "=~",
  [LogQueryLexer.EQUALS_CS]: "=",
  [LogQueryLexer.NOT_CONTAINS_CI]: "!contains~",
  [LogQueryLexer.NOT_CONTAINS_CS]: "!contains",
  [LogQueryLexer.CONTAINS_CI]: "contains~",
  [LogQueryLexer.CONTAINS_CS]: "contains",
  [LogQueryLexer.NOT_STARTS_WITH_CI]: "!startswith~",
  [LogQueryLexer.NOT_STARTS_WITH_CS]: "!startswith",
  [LogQueryLexer.STARTS_WITH_CI]: "!startswith~",
  [LogQueryLexer.STARTS_WITH_CS]: "startswith",
  [LogQueryLexer.NOT_ENDS_WITH_CI]: "!endswith~",
  [LogQueryLexer.NOT_ENDS_WITH_CS]: "!endswith",
  [LogQueryLexer.ENDS_WITH_CI]: "endswith~",
  [LogQueryLexer.ENDS_WITH_CS]: "endswith",
  [LogQueryLexer.FIELD_NAME]: "fieldname",
  [LogQueryLexer.STRING_LITERAL]: "stringLiteral",
  [LogQueryLexer.WS]: "ws",
  [LogQueryLexer.EOF]: "eof",
};

const supportedTokens = [
  "not",
  "and",
  "or",
  "(",
  ")",
  "!=~",
  "!=",
  "=~",
  "=",
  "!contains~",
  "!contains",
  "contains~",
  "contains",
  "!startswith~",
  "!startswith",
  "startswith~",
  "startswith",
  "!endswith~",
  "!endswith",
  "endswith~",
  "endswith",
  "fieldname",
  "stringLiteral",
  "ws",
  "eof",
] as const;

export type Token = (typeof supportedTokens)[number];

export class LanguageServer {
  // 1
  public getTokenStream(value: string) {
    // 2
    const chars = CharStreams.fromString(value);
    const lexer = new LogQueryLexer(chars);
    // 3
    const tokenStream = new CommonTokenStream(lexer);

    // 4
    tokenStream.fill();

    // 5
    return tokenStream.tokens;
  }

  // 6
  public getTokenTypeForIndex(tokenIndex: number): Token | "unknown" {
    if (tokenIndex in lexerTokenToTokenLookup) {
      return lexerTokenToTokenLookup[tokenIndex];
    }

    return "unknown";
  }
}

const languageServer = new LanguageServer();

const tokens = languageServer
  .getTokenStream(
    `container_group_id = "2c5dca5a-e52a-4c5b-8d19-79f89e68fbb1" and severity = "error"`
  )
  .map((token) => {
    return {
      index: token.tokenIndex,
      range: [token.start, token.stop],
      type: languageServer.getTokenTypeForIndex(token.type),
    };
  });
