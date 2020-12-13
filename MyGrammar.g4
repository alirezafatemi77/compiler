grammar MyGrammar; 

T_ReadLine            :'ReadLine';  
T_ReadInteger         :'ReadInteger';
T_PRINT               :'Print';
T_NewArray            :'NewArray';
T_new                 :'new';
T_while               :'while';
T_this                :'this';
T_null                :'null';
T_DOUBLE              : 'double';
T_CLASS               : 'class';
T_PROGRAM             : 'Program';
T_IF                  : 'if';
T_ELSE                : 'else';
T_FOR                 : 'for';
T_RETURN              : 'return';
T_BREAK               : 'break';
T_CONTINUE            : 'continue';
T_BOOL                : 'bool';
T_CHAR                : 'char';
T_INT                 : 'int';
T_STRING              : 'string';
T_TRUE                : 'True';
T_FALSE               : 'False';
T_VOID                : 'void';
T_CALLOUT             : 'callout';
// Symbol Specification
T_SEMICOLON           : ';';
T_LCURLY              : '{';
T_RCURLY              : '}';
T_LSQUARE             : '[';
T_RSQUARE             : ']';
T_LROUND              : '(';
T_RROUND              : ')';
T_COMMA               : ',';
T_DOT                 : '.';
T_QUOTES              : '"';
T_ADD                 : '+';
T_SUB                 : '-';
T_MULTIPLY            : '*';
T_DIVIDE              : '/';
T_REMINDER            : '%';
T_AND                 : '&&';
T_OR                  : '||';
T_NOT                 : '!';
T_GREATER_OP          : '>';
T_LESS_OP             : '<';
T_GREATER_eq_op       : '>=';
T_LESS_eq_op          : '<=';
T_EQUAL_OP            : '=';
T_ADD_eq_op           : '+=';
T_SUB_eq_op           : '-=';
T_EQUALITY_OP         : '==';
T_UNEQUALITY_OP       : '!='; 

// Variable names & literal specification
T_ID         : [a-zA-Z] ([a-zA-Z]|[0-9]|'_')*; // for variable name




UnsignedDecimalInteger : ( ( '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' ) DigitString? ) | '0';
DigitString : ( DIGIT )+ ;
DIGIT      : [0-9];

HEX_LITERAL         : '0'[xX][0-9a-fA-F]+;

HEX_DIGIT  : '0'[xX]([0-9] | [a-fA-F]);

BOOL_LITERAL        : T_TRUE | T_FALSE;

FLOAT_LITERAL :[0-9]* '.'[0-9]+;

DOUBLE_LITERAL : FLOAT_LITERAL [eE] ('+'|'^') DigitString ;

/////////////////id//////////////////


STRING:~["\\\r\n]	'"' T_ID* '"';






//var_id              : ID;

//WHITESPACE			: [' '] -> skip ;