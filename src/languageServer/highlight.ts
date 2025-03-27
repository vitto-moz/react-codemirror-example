import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";

import { tags } from "@lezer/highlight";

export const syntaxHighlight = syntaxHighlighting(
  HighlightStyle.define([
    { tag: tags.brace, class: "text-slate-500" },
    { tag: tags.operator, class: "text-fuchsia-700" },
    { tag: tags.variableName, class: "text-blue-600" },
    { tag: tags.string, class: "text-lime-600" },
  ])
);
