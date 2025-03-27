import React, { useState, useCallback, useMemo } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { Language, LanguageSupport, syntaxTree } from "@codemirror/language";
import { Extension, Facet } from "@codemirror/state";
import { ParserAdapter } from "./languageServer/parserAdapter";
import { syntaxHighlight } from "./languageServer/highlight";
import { linter, Diagnostic } from "@codemirror/lint";
import "./App.css";
import "./languageServer";
import { javascript } from "@codemirror/lang-javascript";
import LogQueryLexer from "./grammar/LogQueryLexer";
import LogQueryParser from "./grammar/LogQueryParser";
import antlr4 from "antlr4";

// const customLinter = linter((view) => {
//   console.log("test ===> ");
//   const code = view.state.doc.toString();
//   const errors = validateCode(code);

//   const result = errors.map((err) => ({
//     from: err.from,
//     to: err.to,
//     severity: "error",
//     message: err.message,
//   }));

//   console.log("result ===> ", result);
//   return result;
// });

const regexpLinter = linter(
  (view) => {
    return new Promise((resolve) => {
      console.log("start ===> ");
      const diagnostics: Diagnostic[] = [];
      const input = view.state.doc.toString();
      const chars = new antlr4.InputStream(input);
      const lexer = new LogQueryLexer(chars);
      const tokens = new antlr4.CommonTokenStream(lexer);
      const parser = new LogQueryParser(tokens);

      parser.removeErrorListeners();
      const errorListener = {
        syntaxError: (recognizer, offendingSymbol, line, column, msg) => {
          console.log("line ===> ", line);
          console.log("column ===> ", column);
          diagnostics.push({
            from: column,
            to: column + 1,
            severity: "error",
            message: msg,
          });
          resolve(diagnostics);
        },
      };
      parser.addErrorListener(errorListener);
      parser.parse(); // Replace with your actual start rule
      setTimeout(() => {
        resolve([]);
      }, 500);

      // Example: Check for missing semicolons

      // return diagnostics;
    });
  },
  {
    delay: 0,
  }
);

// const customLinter = linter((view) => {
//   let diagnostics: Diagnostic[] = [];
//   syntaxTree(view.state)
//     .cursor()
//     .iterate((node) => {
//       if (node.name == "RegExp")
//         diagnostics.push({
//           from: node.from,
//           to: node.to,
//           severity: "warning",
//           message: "Regular expressions are FORBIDDEN",
//           actions: [
//             {
//               name: "Remove",
//               apply(view, from, to) {
//                 view.dispatch({ changes: { from, to } });
//               },
//             },
//           ],
//         });
//     });
//   return diagnostics;
// });

// logQueryLanguage.configure({});

const parserAdapter = new ParserAdapter();
const logQueryLanguage = new Language(
  Facet.define(),
  parserAdapter,
  [],
  "LogQuery"
);

const logQuery = new LanguageSupport(logQueryLanguage, [
  syntaxHighlight,
  regexpLinter,
]);

function App() {
  const [value, setValue] = useState("");

  const extensions = useMemo<Extension[]>(() => [logQuery], []);

  const handleOnChange = useCallback((value) => {
    setValue(value);
  }, []);

  return (
    <CodeMirror
      value={value}
      onChange={handleOnChange}
      width="600px"
      height="600px"
      theme={"dark"}
      extensions={extensions}
      indentWithTab={false}
      basicSetup={{
        foldGutter: false,
        lineNumbers: true,
        highlightActiveLineGutter: true,
        dropCursor: false,
        allowMultipleSelections: false,
        indentOnInput: false,
        bracketMatching: false,
        closeBrackets: false,
        autocompletion: false,
        rectangularSelection: false,
        crosshairCursor: false,
        highlightActiveLine: true,
        highlightSelectionMatches: false,
        closeBracketsKeymap: false,
        searchKeymap: false,
        foldKeymap: false,
        completionKeymap: false,
        lintKeymap: false,
      }}
    />
  );
}

export default App;
