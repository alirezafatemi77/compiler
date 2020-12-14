// import store from './store';
import antlr4 from 'antlr4';
import MyGrammarLexer from './gen/MyGrammarLexer.js';
import MyGrammarParser from './gen/MyGrammarParser.js';

 function parses(input1){
    const input = input1
    const chars = new antlr4.InputStream(input);
    const lexer = new MyGrammarLexer(chars);
    const tokens  = new antlr4.CommonTokenStream(lexer);
    const parser = new MyGrammarParser(tokens);
    let res1=[];
    var tokenss = lexer.getAllTokens();   //get all tokens from input
        for(var i = 0; i < tokenss.length; i++){
            var token = tokenss[i];  //set every token in a variable
            res1.push({token:parser.symbolicNames[token.type],value:token.text});// push token and value of token in an array for example res1=[{token:"T_int",value:'int'}]
        }


   // این قسمت فقط برای نمایش درست هست و کار خاصی نمیکنه. در واقع میگه اگر توکن ما اینت یا استرینگ یا دابل یا ای دی  بود تایپش رو مشخص کن تا برای نمایشش مشکلی نداشته باشیم
          res1.forEach(ele=>{
            if(ele.token == 'T_INT'||ele.token == 'T_bool'||ele.token == 'T_DOUBLE'||ele.token == 'T_STRING' ){
                ele.type="token"
              
            }else if(ele.token=='T_ID'||ele.token == 'T_INT_LITERAL'||ele.token == 'T_HEX_LITERAL'||ele.token == 'T_BOOL_LITERAL'||ele.token == 'T_DOUBLE_LITERAL'||ele.token == 'T_STRING_LITERAL'||ele.token =='COMMENT'||ele.token =='LINE_COMMENT'){
                ele.type="both"
                if(ele.token =='T_ID'){
                    if(ele.value.length >= 31){
                        ele.err='size error'
                        ele.value=null
                    }
                }
            }
            else if(ele.length==0){
                ele.err="undefinde token"
            }
            else{
                ele.type="value"
            }
    
          })
          
          return res1
        
    }

export default parses;