// Generated from LogQuery.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import LogQueryListener from "./LogQueryListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class LogQueryParser extends Parser {
	public static readonly NOT = 1;
	public static readonly AND = 2;
	public static readonly OR = 3;
	public static readonly LPAREN = 4;
	public static readonly RPAREN = 5;
	public static readonly NOT_EQUALS_CI = 6;
	public static readonly NOT_EQUALS_CS = 7;
	public static readonly EQUALS_CI = 8;
	public static readonly EQUALS_CS = 9;
	public static readonly NOT_CONTAINS_CI = 10;
	public static readonly NOT_CONTAINS_CS = 11;
	public static readonly CONTAINS_CI = 12;
	public static readonly CONTAINS_CS = 13;
	public static readonly NOT_STARTS_WITH_CI = 14;
	public static readonly NOT_STARTS_WITH_CS = 15;
	public static readonly STARTS_WITH_CI = 16;
	public static readonly STARTS_WITH_CS = 17;
	public static readonly NOT_ENDS_WITH_CI = 18;
	public static readonly NOT_ENDS_WITH_CS = 19;
	public static readonly ENDS_WITH_CI = 20;
	public static readonly ENDS_WITH_CS = 21;
	public static readonly FIELD_NAME = 22;
	public static readonly STRING_LITERAL = 23;
	public static readonly WS = 24;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_parse = 0;
	public static readonly RULE_expression = 1;
	public static readonly RULE_comparison = 2;
	public static readonly RULE_operator = 3;
	public static readonly literalNames: (string | null)[] = [ null, "'not'", 
                                                            "'and'", "'or'", 
                                                            "'('", "')'", 
                                                            "'!=~'", "'!='", 
                                                            "'=~'", "'='", 
                                                            "'!contains~'", 
                                                            "'!contains'", 
                                                            "'contains~'", 
                                                            "'contains'", 
                                                            "'!startswith~'", 
                                                            "'!startswith'", 
                                                            "'startswith~'", 
                                                            "'startswith'", 
                                                            "'!endswith~'", 
                                                            "'!endswith'", 
                                                            "'endswith~'", 
                                                            "'endswith'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "NOT", 
                                                             "AND", "OR", 
                                                             "LPAREN", "RPAREN", 
                                                             "NOT_EQUALS_CI", 
                                                             "NOT_EQUALS_CS", 
                                                             "EQUALS_CI", 
                                                             "EQUALS_CS", 
                                                             "NOT_CONTAINS_CI", 
                                                             "NOT_CONTAINS_CS", 
                                                             "CONTAINS_CI", 
                                                             "CONTAINS_CS", 
                                                             "NOT_STARTS_WITH_CI", 
                                                             "NOT_STARTS_WITH_CS", 
                                                             "STARTS_WITH_CI", 
                                                             "STARTS_WITH_CS", 
                                                             "NOT_ENDS_WITH_CI", 
                                                             "NOT_ENDS_WITH_CS", 
                                                             "ENDS_WITH_CI", 
                                                             "ENDS_WITH_CS", 
                                                             "FIELD_NAME", 
                                                             "STRING_LITERAL", 
                                                             "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"parse", "expression", "comparison", "operator",
	];
	public get grammarFileName(): string { return "LogQuery.g4"; }
	public get literalNames(): (string | null)[] { return LogQueryParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return LogQueryParser.symbolicNames; }
	public get ruleNames(): string[] { return LogQueryParser.ruleNames; }
	public get serializedATN(): number[] { return LogQueryParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, LogQueryParser._ATN, LogQueryParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public parse(): ParseContext {
		let localctx: ParseContext = new ParseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, LogQueryParser.RULE_parse);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 8;
			this.expression();
			this.state = 9;
			this.match(LogQueryParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, LogQueryParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 12;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 11;
				this.match(LogQueryParser.NOT);
				}
			}

			this.state = 14;
			this.comparison();
			this.state = 22;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===2 || _la===3) {
				{
				{
				this.state = 15;
				_la = this._input.LA(1);
				if(!(_la===2 || _la===3)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 17;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===1) {
					{
					this.state = 16;
					this.match(LogQueryParser.NOT);
					}
				}

				this.state = 19;
				this.comparison();
				}
				}
				this.state = 24;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public comparison(): ComparisonContext {
		let localctx: ComparisonContext = new ComparisonContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, LogQueryParser.RULE_comparison);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 25;
			this.match(LogQueryParser.FIELD_NAME);
			this.state = 26;
			this.operator();
			this.state = 27;
			this.match(LogQueryParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public operator(): OperatorContext {
		let localctx: OperatorContext = new OperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, LogQueryParser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 29;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4194240) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,24,32,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,1,0,1,0,1,0,1,1,3,1,13,8,1,1,1,1,1,1,1,3,1,18,8,1,
	1,1,5,1,21,8,1,10,1,12,1,24,9,1,1,2,1,2,1,2,1,2,1,3,1,3,1,3,0,0,4,0,2,4,
	6,0,2,1,0,2,3,1,0,6,21,30,0,8,1,0,0,0,2,12,1,0,0,0,4,25,1,0,0,0,6,29,1,
	0,0,0,8,9,3,2,1,0,9,10,5,0,0,1,10,1,1,0,0,0,11,13,5,1,0,0,12,11,1,0,0,0,
	12,13,1,0,0,0,13,14,1,0,0,0,14,22,3,4,2,0,15,17,7,0,0,0,16,18,5,1,0,0,17,
	16,1,0,0,0,17,18,1,0,0,0,18,19,1,0,0,0,19,21,3,4,2,0,20,15,1,0,0,0,21,24,
	1,0,0,0,22,20,1,0,0,0,22,23,1,0,0,0,23,3,1,0,0,0,24,22,1,0,0,0,25,26,5,
	22,0,0,26,27,3,6,3,0,27,28,5,23,0,0,28,5,1,0,0,0,29,30,7,1,0,0,30,7,1,0,
	0,0,3,12,17,22];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LogQueryParser.__ATN) {
			LogQueryParser.__ATN = new ATNDeserializer().deserialize(LogQueryParser._serializedATN);
		}

		return LogQueryParser.__ATN;
	}


	static DecisionsToDFA = LogQueryParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ParseContext extends ParserRuleContext {
	constructor(parser?: LogQueryParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(LogQueryParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return LogQueryParser.RULE_parse;
	}
	public enterRule(listener: LogQueryListener): void {
	    if(listener.enterParse) {
	 		listener.enterParse(this);
		}
	}
	public exitRule(listener: LogQueryListener): void {
	    if(listener.exitParse) {
	 		listener.exitParse(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: LogQueryParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public comparison_list(): ComparisonContext[] {
		return this.getTypedRuleContexts(ComparisonContext) as ComparisonContext[];
	}
	public comparison(i: number): ComparisonContext {
		return this.getTypedRuleContext(ComparisonContext, i) as ComparisonContext;
	}
	public NOT_list(): TerminalNode[] {
	    	return this.getTokens(LogQueryParser.NOT);
	}
	public NOT(i: number): TerminalNode {
		return this.getToken(LogQueryParser.NOT, i);
	}
	public AND_list(): TerminalNode[] {
	    	return this.getTokens(LogQueryParser.AND);
	}
	public AND(i: number): TerminalNode {
		return this.getToken(LogQueryParser.AND, i);
	}
	public OR_list(): TerminalNode[] {
	    	return this.getTokens(LogQueryParser.OR);
	}
	public OR(i: number): TerminalNode {
		return this.getToken(LogQueryParser.OR, i);
	}
    public get ruleIndex(): number {
    	return LogQueryParser.RULE_expression;
	}
	public enterRule(listener: LogQueryListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: LogQueryListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
}


export class ComparisonContext extends ParserRuleContext {
	constructor(parser?: LogQueryParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FIELD_NAME(): TerminalNode {
		return this.getToken(LogQueryParser.FIELD_NAME, 0);
	}
	public operator(): OperatorContext {
		return this.getTypedRuleContext(OperatorContext, 0) as OperatorContext;
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(LogQueryParser.STRING_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return LogQueryParser.RULE_comparison;
	}
	public enterRule(listener: LogQueryListener): void {
	    if(listener.enterComparison) {
	 		listener.enterComparison(this);
		}
	}
	public exitRule(listener: LogQueryListener): void {
	    if(listener.exitComparison) {
	 		listener.exitComparison(this);
		}
	}
}


export class OperatorContext extends ParserRuleContext {
	constructor(parser?: LogQueryParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQUALS_CS(): TerminalNode {
		return this.getToken(LogQueryParser.EQUALS_CS, 0);
	}
	public EQUALS_CI(): TerminalNode {
		return this.getToken(LogQueryParser.EQUALS_CI, 0);
	}
	public NOT_EQUALS_CS(): TerminalNode {
		return this.getToken(LogQueryParser.NOT_EQUALS_CS, 0);
	}
	public NOT_EQUALS_CI(): TerminalNode {
		return this.getToken(LogQueryParser.NOT_EQUALS_CI, 0);
	}
	public CONTAINS_CS(): TerminalNode {
		return this.getToken(LogQueryParser.CONTAINS_CS, 0);
	}
	public CONTAINS_CI(): TerminalNode {
		return this.getToken(LogQueryParser.CONTAINS_CI, 0);
	}
	public NOT_CONTAINS_CS(): TerminalNode {
		return this.getToken(LogQueryParser.NOT_CONTAINS_CS, 0);
	}
	public NOT_CONTAINS_CI(): TerminalNode {
		return this.getToken(LogQueryParser.NOT_CONTAINS_CI, 0);
	}
	public STARTS_WITH_CS(): TerminalNode {
		return this.getToken(LogQueryParser.STARTS_WITH_CS, 0);
	}
	public STARTS_WITH_CI(): TerminalNode {
		return this.getToken(LogQueryParser.STARTS_WITH_CI, 0);
	}
	public NOT_STARTS_WITH_CS(): TerminalNode {
		return this.getToken(LogQueryParser.NOT_STARTS_WITH_CS, 0);
	}
	public NOT_STARTS_WITH_CI(): TerminalNode {
		return this.getToken(LogQueryParser.NOT_STARTS_WITH_CI, 0);
	}
	public ENDS_WITH_CS(): TerminalNode {
		return this.getToken(LogQueryParser.ENDS_WITH_CS, 0);
	}
	public ENDS_WITH_CI(): TerminalNode {
		return this.getToken(LogQueryParser.ENDS_WITH_CI, 0);
	}
	public NOT_ENDS_WITH_CS(): TerminalNode {
		return this.getToken(LogQueryParser.NOT_ENDS_WITH_CS, 0);
	}
	public NOT_ENDS_WITH_CI(): TerminalNode {
		return this.getToken(LogQueryParser.NOT_ENDS_WITH_CI, 0);
	}
    public get ruleIndex(): number {
    	return LogQueryParser.RULE_operator;
	}
	public enterRule(listener: LogQueryListener): void {
	    if(listener.enterOperator) {
	 		listener.enterOperator(this);
		}
	}
	public exitRule(listener: LogQueryListener): void {
	    if(listener.exitOperator) {
	 		listener.exitOperator(this);
		}
	}
}
