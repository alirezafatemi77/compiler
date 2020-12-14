// Generated from MyGrammar.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete listener for a parse tree produced by MyGrammarParser.
export default class MyGrammarListener extends antlr4.tree.ParseTreeListener {

	// Enter a parse tree produced by MyGrammarParser#constant.
	enterConstant(ctx) {
		console.log(ctx)
	}

	// Exit a parse tree produced by MyGrammarParser#constant.
	exitConstant(ctx) {
	}



}