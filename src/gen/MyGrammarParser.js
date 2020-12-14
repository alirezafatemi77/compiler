// Generated from MyGrammar.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';
import MyGrammarListener from './MyGrammarListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u00037\u0007\u0004\u0002\t\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0002\u0002\u0003\u0002\u0002\u0003\u0003\u000203\u0002\u0005",
    "\u0002\u0004\u0003\u0002\u0002\u0002\u0004\u0005\t\u0002\u0002\u0002",
    "\u0005\u0003\u0003\u0002\u0002\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class MyGrammarParser extends antlr4.Parser {

    static grammarFileName = "MyGrammar.g4";
    static literalNames = [ null, "'void'", "'int'", "'double'", "'bool'", 
                            "'string'", "'null'", "'this'", "'for'", "'while'", 
                            "'if'", "'else'", "'return'", "'break'", "'new'", 
                            "'NewArray'", "'Print'", "'ReadInteger'", "'ReadLine'", 
                            "'true'", "'false'", "';'", "'{'", "'}'", "'['", 
                            "']'", "'('", "')'", "','", "'.'", "'+'", "'-'", 
                            "'*'", "'/'", "'%'", "'&&'", "'||'", "'!'", 
                            "'>'", "'<'", "'>='", "'<='", "'='", "'=='", 
                            "'!='" ];
    static symbolicNames = [ null, "T_VOID", "T_INT", "T_DOUBLE", "T_BOOL", 
                             "T_STRING", "T_NULL", "T_THIS", "T_FOR", "T_WHILE", 
                             "T_IF", "T_ELSE", "T_RETURN", "T_BREAK", "T_NEW", 
                             "T_NEWARRAY", "T_PRINT", "T_READINTEGER", "T_READLINE", 
                             "T_TRUE", "T_FALSE", "T_SEMICOLON", "T_LCURLY", 
                             "T_RCURLY", "T_LSQUARE", "T_RSQUARE", "T_LROUND", 
                             "T_RROUND", "T_COMMA", "T_DOT", "T_ADD", "T_SUB", 
                             "T_MULTIPLY", "T_DIVIDE", "T_REMINDER", "T_AND", 
                             "T_OR", "T_NOT", "T_GREATER_OP", "T_LESS_OP", 
                             "T_GREATER_eq_op", "T_LESS_eq_op", "T_EQUAL_OP", 
                             "T_EQUALITY_OP", "T_UNEQUALITY_OP", "T_ID", 
                             "T_INT_LITERAL", "T_HEX_LITERAL", "T_BOOL_LITERAL", 
                             "T_DOUBLE_LITERAL", "T_STRING_LITERAL", "WHITESPACE", 
                             "COMMENT", "LINE_COMMENT" ];
    static ruleNames = [ "constant" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MyGrammarParser.ruleNames;
        this.literalNames = MyGrammarParser.literalNames;
        this.symbolicNames = MyGrammarParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	constant() {
	    let localctx = new ConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MyGrammarParser.RULE_constant);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 2;
	        _la = this._input.LA(1);
	        if(!(((((_la - 46)) & ~0x1f) == 0 && ((1 << (_la - 46)) & ((1 << (MyGrammarParser.T_INT_LITERAL - 46)) | (1 << (MyGrammarParser.T_HEX_LITERAL - 46)) | (1 << (MyGrammarParser.T_BOOL_LITERAL - 46)) | (1 << (MyGrammarParser.T_DOUBLE_LITERAL - 46)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MyGrammarParser.EOF = antlr4.Token.EOF;
MyGrammarParser.T_VOID = 1;
MyGrammarParser.T_INT = 2;
MyGrammarParser.T_DOUBLE = 3;
MyGrammarParser.T_BOOL = 4;
MyGrammarParser.T_STRING = 5;
MyGrammarParser.T_NULL = 6;
MyGrammarParser.T_THIS = 7;
MyGrammarParser.T_FOR = 8;
MyGrammarParser.T_WHILE = 9;
MyGrammarParser.T_IF = 10;
MyGrammarParser.T_ELSE = 11;
MyGrammarParser.T_RETURN = 12;
MyGrammarParser.T_BREAK = 13;
MyGrammarParser.T_NEW = 14;
MyGrammarParser.T_NEWARRAY = 15;
MyGrammarParser.T_PRINT = 16;
MyGrammarParser.T_READINTEGER = 17;
MyGrammarParser.T_READLINE = 18;
MyGrammarParser.T_TRUE = 19;
MyGrammarParser.T_FALSE = 20;
MyGrammarParser.T_SEMICOLON = 21;
MyGrammarParser.T_LCURLY = 22;
MyGrammarParser.T_RCURLY = 23;
MyGrammarParser.T_LSQUARE = 24;
MyGrammarParser.T_RSQUARE = 25;
MyGrammarParser.T_LROUND = 26;
MyGrammarParser.T_RROUND = 27;
MyGrammarParser.T_COMMA = 28;
MyGrammarParser.T_DOT = 29;
MyGrammarParser.T_ADD = 30;
MyGrammarParser.T_SUB = 31;
MyGrammarParser.T_MULTIPLY = 32;
MyGrammarParser.T_DIVIDE = 33;
MyGrammarParser.T_REMINDER = 34;
MyGrammarParser.T_AND = 35;
MyGrammarParser.T_OR = 36;
MyGrammarParser.T_NOT = 37;
MyGrammarParser.T_GREATER_OP = 38;
MyGrammarParser.T_LESS_OP = 39;
MyGrammarParser.T_GREATER_eq_op = 40;
MyGrammarParser.T_LESS_eq_op = 41;
MyGrammarParser.T_EQUAL_OP = 42;
MyGrammarParser.T_EQUALITY_OP = 43;
MyGrammarParser.T_UNEQUALITY_OP = 44;
MyGrammarParser.T_ID = 45;
MyGrammarParser.T_INT_LITERAL = 46;
MyGrammarParser.T_HEX_LITERAL = 47;
MyGrammarParser.T_BOOL_LITERAL = 48;
MyGrammarParser.T_DOUBLE_LITERAL = 49;
MyGrammarParser.T_STRING_LITERAL = 50;
MyGrammarParser.WHITESPACE = 51;
MyGrammarParser.COMMENT = 52;
MyGrammarParser.LINE_COMMENT = 53;

MyGrammarParser.RULE_constant = 0;

class ConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyGrammarParser.RULE_constant;
    }

	T_INT_LITERAL() {
	    return this.getToken(MyGrammarParser.T_INT_LITERAL, 0);
	};

	T_BOOL_LITERAL() {
	    return this.getToken(MyGrammarParser.T_BOOL_LITERAL, 0);
	};

	T_DOUBLE_LITERAL() {
	    return this.getToken(MyGrammarParser.T_DOUBLE_LITERAL, 0);
	};

	T_HEX_LITERAL() {
	    return this.getToken(MyGrammarParser.T_HEX_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.enterConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.exitConstant(this);
		}
	}


}




MyGrammarParser.ConstantContext = ConstantContext; 
