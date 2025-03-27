import { LRLanguage, LanguageSupport } from "@codemirror/language";
import { syntaxHighlightingExtension } from "./syntaxHighlightingExtension";
import { LogQueryLexer } from "./grammar/LogQueryLexer";

const customLanguage = LRLanguage.define({
  parser: {
    parse(input) {
      const lexer = new LogQueryLexer(input);
      const tokens = [];
      let token = lexer.nextToken();

      while (token.type !== LogQueryLexer.EOF) {
        tokens.push({
          type: token.type,
          start: token.start,
          stop: token.stop,
        });
        token = lexer.nextToken();
      }

      return { tokens };
    },
    configure() {},
    startParse() {},
  },
});

export function logQueryCustomSyntax() {
  return new LanguageSupport(customLanguage, [syntaxHighlightingExtension]);
}
