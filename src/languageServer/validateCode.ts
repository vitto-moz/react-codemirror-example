import LogQueryLexer from "../grammar/LogQueryLexer";
import LogQueryParser from "../grammar/LogQueryParser";
import { ErrorListener, RecognitionException, Recognizer } from "antlr4";
import antlr4 from "antlr4";

class CustomErrorListener implements ErrorListener<any> {
  errors: { from: number; to: number; message: string }[] = [];

  syntaxError(
    recognizer: Recognizer<any>,
    offendingSymbol: any,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: RecognitionException | undefined
  ) {
    this.errors.push({
      from: charPositionInLine,
      to: charPositionInLine + 1,
      message: msg,
    });
  }
}

export function validateCode(input: string) {
  const chars = new antlr4.InputStream(input);
  const lexer = new LogQueryLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new LogQueryParser(tokens);

  parser.removeErrorListeners();

  const errorListener = new CustomErrorListener();
  parser.removeErrorListeners(); // Remove default Console error listener
  parser.addErrorListener(errorListener);

  parser.parse(); // Start parsing

  return errorListener.errors;
}
