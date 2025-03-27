import { NodeSet, NodeType } from "@lezer/common";
import { Token } from "./index";
import { styleTags, tags } from "@lezer/highlight";
import { defineLanguageFacet, languageDataProp } from "@codemirror/language";

export const tokenToNodeType: { [key in Token | "document"]: NodeType } = {
  document: NodeType.define({
    id: 0,
    name: "document",
    top: true,
    props: [
      [
        languageDataProp,
        defineLanguageFacet({
          commentTokens: {
            block: { open: "/*", close: "*/" },
            line: "//",
          },
        }),
      ],
    ],
  }),
  not: NodeType.define({ id: 1, name: "NOT" }),
  and: NodeType.define({ id: 2, name: "AND" }),
  or: NodeType.define({ id: 3, name: "OR" }),
  "(": NodeType.define({ id: 4, name: "LPAREN" }),
  ")": NodeType.define({ id: 5, name: "RPAREN" }),
  "!=~": NodeType.define({ id: 6, name: "NOT_EQUALS_CI" }),
  "!=": NodeType.define({ id: 7, name: "NOT_EQUALS_CS" }),
  "=~": NodeType.define({ id: 8, name: "EQUALS_CI" }),
  "=": NodeType.define({ id: 9, name: "EQUALS_CS" }),
  "!contains~": NodeType.define({ id: 10, name: "NOT_CONTAINS_CI" }),
  "!contains": NodeType.define({ id: 11, name: "NOT_CONTAINS_CS" }),
  "contains~": NodeType.define({ id: 12, name: "CONTAINS_CI" }),
  contains: NodeType.define({ id: 13, name: "CONTAINS_CS" }),
  "!startswith~": NodeType.define({ id: 14, name: "NOT_STARTS_WITH_CI" }),
  "!startswith": NodeType.define({ id: 15, name: "NOT_STARTS_WITH_CS" }),
  "startswith~": NodeType.define({ id: 16, name: "STARTS_WITH_CI" }),
  startswith: NodeType.define({ id: 17, name: "STARTS_WITH_CS" }),
  "!endswith~": NodeType.define({ id: 18, name: "NOT_ENDS_WITH_CI" }),
  "!endswith": NodeType.define({ id: 19, name: "NOT_ENDS_WITH_CS" }),
  "endswith~": NodeType.define({ id: 20, name: "ENDS_WITH_CI" }),
  endswith: NodeType.define({ id: 21, name: "ENDS_WITH_CS" }),
  fieldname: NodeType.define({ id: 22, name: "FIELD_NAME" }),
  stringLiteral: NodeType.define({ id: 23, name: "STRING_LITERAL" }),
  ws: NodeType.define({ id: 24, name: "WS" }),
  eof: NodeType.define({ id: 25, name: "eof" }),
};

export const parserAdapterNodeSet = new NodeSet(
  Object.values(tokenToNodeType)
).extend(
  styleTags({
    NOT: tags.operator,
    AND: tags.operator,
    OR: tags.operator,
    LPAREN: tags.brace,
    RPAREN: tags.brace,
    NOT_EQUALS_CI: tags.operator,
    NOT_EQUALS_CS: tags.operator,
    EQUALS_CI: tags.operator,
    EQUALS_CS: tags.operator,
    NOT_CONTAINS_CI: tags.operator,
    NOT_CONTAINS_CS: tags.operator,
    CONTAINS_CI: tags.operator,
    CONTAINS_CS: tags.operator,
    NOT_STARTS_WITH_CI: tags.operator,
    NOT_STARTS_WITH_CS: tags.operator,
    STARTS_WITH_CI: tags.operator,
    STARTS_WITH_CS: tags.operator,
    NOT_ENDS_WITH_CI: tags.operator,
    NOT_ENDS_WITH_CS: tags.operator,
    ENDS_WITH_CI: tags.operator,
    ENDS_WITH_CS: tags.operator,
    FIELD_NAME: tags.variableName,
    STRING_LITERAL: tags.string,
    WS: tags.operator,
  })
);
