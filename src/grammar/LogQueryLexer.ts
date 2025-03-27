// Generated from LogQuery.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class LogQueryLexer extends Lexer {
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
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"NOT", "AND", "OR", "LPAREN", "RPAREN", "NOT_EQUALS_CI", "NOT_EQUALS_CS", 
		"EQUALS_CI", "EQUALS_CS", "NOT_CONTAINS_CI", "NOT_CONTAINS_CS", "CONTAINS_CI", 
		"CONTAINS_CS", "NOT_STARTS_WITH_CI", "NOT_STARTS_WITH_CS", "STARTS_WITH_CI", 
		"STARTS_WITH_CS", "NOT_ENDS_WITH_CI", "NOT_ENDS_WITH_CS", "ENDS_WITH_CI", 
		"ENDS_WITH_CS", "FIELD_PART", "FIELD_NAME", "STRING_LITERAL", "WS",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, LogQueryLexer._ATN, LogQueryLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "LogQuery.g4"; }

	public get literalNames(): (string | null)[] { return LogQueryLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return LogQueryLexer.symbolicNames; }
	public get ruleNames(): string[] { return LogQueryLexer.ruleNames; }

	public get serializedATN(): number[] { return LogQueryLexer._serializedATN; }

	public get channelNames(): string[] { return LogQueryLexer.channelNames; }

	public get modeNames(): string[] { return LogQueryLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,24,234,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	2,24,7,24,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,
	5,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,
	9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,11,
	1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,
	12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,
	1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,
	15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,
	1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,
	17,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
	1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,
	20,1,20,1,20,1,20,1,20,1,21,1,21,5,21,209,8,21,10,21,12,21,212,9,21,1,22,
	1,22,1,22,5,22,217,8,22,10,22,12,22,220,9,22,1,23,1,23,5,23,224,8,23,10,
	23,12,23,227,9,23,1,23,1,23,1,24,1,24,1,24,1,24,0,0,25,1,1,3,2,5,3,7,4,
	9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,
	35,18,37,19,39,20,41,21,43,0,45,22,47,23,49,24,1,0,4,3,0,65,90,95,95,97,
	122,4,0,48,57,65,90,95,95,97,122,1,0,34,34,3,0,9,10,13,13,32,32,235,0,1,
	1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,
	13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,
	0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,
	35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,45,1,0,0,0,0,47,1,0,
	0,0,0,49,1,0,0,0,1,51,1,0,0,0,3,55,1,0,0,0,5,59,1,0,0,0,7,62,1,0,0,0,9,
	64,1,0,0,0,11,66,1,0,0,0,13,70,1,0,0,0,15,73,1,0,0,0,17,76,1,0,0,0,19,78,
	1,0,0,0,21,89,1,0,0,0,23,99,1,0,0,0,25,109,1,0,0,0,27,118,1,0,0,0,29,131,
	1,0,0,0,31,143,1,0,0,0,33,155,1,0,0,0,35,166,1,0,0,0,37,177,1,0,0,0,39,
	187,1,0,0,0,41,197,1,0,0,0,43,206,1,0,0,0,45,213,1,0,0,0,47,221,1,0,0,0,
	49,230,1,0,0,0,51,52,5,110,0,0,52,53,5,111,0,0,53,54,5,116,0,0,54,2,1,0,
	0,0,55,56,5,97,0,0,56,57,5,110,0,0,57,58,5,100,0,0,58,4,1,0,0,0,59,60,5,
	111,0,0,60,61,5,114,0,0,61,6,1,0,0,0,62,63,5,40,0,0,63,8,1,0,0,0,64,65,
	5,41,0,0,65,10,1,0,0,0,66,67,5,33,0,0,67,68,5,61,0,0,68,69,5,126,0,0,69,
	12,1,0,0,0,70,71,5,33,0,0,71,72,5,61,0,0,72,14,1,0,0,0,73,74,5,61,0,0,74,
	75,5,126,0,0,75,16,1,0,0,0,76,77,5,61,0,0,77,18,1,0,0,0,78,79,5,33,0,0,
	79,80,5,99,0,0,80,81,5,111,0,0,81,82,5,110,0,0,82,83,5,116,0,0,83,84,5,
	97,0,0,84,85,5,105,0,0,85,86,5,110,0,0,86,87,5,115,0,0,87,88,5,126,0,0,
	88,20,1,0,0,0,89,90,5,33,0,0,90,91,5,99,0,0,91,92,5,111,0,0,92,93,5,110,
	0,0,93,94,5,116,0,0,94,95,5,97,0,0,95,96,5,105,0,0,96,97,5,110,0,0,97,98,
	5,115,0,0,98,22,1,0,0,0,99,100,5,99,0,0,100,101,5,111,0,0,101,102,5,110,
	0,0,102,103,5,116,0,0,103,104,5,97,0,0,104,105,5,105,0,0,105,106,5,110,
	0,0,106,107,5,115,0,0,107,108,5,126,0,0,108,24,1,0,0,0,109,110,5,99,0,0,
	110,111,5,111,0,0,111,112,5,110,0,0,112,113,5,116,0,0,113,114,5,97,0,0,
	114,115,5,105,0,0,115,116,5,110,0,0,116,117,5,115,0,0,117,26,1,0,0,0,118,
	119,5,33,0,0,119,120,5,115,0,0,120,121,5,116,0,0,121,122,5,97,0,0,122,123,
	5,114,0,0,123,124,5,116,0,0,124,125,5,115,0,0,125,126,5,119,0,0,126,127,
	5,105,0,0,127,128,5,116,0,0,128,129,5,104,0,0,129,130,5,126,0,0,130,28,
	1,0,0,0,131,132,5,33,0,0,132,133,5,115,0,0,133,134,5,116,0,0,134,135,5,
	97,0,0,135,136,5,114,0,0,136,137,5,116,0,0,137,138,5,115,0,0,138,139,5,
	119,0,0,139,140,5,105,0,0,140,141,5,116,0,0,141,142,5,104,0,0,142,30,1,
	0,0,0,143,144,5,115,0,0,144,145,5,116,0,0,145,146,5,97,0,0,146,147,5,114,
	0,0,147,148,5,116,0,0,148,149,5,115,0,0,149,150,5,119,0,0,150,151,5,105,
	0,0,151,152,5,116,0,0,152,153,5,104,0,0,153,154,5,126,0,0,154,32,1,0,0,
	0,155,156,5,115,0,0,156,157,5,116,0,0,157,158,5,97,0,0,158,159,5,114,0,
	0,159,160,5,116,0,0,160,161,5,115,0,0,161,162,5,119,0,0,162,163,5,105,0,
	0,163,164,5,116,0,0,164,165,5,104,0,0,165,34,1,0,0,0,166,167,5,33,0,0,167,
	168,5,101,0,0,168,169,5,110,0,0,169,170,5,100,0,0,170,171,5,115,0,0,171,
	172,5,119,0,0,172,173,5,105,0,0,173,174,5,116,0,0,174,175,5,104,0,0,175,
	176,5,126,0,0,176,36,1,0,0,0,177,178,5,33,0,0,178,179,5,101,0,0,179,180,
	5,110,0,0,180,181,5,100,0,0,181,182,5,115,0,0,182,183,5,119,0,0,183,184,
	5,105,0,0,184,185,5,116,0,0,185,186,5,104,0,0,186,38,1,0,0,0,187,188,5,
	101,0,0,188,189,5,110,0,0,189,190,5,100,0,0,190,191,5,115,0,0,191,192,5,
	119,0,0,192,193,5,105,0,0,193,194,5,116,0,0,194,195,5,104,0,0,195,196,5,
	126,0,0,196,40,1,0,0,0,197,198,5,101,0,0,198,199,5,110,0,0,199,200,5,100,
	0,0,200,201,5,115,0,0,201,202,5,119,0,0,202,203,5,105,0,0,203,204,5,116,
	0,0,204,205,5,104,0,0,205,42,1,0,0,0,206,210,7,0,0,0,207,209,7,1,0,0,208,
	207,1,0,0,0,209,212,1,0,0,0,210,208,1,0,0,0,210,211,1,0,0,0,211,44,1,0,
	0,0,212,210,1,0,0,0,213,218,3,43,21,0,214,215,5,46,0,0,215,217,3,43,21,
	0,216,214,1,0,0,0,217,220,1,0,0,0,218,216,1,0,0,0,218,219,1,0,0,0,219,46,
	1,0,0,0,220,218,1,0,0,0,221,225,5,34,0,0,222,224,8,2,0,0,223,222,1,0,0,
	0,224,227,1,0,0,0,225,223,1,0,0,0,225,226,1,0,0,0,226,228,1,0,0,0,227,225,
	1,0,0,0,228,229,5,34,0,0,229,48,1,0,0,0,230,231,7,3,0,0,231,232,1,0,0,0,
	232,233,6,24,0,0,233,50,1,0,0,0,4,0,210,218,225,1,0,1,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LogQueryLexer.__ATN) {
			LogQueryLexer.__ATN = new ATNDeserializer().deserialize(LogQueryLexer._serializedATN);
		}

		return LogQueryLexer.__ATN;
	}


	static DecisionsToDFA = LogQueryLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}