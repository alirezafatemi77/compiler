grammar MyGrammar;

T_VOID                : 'void';
T_INT                 : 'int';
T_DOUBLE              : 'double';
T_BOOL                : 'bool';
T_STRING              : 'string';
T_NULL                : 'null';
T_THIS                : 'this';
T_FOR                 : 'for';
T_WHILE               : 'while';
T_IF                  : 'if';
T_ELSE                : 'else';
T_RETURN              : 'return';
T_BREAK               : 'break';
T_NEW                 : 'new';
T_NEWARRAY            : 'NewArray';
T_PRINT               : 'Print';
T_READINTEGER         : 'ReadInteger';
T_READLINE            : 'ReadLine';  
T_TRUE				  : 'true';
T_FALSE               : 'false';

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
T_EQUALITY_OP         : '==';
T_UNEQUALITY_OP       : '!=';

// Variable names & literal specification
T_ID         : [a-zA-Z] ([a-zA-Z]|[0-9]|'_')*; 


T_INT_LITERAL         : [1-9][0-9]* | '0' ;
T_HEX_LITERAL         : '0'[xX][0-9a-fA-F]+;
T_BOOL_LITERAL        : T_TRUE | T_FALSE;
T_DOUBLE_LITERAL : [0-9]+ '.' [0-9]* ( [eE]('+' | '-')? [0-9]+ )? ;

T_STRING_LITERAL : '"' ~[\r\n"]* '"' ;

WHITESPACE	: [ \n\t\r]+ -> skip ;

COMMENT
  : '/*' .*? '*/' -> channel(HIDDEN) ;
LINE_COMMENT
  : '//' ~[\r\n]* -> channel(HIDDEN) ;

constant : T_INT_LITERAL | T_BOOL_LITERAL | T_DOUBLE_LITERAL | T_DOUBLE_LITERAL | T_HEX_LITERAL ;