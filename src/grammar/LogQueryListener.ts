// Generated from LogQuery.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { ParseContext } from "./LogQueryParser.js";
import { ExpressionContext } from "./LogQueryParser.js";
import { ComparisonContext } from "./LogQueryParser.js";
import { OperatorContext } from "./LogQueryParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `LogQueryParser`.
 */
export default class LogQueryListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `LogQueryParser.parse`.
	 * @param ctx the parse tree
	 */
	enterParse?: (ctx: ParseContext) => void;
	/**
	 * Exit a parse tree produced by `LogQueryParser.parse`.
	 * @param ctx the parse tree
	 */
	exitParse?: (ctx: ParseContext) => void;
	/**
	 * Enter a parse tree produced by `LogQueryParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LogQueryParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LogQueryParser.comparison`.
	 * @param ctx the parse tree
	 */
	enterComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Exit a parse tree produced by `LogQueryParser.comparison`.
	 * @param ctx the parse tree
	 */
	exitComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Enter a parse tree produced by `LogQueryParser.operator`.
	 * @param ctx the parse tree
	 */
	enterOperator?: (ctx: OperatorContext) => void;
	/**
	 * Exit a parse tree produced by `LogQueryParser.operator`.
	 * @param ctx the parse tree
	 */
	exitOperator?: (ctx: OperatorContext) => void;
}

