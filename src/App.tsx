import React, { useState, useCallback, useMemo } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { Language, LanguageSupport, syntaxTree } from "@codemirror/language";
import { Extension, Facet } from "@codemirror/state";
import { ParserAdapter } from "./languageServer/parserAdapter";
import { syntaxHighlight } from "./languageServer/highlight";
import { linter, Diagnostic } from "@codemirror/lint";
import "./App.css";
import "./languageServer";
import LogQueryLexer from "./grammar/LogQueryLexer";
import LogQueryParser from "./grammar/LogQueryParser";
import antlr4 from "antlr4";

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
    });
  },
  {
    delay: 0,
  }
);

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
