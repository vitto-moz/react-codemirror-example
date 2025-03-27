import { EditorView, Decoration } from "@codemirror/view";
import { RangeSetBuilder } from "@codemirror/state";
import { LogQueryLexer } from "./grammar/LogQueryLexer";
import { LogQueryParser } from "./grammar/LogQueryParser";
import antlr4 from "antlr4";

function syntaxErrorChecker(code) {
  const errors = [];
  const lexer = new LogQueryLexer(code);
  const tokenStream = new antlr4.CommonTokenStream(lexer);
  const parser = new LogQueryParser(tokenStream);
  parser.buildParseTrees = true; // Ensure parse tree generation

  parser.removeErrorListeners();
  parser.addErrorListener({
    syntaxError: (recognizer, offendingSymbol, line, column, msg) => {
      errors.push({ line, column, msg });
    },
  });

  const tree = parser.parse(); // Replace with your actual start rule
  console.log(tree.toStringTree(parser)); // Debugging
  return errors;
}

export function errorHighlighting(view) {
  let builder = new RangeSetBuilder();
  const errors = syntaxErrorChecker(view.state.doc.toString());

  for (let { line, column } of errors) {
    let from = view.state.doc.line(line).from + column;
    builder.add(from, from + 1, Decoration.mark({ class: "error" }));
  }

  return builder.finish();
}

export const errorExtension = EditorView.decorations.compute(
  ["doc"],
  errorHighlighting
);
