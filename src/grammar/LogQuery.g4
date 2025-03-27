grammar LogQuery;

// Lexer Rules
NOT : 'not' ;
AND : 'and' ;
OR : 'or' ;

LPAREN : '(' ;
RPAREN : ')' ;

NOT_EQUALS_CI : '!=~' ;
NOT_EQUALS_CS : '!=' ;
EQUALS_CI : '=~' ;
EQUALS_CS : '=' ;

NOT_CONTAINS_CI : '!contains~';
NOT_CONTAINS_CS : '!contains';
CONTAINS_CI : 'contains~';
CONTAINS_CS : 'contains';

NOT_STARTS_WITH_CI : '!startswith~';
NOT_STARTS_WITH_CS : '!startswith';
STARTS_WITH_CI : 'startswith~';
STARTS_WITH_CS : 'startswith';

NOT_ENDS_WITH_CI : '!endswith~';
NOT_ENDS_WITH_CS : '!endswith';
ENDS_WITH_CI : 'endswith~';
ENDS_WITH_CS : 'endswith';

fragment FIELD_PART : [a-zA-Z_][a-zA-Z0-9_]* ;
FIELD_NAME : FIELD_PART ( '.' FIELD_PART )* ;
STRING_LITERAL : '"' ( ~'"' )* '"' ;

WS: [ \t\r\n] -> channel(HIDDEN) ;

// Parser Rules
parse
    : expression EOF
    ;

expression
    : (NOT)? comparison ((AND | OR) (NOT)? comparison)*
    ;

comparison
    : FIELD_NAME operator STRING_LITERAL
    ;

operator
    : EQUALS_CS
    | EQUALS_CI
    | NOT_EQUALS_CS
    | NOT_EQUALS_CI
    | CONTAINS_CS
    | CONTAINS_CI
    | NOT_CONTAINS_CS
    | NOT_CONTAINS_CI
    | STARTS_WITH_CS
    | STARTS_WITH_CI
    | NOT_STARTS_WITH_CS
    | NOT_STARTS_WITH_CI
    | ENDS_WITH_CS
    | ENDS_WITH_CI
    | NOT_ENDS_WITH_CS
    | NOT_ENDS_WITH_CI
    ;
