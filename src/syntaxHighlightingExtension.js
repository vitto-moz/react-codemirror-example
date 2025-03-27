import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
import { tags as t } from "@lezer/highlight";

const customHighlightStyle = HighlightStyle.define([
  { tag: t.keyword, color: "#ff5c57" },
  { tag: t.string, color: "#5af78e" },
  { tag: t.comment, color: "#888" },
  { tag: t.variableName, color: "#57c7ff" },
  { tag: t.operator, color: "#ff6ac1" },
]);

export const syntaxHighlightingExtension =
  syntaxHighlighting(customHighlightStyle);
