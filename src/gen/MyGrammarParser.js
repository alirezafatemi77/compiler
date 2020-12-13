// Generated from MyGrammar.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';
import MyGrammarListener from './MyGrammarListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003<\u0120\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u00029\n\u0002\f\u0002\u000e",
    "\u0002<\u000b\u0002\u0003\u0002\u0007\u0002?\n\u0002\f\u0002\u000e\u0002",
    "B\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003M",
    "\n\u0003\f\u0003\u000e\u0003P\u000b\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004X\n\u0004\f\u0004",
    "\u000e\u0004[\u000b\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0005",
    "\u0006f\n\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007\bt\n\b\f\b",
    "\u000e\bw\u000b\b\u0005\by\n\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0005\t\u0080\n\t\u0003\n\u0003\n\u0007\n\u0084\n\n\f\n\u000e\n\u0087",
    "\u000b\n\u0003\n\u0007\n\u008a\n\n\f\n\u000e\n\u008d\u000b\n\u0003\n",
    "\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0005\u000b\u00a2\n\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u00b1\n\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u00b7\n",
    "\u000b\u0003\u000b\u0005\u000b\u00ba\n\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0005\u000b\u00c0\n\u000b\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0007\f\u00c7\n\f\f\f\u000e\f\u00ca\u000b\f\u0005",
    "\f\u00cc\n\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0007\r\u00db\n\r\f",
    "\r\u000e\r\u00de\u000b\r\u0005\r\u00e0\n\r\u0003\r\u0003\r\u0005\r\u00e4",
    "\n\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0005\u000e\u00f2\n\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0007\u000e\u00f8\n\u000e\f\u000e\u000e\u000e\u00fb\u000b",
    "\u000e\u0003\u000f\u0003\u000f\u0005\u000f\u00ff\n\u000f\u0003\u0010",
    "\u0003\u0010\u0005\u0010\u0103\n\u0010\u0003\u0011\u0003\u0011\u0003",
    "\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u0110\n\u0015\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0005\u0016\u0116\n\u0016\u0003",
    "\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0002\u0003\u001a\u001b\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*",
    ",.02\u0002\t\u0004\u00022244\u0003\u0002&)\u0003\u0002-.\u0003\u0002",
    "#$\u0003\u0002\u001e\"\u0004\u0002\u000b\u000b\r\r\u0003\u0002*,\u0002",
    "\u012e\u00024\u0003\u0002\u0002\u0002\u0004E\u0003\u0002\u0002\u0002",
    "\u0006S\u0003\u0002\u0002\u0002\b^\u0003\u0002\u0002\u0002\ne\u0003",
    "\u0002\u0002\u0002\fg\u0003\u0002\u0002\u0002\u000ei\u0003\u0002\u0002",
    "\u0002\u0010\u007f\u0003\u0002\u0002\u0002\u0012\u0081\u0003\u0002\u0002",
    "\u0002\u0014\u00bf\u0003\u0002\u0002\u0002\u0016\u00c1\u0003\u0002\u0002",
    "\u0002\u0018\u00e3\u0003\u0002\u0002\u0002\u001a\u00f1\u0003\u0002\u0002",
    "\u0002\u001c\u00fe\u0003\u0002\u0002\u0002\u001e\u0102\u0003\u0002\u0002",
    "\u0002 \u0104\u0003\u0002\u0002\u0002\"\u0106\u0003\u0002\u0002\u0002",
    "$\u0108\u0003\u0002\u0002\u0002&\u010a\u0003\u0002\u0002\u0002(\u010f",
    "\u0003\u0002\u0002\u0002*\u0115\u0003\u0002\u0002\u0002,\u0117\u0003",
    "\u0002\u0002\u0002.\u0119\u0003\u0002\u0002\u00020\u011b\u0003\u0002",
    "\u0002\u00022\u011d\u0003\u0002\u0002\u000245\u0007\u0003\u0002\u0002",
    "56\u0007\u0004\u0002\u00026:\u0007\u0015\u0002\u000279\u0005\u0006\u0004",
    "\u000287\u0003\u0002\u0002\u00029<\u0003\u0002\u0002\u0002:8\u0003\u0002",
    "\u0002\u0002:;\u0003\u0002\u0002\u0002;@\u0003\u0002\u0002\u0002<:\u0003",
    "\u0002\u0002\u0002=?\u0005\u000e\b\u0002>=\u0003\u0002\u0002\u0002?",
    "B\u0003\u0002\u0002\u0002@>\u0003\u0002\u0002\u0002@A\u0003\u0002\u0002",
    "\u0002AC\u0003\u0002\u0002\u0002B@\u0003\u0002\u0002\u0002CD\u0007\u0016",
    "\u0002\u0002D\u0003\u0003\u0002\u0002\u0002EF\u0005.\u0018\u0002FG\u0005",
    "\n\u0006\u0002GN\u0003\u0002\u0002\u0002HI\u0007\u001b\u0002\u0002I",
    "J\u0005.\u0018\u0002JK\u0005\n\u0006\u0002KM\u0003\u0002\u0002\u0002",
    "LH\u0003\u0002\u0002\u0002MP\u0003\u0002\u0002\u0002NL\u0003\u0002\u0002",
    "\u0002NO\u0003\u0002\u0002\u0002OQ\u0003\u0002\u0002\u0002PN\u0003\u0002",
    "\u0002\u0002QR\u0007\u0014\u0002\u0002R\u0005\u0003\u0002\u0002\u0002",
    "ST\u0005.\u0018\u0002TY\u0005\n\u0006\u0002UV\u0007\u001b\u0002\u0002",
    "VX\u0005\n\u0006\u0002WU\u0003\u0002\u0002\u0002X[\u0003\u0002\u0002",
    "\u0002YW\u0003\u0002\u0002\u0002YZ\u0003\u0002\u0002\u0002Z\\\u0003",
    "\u0002\u0002\u0002[Y\u0003\u0002\u0002\u0002\\]\u0007\u0014\u0002\u0002",
    "]\u0007\u0003\u0002\u0002\u0002^_\u0007/\u0002\u0002_`\u0007\u0017\u0002",
    "\u0002`a\u0005 \u0011\u0002ab\u0007\u0018\u0002\u0002b\t\u0003\u0002",
    "\u0002\u0002cf\u0005\f\u0007\u0002df\u0005\b\u0005\u0002ec\u0003\u0002",
    "\u0002\u0002ed\u0003\u0002\u0002\u0002f\u000b\u0003\u0002\u0002\u0002",
    "gh\u0007/\u0002\u0002h\r\u0003\u0002\u0002\u0002ij\u0005\u0010\t\u0002",
    "jk\u00052\u001a\u0002kx\u0007\u0019\u0002\u0002lm\u0005.\u0018\u0002",
    "mn\u0005\f\u0007\u0002nu\u0003\u0002\u0002\u0002op\u0007\u001b\u0002",
    "\u0002pq\u0005.\u0018\u0002qr\u0005\f\u0007\u0002rt\u0003\u0002\u0002",
    "\u0002so\u0003\u0002\u0002\u0002tw\u0003\u0002\u0002\u0002us\u0003\u0002",
    "\u0002\u0002uv\u0003\u0002\u0002\u0002vy\u0003\u0002\u0002\u0002wu\u0003",
    "\u0002\u0002\u0002xl\u0003\u0002\u0002\u0002xy\u0003\u0002\u0002\u0002",
    "yz\u0003\u0002\u0002\u0002z{\u0007\u001a\u0002\u0002{|\u0005\u0012\n",
    "\u0002|\u000f\u0003\u0002\u0002\u0002}\u0080\u0005.\u0018\u0002~\u0080",
    "\u0007\u0012\u0002\u0002\u007f}\u0003\u0002\u0002\u0002\u007f~\u0003",
    "\u0002\u0002\u0002\u0080\u0011\u0003\u0002\u0002\u0002\u0081\u0085\u0007",
    "\u0015\u0002\u0002\u0082\u0084\u0005\u0004\u0003\u0002\u0083\u0082\u0003",
    "\u0002\u0002\u0002\u0084\u0087\u0003\u0002\u0002\u0002\u0085\u0083\u0003",
    "\u0002\u0002\u0002\u0085\u0086\u0003\u0002\u0002\u0002\u0086\u008b\u0003",
    "\u0002\u0002\u0002\u0087\u0085\u0003\u0002\u0002\u0002\u0088\u008a\u0005",
    "\u0014\u000b\u0002\u0089\u0088\u0003\u0002\u0002\u0002\u008a\u008d\u0003",
    "\u0002\u0002\u0002\u008b\u0089\u0003\u0002\u0002\u0002\u008b\u008c\u0003",
    "\u0002\u0002\u0002\u008c\u008e\u0003\u0002\u0002\u0002\u008d\u008b\u0003",
    "\u0002\u0002\u0002\u008e\u008f\u0007\u0016\u0002\u0002\u008f\u0013\u0003",
    "\u0002\u0002\u0002\u0090\u0091\u0005\u001c\u000f\u0002\u0091\u0092\u0005",
    "0\u0019\u0002\u0092\u0093\u0005\u001a\u000e\u0002\u0093\u00c0\u0003",
    "\u0002\u0002\u0002\u0094\u0095\u0005\u001c\u000f\u0002\u0095\u0096\u0005",
    "0\u0019\u0002\u0096\u0097\u0005\u001a\u000e\u0002\u0097\u0098\u0007",
    "\u0014\u0002\u0002\u0098\u00c0\u0003\u0002\u0002\u0002\u0099\u00c0\u0005",
    "\u0018\r\u0002\u009a\u009b\u0007\u0005\u0002\u0002\u009b\u009c\u0007",
    "\u0019\u0002\u0002\u009c\u009d\u0005\u001a\u000e\u0002\u009d\u009e\u0007",
    "\u001a\u0002\u0002\u009e\u00a1\u0005\u0012\n\u0002\u009f\u00a0\u0007",
    "\u0006\u0002\u0002\u00a0\u00a2\u0005\u0012\n\u0002\u00a1\u009f\u0003",
    "\u0002\u0002\u0002\u00a1\u00a2\u0003\u0002\u0002\u0002\u00a2\u00c0\u0003",
    "\u0002\u0002\u0002\u00a3\u00a4\u0005\f\u0007\u0002\u00a4\u00a5\u0007",
    "*\u0002\u0002\u00a5\u00a6\u0005\u001a\u000e\u0002\u00a6\u00a7\u0007",
    "\u0014\u0002\u0002\u00a7\u00c0\u0003\u0002\u0002\u0002\u00a8\u00a9\u0007",
    "\b\u0002\u0002\u00a9\u00aa\u0005\u001a\u000e\u0002\u00aa\u00ab\u0007",
    "\u0014\u0002\u0002\u00ab\u00c0\u0003\u0002\u0002\u0002\u00ac\u00ad\u0007",
    "\u0007\u0002\u0002\u00ad\u00b0\u0005\f\u0007\u0002\u00ae\u00af\u0007",
    "*\u0002\u0002\u00af\u00b1\u0005 \u0011\u0002\u00b0\u00ae\u0003\u0002",
    "\u0002\u0002\u00b0\u00b1\u0003\u0002\u0002\u0002\u00b1\u00b2\u0003\u0002",
    "\u0002\u0002\u00b2\u00b9\u0007\u001b\u0002\u0002\u00b3\u00b6\u0005\f",
    "\u0007\u0002\u00b4\u00b5\u0007*\u0002\u0002\u00b5\u00b7\u0005 \u0011",
    "\u0002\u00b6\u00b4\u0003\u0002\u0002\u0002\u00b6\u00b7\u0003\u0002\u0002",
    "\u0002\u00b7\u00ba\u0003\u0002\u0002\u0002\u00b8\u00ba\u0005 \u0011",
    "\u0002\u00b9\u00b3\u0003\u0002\u0002\u0002\u00b9\u00b8\u0003\u0002\u0002",
    "\u0002\u00ba\u00bb\u0003\u0002\u0002\u0002\u00bb\u00bc\u0005\u0012\n",
    "\u0002\u00bc\u00c0\u0003\u0002\u0002\u0002\u00bd\u00be\u0007\t\u0002",
    "\u0002\u00be\u00c0\u0007\u0014\u0002\u0002\u00bf\u0090\u0003\u0002\u0002",
    "\u0002\u00bf\u0094\u0003\u0002\u0002\u0002\u00bf\u0099\u0003\u0002\u0002",
    "\u0002\u00bf\u009a\u0003\u0002\u0002\u0002\u00bf\u00a3\u0003\u0002\u0002",
    "\u0002\u00bf\u00a8\u0003\u0002\u0002\u0002\u00bf\u00ac\u0003\u0002\u0002",
    "\u0002\u00bf\u00bd\u0003\u0002\u0002\u0002\u00c0\u0015\u0003\u0002\u0002",
    "\u0002\u00c1\u00c2\u00052\u001a\u0002\u00c2\u00cb\u0007\u0019\u0002",
    "\u0002\u00c3\u00c8\u0005\u001a\u000e\u0002\u00c4\u00c5\u0007\u001b\u0002",
    "\u0002\u00c5\u00c7\u0005\u001a\u000e\u0002\u00c6\u00c4\u0003\u0002\u0002",
    "\u0002\u00c7\u00ca\u0003\u0002\u0002\u0002\u00c8\u00c6\u0003\u0002\u0002",
    "\u0002\u00c8\u00c9\u0003\u0002\u0002\u0002\u00c9\u00cc\u0003\u0002\u0002",
    "\u0002\u00ca\u00c8\u0003\u0002\u0002\u0002\u00cb\u00c3\u0003\u0002\u0002",
    "\u0002\u00cb\u00cc\u0003\u0002\u0002\u0002\u00cc\u00cd\u0003\u0002\u0002",
    "\u0002\u00cd\u00ce\u0007\u001a\u0002\u0002\u00ce\u0017\u0003\u0002\u0002",
    "\u0002\u00cf\u00e4\u0005\u0016\f\u0002\u00d0\u00d1\u0005\u0016\f\u0002",
    "\u00d1\u00d2\u0007\u0014\u0002\u0002\u00d2\u00e4\u0003\u0002\u0002\u0002",
    "\u00d3\u00d4\u0007\u0013\u0002\u0002\u00d4\u00d5\u0007\u0019\u0002\u0002",
    "\u00d5\u00df\u00076\u0002\u0002\u00d6\u00d7\u0007\u001b\u0002\u0002",
    "\u00d7\u00dc\u0005\u001e\u0010\u0002\u00d8\u00d9\u0007\u001b\u0002\u0002",
    "\u00d9\u00db\u0005\u001e\u0010\u0002\u00da\u00d8\u0003\u0002\u0002\u0002",
    "\u00db\u00de\u0003\u0002\u0002\u0002\u00dc\u00da\u0003\u0002\u0002\u0002",
    "\u00dc\u00dd\u0003\u0002\u0002\u0002\u00dd\u00e0\u0003\u0002\u0002\u0002",
    "\u00de\u00dc\u0003\u0002\u0002\u0002\u00df\u00d6\u0003\u0002\u0002\u0002",
    "\u00df\u00e0\u0003\u0002\u0002\u0002\u00e0\u00e1\u0003\u0002\u0002\u0002",
    "\u00e1\u00e2\u0007\u001a\u0002\u0002\u00e2\u00e4\u0007\u0014\u0002\u0002",
    "\u00e3\u00cf\u0003\u0002\u0002\u0002\u00e3\u00d0\u0003\u0002\u0002\u0002",
    "\u00e3\u00d3\u0003\u0002\u0002\u0002\u00e4\u0019\u0003\u0002\u0002\u0002",
    "\u00e5\u00e6\b\u000e\u0001\u0002\u00e6\u00f2\u0005\u001c\u000f\u0002",
    "\u00e7\u00f2\u0005(\u0015\u0002\u00e8\u00e9\u0007\u001f\u0002\u0002",
    "\u00e9\u00f2\u0005\u001a\u000e\u0006\u00ea\u00f2\u0005\u0018\r\u0002",
    "\u00eb\u00ec\u0007%\u0002\u0002\u00ec\u00f2\u0005\u001a\u000e\u0004",
    "\u00ed\u00ee\u0007\u0019\u0002\u0002\u00ee\u00ef\u0005\u001a\u000e\u0002",
    "\u00ef\u00f0\u0007\u001a\u0002\u0002\u00f0\u00f2\u0003\u0002\u0002\u0002",
    "\u00f1\u00e5\u0003\u0002\u0002\u0002\u00f1\u00e7\u0003\u0002\u0002\u0002",
    "\u00f1\u00e8\u0003\u0002\u0002\u0002\u00f1\u00ea\u0003\u0002\u0002\u0002",
    "\u00f1\u00eb\u0003\u0002\u0002\u0002\u00f1\u00ed\u0003\u0002\u0002\u0002",
    "\u00f2\u00f9\u0003\u0002\u0002\u0002\u00f3\u00f4\f\u0007\u0002\u0002",
    "\u00f4\u00f5\u0005*\u0016\u0002\u00f5\u00f6\u0005\u001a\u000e\b\u00f6",
    "\u00f8\u0003\u0002\u0002\u0002\u00f7\u00f3\u0003\u0002\u0002\u0002\u00f8",
    "\u00fb\u0003\u0002\u0002\u0002\u00f9\u00f7\u0003\u0002\u0002\u0002\u00f9",
    "\u00fa\u0003\u0002\u0002\u0002\u00fa\u001b\u0003\u0002\u0002\u0002\u00fb",
    "\u00f9\u0003\u0002\u0002\u0002\u00fc\u00ff\u0005\f\u0007\u0002\u00fd",
    "\u00ff\u0005\b\u0005\u0002\u00fe\u00fc\u0003\u0002\u0002\u0002\u00fe",
    "\u00fd\u0003\u0002\u0002\u0002\u00ff\u001d\u0003\u0002\u0002\u0002\u0100",
    "\u0103\u0005\u001a\u000e\u0002\u0101\u0103\u00076\u0002\u0002\u0102",
    "\u0100\u0003\u0002\u0002\u0002\u0102\u0101\u0003\u0002\u0002\u0002\u0103",
    "\u001f\u0003\u0002\u0002\u0002\u0104\u0105\t\u0002\u0002\u0002\u0105",
    "!\u0003\u0002\u0002\u0002\u0106\u0107\t\u0003\u0002\u0002\u0107#\u0003",
    "\u0002\u0002\u0002\u0108\u0109\t\u0004\u0002\u0002\u0109%\u0003\u0002",
    "\u0002\u0002\u010a\u010b\t\u0005\u0002\u0002\u010b\'\u0003\u0002\u0002",
    "\u0002\u010c\u0110\u0005 \u0011\u0002\u010d\u0110\u00071\u0002\u0002",
    "\u010e\u0110\u00075\u0002\u0002\u010f\u010c\u0003\u0002\u0002\u0002",
    "\u010f\u010d\u0003\u0002\u0002\u0002\u010f\u010e\u0003\u0002\u0002\u0002",
    "\u0110)\u0003\u0002\u0002\u0002\u0111\u0116\u0005,\u0017\u0002\u0112",
    "\u0116\u0005\"\u0012\u0002\u0113\u0116\u0005$\u0013\u0002\u0114\u0116",
    "\u0005&\u0014\u0002\u0115\u0111\u0003\u0002\u0002\u0002\u0115\u0112",
    "\u0003\u0002\u0002\u0002\u0115\u0113\u0003\u0002\u0002\u0002\u0115\u0114",
    "\u0003\u0002\u0002\u0002\u0116+\u0003\u0002\u0002\u0002\u0117\u0118",
    "\t\u0006\u0002\u0002\u0118-\u0003\u0002\u0002\u0002\u0119\u011a\t\u0007",
    "\u0002\u0002\u011a/\u0003\u0002\u0002\u0002\u011b\u011c\t\b\u0002\u0002",
    "\u011c1\u0003\u0002\u0002\u0002\u011d\u011e\u0007/\u0002\u0002\u011e",
    "3\u0003\u0002\u0002\u0002\u001c:@NYeux\u007f\u0085\u008b\u00a1\u00b0",
    "\u00b6\u00b9\u00bf\u00c8\u00cb\u00dc\u00df\u00e3\u00f1\u00f9\u00fe\u0102",
    "\u010f\u0115"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class MyGrammarParser extends antlr4.Parser {

    static grammarFileName = "MyGrammar.g4";
    static literalNames = [ null, "'class'", "'Program'", "'if'", "'else'", 
                            "'for'", "'return'", "'break'", "'continue'", 
                            "'bool'", "'char'", "'int'", "'double'", "'string'", 
                            "'True'", "'False'", "'void'", "'callout'", 
                            "';'", "'{'", "'}'", "'['", "']'", "'('", "')'", 
                            "','", "'\"'", "'''", "'+'", "'-'", "'*'", "'/'", 
                            "'%'", "'&&'", "'||'", "'!'", "'>'", "'<'", 
                            "'>='", "'<='", "'='", "'+='", "'-='", "'=='", 
                            "'!='" ];
    static symbolicNames = [ null, "CLASS", "PROGRAM", "IF", "ELSE", "FOR", 
                             "RETURN", "BREAK", "CONTINUE", "T_BOOLEAN", 
                             "T_CHAR", "T_INT", "T_DOUBLE", "T_STRING", 
                             "TRUE", "FALSE", "VOID", "CALLOUT", "SEMICOLON", 
                             "LCURLY", "RCURLY", "LSQUARE", "RSQUARE", "LROUND", 
                             "RROUND", "COMMA", "QUOTES", "APOSTROPHE", 
                             "ADD", "SUB", "MULTIPLY", "DIVIDE", "REMINDER", 
                             "AND", "OR", "NOT", "GREATER_OP", "LESS_OP", 
                             "GREATER_eq_op", "LESS_eq_op", "EQUAL_OP", 
                             "ADD_eq_op", "SUB_eq_op", "EQUALITY_OP", "UNEQUALITY_OP", 
                             "ID", "ALPHA", "CHAR_LITERAL", "DECIMAL_LITERAL", 
                             "DIGIT", "HEX_LITERAL", "BOOL_LITERAL", "STRING_LITERAL", 
                             "ALPHA_NUM", "HEX_DIGIT", "LINE_COMMENT", "COMMENT", 
                             "NEWLINE", "WHITESPACE" ];
    static ruleNames = [ "program", "vardeclr", "field_declr", "array_id", 
                         "field_var", "var_id", "method_declr", "return_type", 
                         "block", "statement", "method_call_inter", "method_call", 
                         "expr", "location", "callout_arg", "int_literal", 
                         "rel_op", "eq_op", "cond_op", "literal", "bin_op", 
                         "arith_op", "var_type", "assign_op", "method_name" ];

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

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 12:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 5);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MyGrammarParser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(MyGrammarParser.CLASS);
	        this.state = 51;
	        this.match(MyGrammarParser.PROGRAM);
	        this.state = 52;
	        this.match(MyGrammarParser.LCURLY);
	        this.state = 56;
	        this._errHandler.sync(this);
	        let _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 53;
	                this.field_declr(); 
	            }
	            this.state = 58;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	        this.state = 62;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MyGrammarParser.T_BOOLEAN) | (1 << MyGrammarParser.T_INT) | (1 << MyGrammarParser.VOID))) !== 0)) {
	            this.state = 59;
	            this.method_declr();
	            this.state = 64;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 65;
	        this.match(MyGrammarParser.RCURLY);
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



	vardeclr() {
	    let localctx = new VardeclrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MyGrammarParser.RULE_vardeclr);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.var_type();
	        this.state = 68;
	        this.field_var();
	        this.state = 76;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===MyGrammarParser.COMMA) {
	            this.state = 70;
	            this.match(MyGrammarParser.COMMA);
	            this.state = 71;
	            this.var_type();
	            this.state = 72;
	            this.field_var();
	            this.state = 78;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 79;
	        this.match(MyGrammarParser.SEMICOLON);
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



	field_declr() {
	    let localctx = new Field_declrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MyGrammarParser.RULE_field_declr);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.var_type();
	        this.state = 82;
	        this.field_var();
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===MyGrammarParser.COMMA) {
	            this.state = 83;
	            this.match(MyGrammarParser.COMMA);
	            this.state = 84;
	            this.field_var();
	            this.state = 89;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 90;
	        this.match(MyGrammarParser.SEMICOLON);
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



	array_id() {
	    let localctx = new Array_idContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MyGrammarParser.RULE_array_id);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this.match(MyGrammarParser.ID);
	        this.state = 93;
	        this.match(MyGrammarParser.LSQUARE);
	        this.state = 94;
	        this.int_literal();
	        this.state = 95;
	        this.match(MyGrammarParser.RSQUARE);
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



	field_var() {
	    let localctx = new Field_varContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MyGrammarParser.RULE_field_var);
	    try {
	        this.state = 99;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 97;
	            this.var_id();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 98;
	            this.array_id();
	            break;

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



	var_id() {
	    let localctx = new Var_idContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MyGrammarParser.RULE_var_id);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.match(MyGrammarParser.ID);
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



	method_declr() {
	    let localctx = new Method_declrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MyGrammarParser.RULE_method_declr);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        this.return_type();
	        this.state = 104;
	        this.method_name();
	        this.state = 105;
	        this.match(MyGrammarParser.LROUND);
	        this.state = 118;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===MyGrammarParser.T_BOOLEAN || _la===MyGrammarParser.T_INT) {
	            this.state = 106;
	            this.var_type();
	            this.state = 107;
	            this.var_id();
	            this.state = 115;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===MyGrammarParser.COMMA) {
	                this.state = 109;
	                this.match(MyGrammarParser.COMMA);
	                this.state = 110;
	                this.var_type();
	                this.state = 111;
	                this.var_id();
	                this.state = 117;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 120;
	        this.match(MyGrammarParser.RROUND);
	        this.state = 121;
	        this.block();
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



	return_type() {
	    let localctx = new Return_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MyGrammarParser.RULE_return_type);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case MyGrammarParser.T_BOOLEAN:
	        case MyGrammarParser.T_INT:
	            this.state = 123;
	            this.var_type();
	            break;
	        case MyGrammarParser.VOID:
	            this.state = 124;
	            this.match(MyGrammarParser.VOID);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MyGrammarParser.RULE_block);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        this.match(MyGrammarParser.LCURLY);
	        this.state = 131;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===MyGrammarParser.T_BOOLEAN || _la===MyGrammarParser.T_INT) {
	            this.state = 128;
	            this.vardeclr();
	            this.state = 133;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 137;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MyGrammarParser.IF) | (1 << MyGrammarParser.FOR) | (1 << MyGrammarParser.RETURN) | (1 << MyGrammarParser.BREAK) | (1 << MyGrammarParser.CALLOUT))) !== 0) || _la===MyGrammarParser.ID) {
	            this.state = 134;
	            this.statement();
	            this.state = 139;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 140;
	        this.match(MyGrammarParser.RCURLY);
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, MyGrammarParser.RULE_statement);
	    var _la = 0; // Token type
	    try {
	        this.state = 189;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 142;
	            this.location();
	            this.state = 143;
	            this.assign_op();
	            this.state = 144;
	            this.expr(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 146;
	            this.location();
	            this.state = 147;
	            this.assign_op();
	            this.state = 148;
	            this.expr(0);
	            this.state = 149;
	            this.match(MyGrammarParser.SEMICOLON);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 151;
	            this.method_call();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 152;
	            this.match(MyGrammarParser.IF);
	            this.state = 153;
	            this.match(MyGrammarParser.LROUND);
	            this.state = 154;
	            this.expr(0);
	            this.state = 155;
	            this.match(MyGrammarParser.RROUND);
	            this.state = 156;
	            this.block();
	            this.state = 159;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===MyGrammarParser.ELSE) {
	                this.state = 157;
	                this.match(MyGrammarParser.ELSE);
	                this.state = 158;
	                this.block();
	            }

	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 161;
	            this.var_id();
	            this.state = 162;
	            this.match(MyGrammarParser.EQUAL_OP);
	            this.state = 163;
	            this.expr(0);
	            this.state = 164;
	            this.match(MyGrammarParser.SEMICOLON);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 166;
	            this.match(MyGrammarParser.RETURN);
	            this.state = 167;
	            this.expr(0);
	            this.state = 168;
	            this.match(MyGrammarParser.SEMICOLON);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 170;
	            this.match(MyGrammarParser.FOR);
	            this.state = 171;
	            this.var_id();
	            this.state = 174;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===MyGrammarParser.EQUAL_OP) {
	                this.state = 172;
	                this.match(MyGrammarParser.EQUAL_OP);
	                this.state = 173;
	                this.int_literal();
	            }

	            this.state = 176;
	            this.match(MyGrammarParser.COMMA);
	            this.state = 183;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case MyGrammarParser.ID:
	                this.state = 177;
	                this.var_id();
	                this.state = 180;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===MyGrammarParser.EQUAL_OP) {
	                    this.state = 178;
	                    this.match(MyGrammarParser.EQUAL_OP);
	                    this.state = 179;
	                    this.int_literal();
	                }

	                break;
	            case MyGrammarParser.DECIMAL_LITERAL:
	            case MyGrammarParser.HEX_LITERAL:
	                this.state = 182;
	                this.int_literal();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 185;
	            this.block();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 187;
	            this.match(MyGrammarParser.BREAK);
	            this.state = 188;
	            this.match(MyGrammarParser.SEMICOLON);
	            break;

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



	method_call_inter() {
	    let localctx = new Method_call_interContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, MyGrammarParser.RULE_method_call_inter);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 191;
	        this.method_name();
	        this.state = 192;
	        this.match(MyGrammarParser.LROUND);
	        this.state = 201;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MyGrammarParser.CALLOUT) | (1 << MyGrammarParser.LROUND) | (1 << MyGrammarParser.SUB))) !== 0) || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (MyGrammarParser.NOT - 35)) | (1 << (MyGrammarParser.ID - 35)) | (1 << (MyGrammarParser.CHAR_LITERAL - 35)) | (1 << (MyGrammarParser.DECIMAL_LITERAL - 35)) | (1 << (MyGrammarParser.HEX_LITERAL - 35)) | (1 << (MyGrammarParser.BOOL_LITERAL - 35)))) !== 0)) {
	            this.state = 193;
	            this.expr(0);
	            this.state = 198;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===MyGrammarParser.COMMA) {
	                this.state = 194;
	                this.match(MyGrammarParser.COMMA);
	                this.state = 195;
	                this.expr(0);
	                this.state = 200;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 203;
	        this.match(MyGrammarParser.RROUND);
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



	method_call() {
	    let localctx = new Method_callContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, MyGrammarParser.RULE_method_call);
	    var _la = 0; // Token type
	    try {
	        this.state = 225;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 205;
	            this.method_call_inter();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 206;
	            this.method_call_inter();
	            this.state = 207;
	            this.match(MyGrammarParser.SEMICOLON);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 209;
	            this.match(MyGrammarParser.CALLOUT);
	            this.state = 210;
	            this.match(MyGrammarParser.LROUND);
	            this.state = 211;
	            this.match(MyGrammarParser.STRING_LITERAL);
	            this.state = 221;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===MyGrammarParser.COMMA) {
	                this.state = 212;
	                this.match(MyGrammarParser.COMMA);
	                this.state = 213;
	                this.callout_arg();
	                this.state = 218;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===MyGrammarParser.COMMA) {
	                    this.state = 214;
	                    this.match(MyGrammarParser.COMMA);
	                    this.state = 215;
	                    this.callout_arg();
	                    this.state = 220;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 223;
	            this.match(MyGrammarParser.RROUND);
	            this.state = 224;
	            this.match(MyGrammarParser.SEMICOLON);
	            break;

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


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 24;
	    this.enterRecursionRule(localctx, 24, MyGrammarParser.RULE_expr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 239;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 228;
	            this.location();
	            break;

	        case 2:
	            this.state = 229;
	            this.literal();
	            break;

	        case 3:
	            this.state = 230;
	            this.match(MyGrammarParser.SUB);
	            this.state = 231;
	            this.expr(4);
	            break;

	        case 4:
	            this.state = 232;
	            this.method_call();
	            break;

	        case 5:
	            this.state = 233;
	            this.match(MyGrammarParser.NOT);
	            this.state = 234;
	            this.expr(2);
	            break;

	        case 6:
	            this.state = 235;
	            this.match(MyGrammarParser.LROUND);
	            this.state = 236;
	            this.expr(0);
	            this.state = 237;
	            this.match(MyGrammarParser.RROUND);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 247;
	        this._errHandler.sync(this);
	        let _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ExprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, MyGrammarParser.RULE_expr);
	                this.state = 241;
	                if (!( this.precpred(this._ctx, 5))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                }
	                this.state = 242;
	                this.bin_op();
	                this.state = 243;
	                this.expr(6); 
	            }
	            this.state = 249;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	location() {
	    let localctx = new LocationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, MyGrammarParser.RULE_location);
	    try {
	        this.state = 252;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 250;
	            this.var_id();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 251;
	            this.array_id();
	            break;

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



	callout_arg() {
	    let localctx = new Callout_argContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, MyGrammarParser.RULE_callout_arg);
	    try {
	        this.state = 256;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case MyGrammarParser.CALLOUT:
	        case MyGrammarParser.LROUND:
	        case MyGrammarParser.SUB:
	        case MyGrammarParser.NOT:
	        case MyGrammarParser.ID:
	        case MyGrammarParser.CHAR_LITERAL:
	        case MyGrammarParser.DECIMAL_LITERAL:
	        case MyGrammarParser.HEX_LITERAL:
	        case MyGrammarParser.BOOL_LITERAL:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 254;
	            this.expr(0);
	            break;
	        case MyGrammarParser.STRING_LITERAL:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 255;
	            this.match(MyGrammarParser.STRING_LITERAL);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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



	int_literal() {
	    let localctx = new Int_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, MyGrammarParser.RULE_int_literal);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
	        _la = this._input.LA(1);
	        if(!(_la===MyGrammarParser.DECIMAL_LITERAL || _la===MyGrammarParser.HEX_LITERAL)) {
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



	rel_op() {
	    let localctx = new Rel_opContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, MyGrammarParser.RULE_rel_op);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
	        _la = this._input.LA(1);
	        if(!(((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (MyGrammarParser.GREATER_OP - 36)) | (1 << (MyGrammarParser.LESS_OP - 36)) | (1 << (MyGrammarParser.GREATER_eq_op - 36)) | (1 << (MyGrammarParser.LESS_eq_op - 36)))) !== 0))) {
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



	eq_op() {
	    let localctx = new Eq_opContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, MyGrammarParser.RULE_eq_op);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 262;
	        _la = this._input.LA(1);
	        if(!(_la===MyGrammarParser.EQUALITY_OP || _la===MyGrammarParser.UNEQUALITY_OP)) {
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



	cond_op() {
	    let localctx = new Cond_opContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, MyGrammarParser.RULE_cond_op);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 264;
	        _la = this._input.LA(1);
	        if(!(_la===MyGrammarParser.AND || _la===MyGrammarParser.OR)) {
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



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, MyGrammarParser.RULE_literal);
	    try {
	        this.state = 269;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case MyGrammarParser.DECIMAL_LITERAL:
	        case MyGrammarParser.HEX_LITERAL:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 266;
	            this.int_literal();
	            break;
	        case MyGrammarParser.CHAR_LITERAL:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 267;
	            this.match(MyGrammarParser.CHAR_LITERAL);
	            break;
	        case MyGrammarParser.BOOL_LITERAL:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 268;
	            this.match(MyGrammarParser.BOOL_LITERAL);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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



	bin_op() {
	    let localctx = new Bin_opContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, MyGrammarParser.RULE_bin_op);
	    try {
	        this.state = 275;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case MyGrammarParser.ADD:
	        case MyGrammarParser.SUB:
	        case MyGrammarParser.MULTIPLY:
	        case MyGrammarParser.DIVIDE:
	        case MyGrammarParser.REMINDER:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 271;
	            this.arith_op();
	            break;
	        case MyGrammarParser.GREATER_OP:
	        case MyGrammarParser.LESS_OP:
	        case MyGrammarParser.GREATER_eq_op:
	        case MyGrammarParser.LESS_eq_op:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 272;
	            this.rel_op();
	            break;
	        case MyGrammarParser.EQUALITY_OP:
	        case MyGrammarParser.UNEQUALITY_OP:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 273;
	            this.eq_op();
	            break;
	        case MyGrammarParser.AND:
	        case MyGrammarParser.OR:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 274;
	            this.cond_op();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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



	arith_op() {
	    let localctx = new Arith_opContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, MyGrammarParser.RULE_arith_op);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 277;
	        _la = this._input.LA(1);
	        if(!(((((_la - 28)) & ~0x1f) == 0 && ((1 << (_la - 28)) & ((1 << (MyGrammarParser.ADD - 28)) | (1 << (MyGrammarParser.SUB - 28)) | (1 << (MyGrammarParser.MULTIPLY - 28)) | (1 << (MyGrammarParser.DIVIDE - 28)) | (1 << (MyGrammarParser.REMINDER - 28)))) !== 0))) {
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



	var_type() {
	    let localctx = new Var_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, MyGrammarParser.RULE_var_type);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 279;
	        _la = this._input.LA(1);
	        if(!(_la===MyGrammarParser.T_BOOLEAN || _la===MyGrammarParser.T_INT)) {
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



	assign_op() {
	    let localctx = new Assign_opContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, MyGrammarParser.RULE_assign_op);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 281;
	        _la = this._input.LA(1);
	        if(!(((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & ((1 << (MyGrammarParser.EQUAL_OP - 40)) | (1 << (MyGrammarParser.ADD_eq_op - 40)) | (1 << (MyGrammarParser.SUB_eq_op - 40)))) !== 0))) {
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



	method_name() {
	    let localctx = new Method_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, MyGrammarParser.RULE_method_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 283;
	        this.match(MyGrammarParser.ID);
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
MyGrammarParser.CLASS = 1;
MyGrammarParser.PROGRAM = 2;
MyGrammarParser.IF = 3;
MyGrammarParser.ELSE = 4;
MyGrammarParser.FOR = 5;
MyGrammarParser.RETURN = 6;
MyGrammarParser.BREAK = 7;
MyGrammarParser.CONTINUE = 8;
MyGrammarParser.T_BOOLEAN = 9;
MyGrammarParser.T_CHAR = 10;
MyGrammarParser.T_INT = 11;
MyGrammarParser.T_DOUBLE = 12;
MyGrammarParser.T_STRING = 13;
MyGrammarParser.TRUE = 14;
MyGrammarParser.FALSE = 15;
MyGrammarParser.VOID = 16;
MyGrammarParser.CALLOUT = 17;
MyGrammarParser.SEMICOLON = 18;
MyGrammarParser.LCURLY = 19;
MyGrammarParser.RCURLY = 20;
MyGrammarParser.LSQUARE = 21;
MyGrammarParser.RSQUARE = 22;
MyGrammarParser.LROUND = 23;
MyGrammarParser.RROUND = 24;
MyGrammarParser.COMMA = 25;
MyGrammarParser.QUOTES = 26;
MyGrammarParser.APOSTROPHE = 27;
MyGrammarParser.ADD = 28;
MyGrammarParser.SUB = 29;
MyGrammarParser.MULTIPLY = 30;
MyGrammarParser.DIVIDE = 31;
MyGrammarParser.REMINDER = 32;
MyGrammarParser.AND = 33;
MyGrammarParser.OR = 34;
MyGrammarParser.NOT = 35;
MyGrammarParser.GREATER_OP = 36;
MyGrammarParser.LESS_OP = 37;
MyGrammarParser.GREATER_eq_op = 38;
MyGrammarParser.LESS_eq_op = 39;
MyGrammarParser.EQUAL_OP = 40;
MyGrammarParser.ADD_eq_op = 41;
MyGrammarParser.SUB_eq_op = 42;
MyGrammarParser.EQUALITY_OP = 43;
MyGrammarParser.UNEQUALITY_OP = 44;
MyGrammarParser.ID = 45;
MyGrammarParser.ALPHA = 46;
MyGrammarParser.CHAR_LITERAL = 47;
MyGrammarParser.DECIMAL_LITERAL = 48;
MyGrammarParser.DIGIT = 49;
MyGrammarParser.HEX_LITERAL = 50;
MyGrammarParser.BOOL_LITERAL = 51;
MyGrammarParser.STRING_LITERAL = 52;
MyGrammarParser.ALPHA_NUM = 53;
MyGrammarParser.HEX_DIGIT = 54;
MyGrammarParser.LINE_COMMENT = 55;
MyGrammarParser.COMMENT = 56;
MyGrammarParser.NEWLINE = 57;
MyGrammarParser.WHITESPACE = 58;

MyGrammarParser.RULE_program = 0;
MyGrammarParser.RULE_vardeclr = 1;
MyGrammarParser.RULE_field_declr = 2;
MyGrammarParser.RULE_array_id = 3;
MyGrammarParser.RULE_field_var = 4;
MyGrammarParser.RULE_var_id = 5;
MyGrammarParser.RULE_method_declr = 6;
MyGrammarParser.RULE_return_type = 7;
MyGrammarParser.RULE_block = 8;
MyGrammarParser.RULE_statement = 9;
MyGrammarParser.RULE_method_call_inter = 10;
MyGrammarParser.RULE_method_call = 11;
MyGrammarParser.RULE_expr = 12;
MyGrammarParser.RULE_location = 13;
MyGrammarParser.RULE_callout_arg = 14;
MyGrammarParser.RULE_int_literal = 15;
MyGrammarParser.RULE_rel_op = 16;
MyGrammarParser.RULE_eq_op = 17;
MyGrammarParser.RULE_cond_op = 18;
MyGrammarParser.RULE_literal = 19;
MyGrammarParser.RULE_bin_op = 20;
MyGrammarParser.RULE_arith_op = 21;
MyGrammarParser.RULE_var_type = 22;
MyGrammarParser.RULE_assign_op = 23;
MyGrammarParser.RULE_method_name = 24;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyGrammarParser.RULE_program;
    }

	CLASS() {
	    return this.getToken(MyGrammarParser.CLASS, 0);
	};

	PROGRAM() {
	    return this.getToken(MyGrammarParser.PROGRAM, 0);
	};

	LCURLY() {
	    return this.getToken(MyGrammarParser.LCURLY, 0);
	};

	RCURLY() {
	    return this.getToken(MyGrammarParser.RCURLY, 0);
	};

	field_declr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Field_declrContext);
	    } else {
	        return this.getTypedRuleContext(Field_declrContext,i);
	    }
	};

	method_declr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Method_declrContext);
	    } else {
	        return this.getTypedRuleContext(Method_declrContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.exitProgram(this);
		}
	}


}



class VardeclrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyGrammarParser.RULE_vardeclr;
    }

	SEMICOLON() {
	    return this.getToken(MyGrammarParser.SEMICOLON, 0);
	};

	var_type = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Var_typeContext);
	    } else {
	        return this.getTypedRuleContext(Var_typeContext,i);
	    }
	};

	field_var = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Field_varContext);
	    } else {
	        return this.getTypedRuleContext(Field_varContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MyGrammarParser.COMMA);
	    } else {
	        return this.getToken(MyGrammarParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.enterVardeclr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.exitVardeclr(this);
		}
	}


}



class Field_declrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyGrammarParser.RULE_field_declr;
    }

	var_type() {
	    return this.getTypedRuleContext(Var_typeContext,0);
	};

	field_var = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Field_varContext);
	    } else {
	        return this.getTypedRuleContext(Field_varContext,i);
	    }
	};

	SEMICOLON() {
	    return this.getToken(MyGrammarParser.SEMICOLON, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MyGrammarParser.COMMA);
	    } else {
	        return this.getToken(MyGrammarParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.enterField_declr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.exitField_declr(this);
		}
	}


}



class Array_idContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyGrammarParser.RULE_array_id;
    }

	ID() {
	    return this.getToken(MyGrammarParser.ID, 0);
	};

	LSQUARE() {
	    return this.getToken(MyGrammarParser.LSQUARE, 0);
	};

	int_literal() {
	    return this.getTypedRuleContext(Int_literalContext,0);
	};

	RSQUARE() {
	    return this.getToken(MyGrammarParser.RSQUARE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.enterArray_id(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.exitArray_id(this);
		}
	}


}



class Field_varContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyGrammarParser.RULE_field_var;
    }

	var_id() {
	    return this.getTypedRuleContext(Var_idContext,0);
	};

	array_id() {
	    return this.getTypedRuleContext(Array_idContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.enterField_var(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.exitField_var(this);
		}
	}


}



class Var_idContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyGrammarParser.RULE_var_id;
    }

	ID() {
	    return this.getToken(MyGrammarParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.enterVar_id(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.exitVar_id(this);
		}
	}


}



class Method_declrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyGrammarParser.RULE_method_declr;
    }

	return_type() {
	    return this.getTypedRuleContext(Return_typeContext,0);
	};

	method_name() {
	    return this.getTypedRuleContext(Method_nameContext,0);
	};

	LROUND() {
	    return this.getToken(MyGrammarParser.LROUND, 0);
	};

	RROUND() {
	    return this.getToken(MyGrammarParser.RROUND, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	var_type = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Var_typeContext);
	    } else {
	        return this.getTypedRuleContext(Var_typeContext,i);
	    }
	};

	var_id = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Var_idContext);
	    } else {
	        return this.getTypedRuleContext(Var_idContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MyGrammarParser.COMMA);
	    } else {
	        return this.getToken(MyGrammarParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.enterMethod_declr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.exitMethod_declr(this);
		}
	}


}



class Return_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyGrammarParser.RULE_return_type;
    }

	var_type() {
	    return this.getTypedRuleContext(Var_typeContext,0);
	};

	VOID() {
	    return this.getToken(MyGrammarParser.VOID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.enterReturn_type(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.exitReturn_type(this);
		}
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyGrammarParser.RULE_block;
    }

	LCURLY() {
	    return this.getToken(MyGrammarParser.LCURLY, 0);
	};

	RCURLY() {
	    return this.getToken(MyGrammarParser.RCURLY, 0);
	};

	vardeclr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VardeclrContext);
	    } else {
	        return this.getTypedRuleContext(VardeclrContext,i);
	    }
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.exitBlock(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyGrammarParser.RULE_statement;
    }

	location() {
	    return this.getTypedRuleContext(LocationContext,0);
	};

	assign_op() {
	    return this.getTypedRuleContext(Assign_opContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	SEMICOLON() {
	    return this.getToken(MyGrammarParser.SEMICOLON, 0);
	};

	method_call() {
	    return this.getTypedRuleContext(Method_callContext,0);
	};

	IF() {
	    return this.getToken(MyGrammarParser.IF, 0);
	};

	LROUND() {
	    return this.getToken(MyGrammarParser.LROUND, 0);
	};

	RROUND() {
	    return this.getToken(MyGrammarParser.RROUND, 0);
	};

	block = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BlockContext);
	    } else {
	        return this.getTypedRuleContext(BlockContext,i);
	    }
	};

	ELSE() {
	    return this.getToken(MyGrammarParser.ELSE, 0);
	};

	var_id = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Var_idContext);
	    } else {
	        return this.getTypedRuleContext(Var_idContext,i);
	    }
	};

	EQUAL_OP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MyGrammarParser.EQUAL_OP);
	    } else {
	        return this.getToken(MyGrammarParser.EQUAL_OP, i);
	    }
	};


	RETURN() {
	    return this.getToken(MyGrammarParser.RETURN, 0);
	};

	FOR() {
	    return this.getToken(MyGrammarParser.FOR, 0);
	};

	COMMA() {
	    return this.getToken(MyGrammarParser.COMMA, 0);
	};

	int_literal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Int_literalContext);
	    } else {
	        return this.getTypedRuleContext(Int_literalContext,i);
	    }
	};

	BREAK() {
	    return this.getToken(MyGrammarParser.BREAK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.exitStatement(this);
		}
	}


}



class Method_call_interContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyGrammarParser.RULE_method_call_inter;
    }

	method_name() {
	    return this.getTypedRuleContext(Method_nameContext,0);
	};

	LROUND() {
	    return this.getToken(MyGrammarParser.LROUND, 0);
	};

	RROUND() {
	    return this.getToken(MyGrammarParser.RROUND, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MyGrammarParser.COMMA);
	    } else {
	        return this.getToken(MyGrammarParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.enterMethod_call_inter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.exitMethod_call_inter(this);
		}
	}


}



class Method_callContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyGrammarParser.RULE_method_call;
    }

	method_call_inter() {
	    return this.getTypedRuleContext(Method_call_interContext,0);
	};

	SEMICOLON() {
	    return this.getToken(MyGrammarParser.SEMICOLON, 0);
	};

	CALLOUT() {
	    return this.getToken(MyGrammarParser.CALLOUT, 0);
	};

	LROUND() {
	    return this.getToken(MyGrammarParser.LROUND, 0);
	};

	STRING_LITERAL() {
	    return this.getToken(MyGrammarParser.STRING_LITERAL, 0);
	};

	RROUND() {
	    return this.getToken(MyGrammarParser.RROUND, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MyGrammarParser.COMMA);
	    } else {
	        return this.getToken(MyGrammarParser.COMMA, i);
	    }
	};


	callout_arg = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Callout_argContext);
	    } else {
	        return this.getTypedRuleContext(Callout_argContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.enterMethod_call(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.exitMethod_call(this);
		}
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyGrammarParser.RULE_expr;
    }

	location() {
	    return this.getTypedRuleContext(LocationContext,0);
	};

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	SUB() {
	    return this.getToken(MyGrammarParser.SUB, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	method_call() {
	    return this.getTypedRuleContext(Method_callContext,0);
	};

	NOT() {
	    return this.getToken(MyGrammarParser.NOT, 0);
	};

	LROUND() {
	    return this.getToken(MyGrammarParser.LROUND, 0);
	};

	RROUND() {
	    return this.getToken(MyGrammarParser.RROUND, 0);
	};

	bin_op() {
	    return this.getTypedRuleContext(Bin_opContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.exitExpr(this);
		}
	}


}



class LocationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyGrammarParser.RULE_location;
    }

	var_id() {
	    return this.getTypedRuleContext(Var_idContext,0);
	};

	array_id() {
	    return this.getTypedRuleContext(Array_idContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.enterLocation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.exitLocation(this);
		}
	}


}



class Callout_argContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyGrammarParser.RULE_callout_arg;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	STRING_LITERAL() {
	    return this.getToken(MyGrammarParser.STRING_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.enterCallout_arg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.exitCallout_arg(this);
		}
	}


}



class Int_literalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyGrammarParser.RULE_int_literal;
    }

	DECIMAL_LITERAL() {
	    return this.getToken(MyGrammarParser.DECIMAL_LITERAL, 0);
	};

	HEX_LITERAL() {
	    return this.getToken(MyGrammarParser.HEX_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.enterInt_literal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.exitInt_literal(this);
		}
	}


}



class Rel_opContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyGrammarParser.RULE_rel_op;
    }

	GREATER_OP() {
	    return this.getToken(MyGrammarParser.GREATER_OP, 0);
	};

	LESS_OP() {
	    return this.getToken(MyGrammarParser.LESS_OP, 0);
	};

	LESS_eq_op() {
	    return this.getToken(MyGrammarParser.LESS_eq_op, 0);
	};

	GREATER_eq_op() {
	    return this.getToken(MyGrammarParser.GREATER_eq_op, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.enterRel_op(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.exitRel_op(this);
		}
	}


}



class Eq_opContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyGrammarParser.RULE_eq_op;
    }

	EQUALITY_OP() {
	    return this.getToken(MyGrammarParser.EQUALITY_OP, 0);
	};

	UNEQUALITY_OP() {
	    return this.getToken(MyGrammarParser.UNEQUALITY_OP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.enterEq_op(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.exitEq_op(this);
		}
	}


}



class Cond_opContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyGrammarParser.RULE_cond_op;
    }

	AND() {
	    return this.getToken(MyGrammarParser.AND, 0);
	};

	OR() {
	    return this.getToken(MyGrammarParser.OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.enterCond_op(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.exitCond_op(this);
		}
	}


}



class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyGrammarParser.RULE_literal;
    }

	int_literal() {
	    return this.getTypedRuleContext(Int_literalContext,0);
	};

	CHAR_LITERAL() {
	    return this.getToken(MyGrammarParser.CHAR_LITERAL, 0);
	};

	BOOL_LITERAL() {
	    return this.getToken(MyGrammarParser.BOOL_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.exitLiteral(this);
		}
	}


}



class Bin_opContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyGrammarParser.RULE_bin_op;
    }

	arith_op() {
	    return this.getTypedRuleContext(Arith_opContext,0);
	};

	rel_op() {
	    return this.getTypedRuleContext(Rel_opContext,0);
	};

	eq_op() {
	    return this.getTypedRuleContext(Eq_opContext,0);
	};

	cond_op() {
	    return this.getTypedRuleContext(Cond_opContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.enterBin_op(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.exitBin_op(this);
		}
	}


}



class Arith_opContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyGrammarParser.RULE_arith_op;
    }

	ADD() {
	    return this.getToken(MyGrammarParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(MyGrammarParser.SUB, 0);
	};

	MULTIPLY() {
	    return this.getToken(MyGrammarParser.MULTIPLY, 0);
	};

	DIVIDE() {
	    return this.getToken(MyGrammarParser.DIVIDE, 0);
	};

	REMINDER() {
	    return this.getToken(MyGrammarParser.REMINDER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.enterArith_op(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.exitArith_op(this);
		}
	}


}



class Var_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyGrammarParser.RULE_var_type;
    }

	T_INT() {
	    return this.getToken(MyGrammarParser.T_INT, 0);
	};

	T_BOOLEAN() {
	    return this.getToken(MyGrammarParser.T_BOOLEAN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.enterVar_type(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.exitVar_type(this);
		}
	}


}



class Assign_opContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyGrammarParser.RULE_assign_op;
    }

	EQUAL_OP() {
	    return this.getToken(MyGrammarParser.EQUAL_OP, 0);
	};

	ADD_eq_op() {
	    return this.getToken(MyGrammarParser.ADD_eq_op, 0);
	};

	SUB_eq_op() {
	    return this.getToken(MyGrammarParser.SUB_eq_op, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.enterAssign_op(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.exitAssign_op(this);
		}
	}


}



class Method_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyGrammarParser.RULE_method_name;
    }

	ID() {
	    return this.getToken(MyGrammarParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.enterMethod_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.exitMethod_name(this);
		}
	}


}




MyGrammarParser.ProgramContext = ProgramContext; 
MyGrammarParser.VardeclrContext = VardeclrContext; 
MyGrammarParser.Field_declrContext = Field_declrContext; 
MyGrammarParser.Array_idContext = Array_idContext; 
MyGrammarParser.Field_varContext = Field_varContext; 
MyGrammarParser.Var_idContext = Var_idContext; 
MyGrammarParser.Method_declrContext = Method_declrContext; 
MyGrammarParser.Return_typeContext = Return_typeContext; 
MyGrammarParser.BlockContext = BlockContext; 
MyGrammarParser.StatementContext = StatementContext; 
MyGrammarParser.Method_call_interContext = Method_call_interContext; 
MyGrammarParser.Method_callContext = Method_callContext; 
MyGrammarParser.ExprContext = ExprContext; 
MyGrammarParser.LocationContext = LocationContext; 
MyGrammarParser.Callout_argContext = Callout_argContext; 
MyGrammarParser.Int_literalContext = Int_literalContext; 
MyGrammarParser.Rel_opContext = Rel_opContext; 
MyGrammarParser.Eq_opContext = Eq_opContext; 
MyGrammarParser.Cond_opContext = Cond_opContext; 
MyGrammarParser.LiteralContext = LiteralContext; 
MyGrammarParser.Bin_opContext = Bin_opContext; 
MyGrammarParser.Arith_opContext = Arith_opContext; 
MyGrammarParser.Var_typeContext = Var_typeContext; 
MyGrammarParser.Assign_opContext = Assign_opContext; 
MyGrammarParser.Method_nameContext = Method_nameContext; 
