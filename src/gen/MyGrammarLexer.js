// Generated from MyGrammar.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u00027\u0177\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u0004",
    "1\t1\u00042\t2\u00043\t3\u00044\t4\u00045\t5\u00046\t6\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017",
    "\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a",
    "\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d",
    "\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003",
    "!\u0003!\u0003\"\u0003\"\u0003#\u0003#\u0003$\u0003$\u0003$\u0003%\u0003",
    "%\u0003%\u0003&\u0003&\u0003\'\u0003\'\u0003(\u0003(\u0003)\u0003)\u0003",
    ")\u0003*\u0003*\u0003*\u0003+\u0003+\u0003,\u0003,\u0003,\u0003-\u0003",
    "-\u0003-\u0003.\u0003.\u0007.\u011e\n.\f.\u000e.\u0121\u000b.\u0003",
    "/\u0003/\u0007/\u0125\n/\f/\u000e/\u0128\u000b/\u0003/\u0005/\u012b",
    "\n/\u00030\u00030\u00030\u00060\u0130\n0\r0\u000e0\u0131\u00031\u0003",
    "1\u00051\u0136\n1\u00032\u00062\u0139\n2\r2\u000e2\u013a\u00032\u0003",
    "2\u00072\u013f\n2\f2\u000e2\u0142\u000b2\u00032\u00032\u00052\u0146",
    "\n2\u00032\u00062\u0149\n2\r2\u000e2\u014a\u00052\u014d\n2\u00033\u0003",
    "3\u00073\u0151\n3\f3\u000e3\u0154\u000b3\u00033\u00033\u00034\u0006",
    "4\u0159\n4\r4\u000e4\u015a\u00034\u00034\u00035\u00035\u00035\u0003",
    "5\u00075\u0163\n5\f5\u000e5\u0166\u000b5\u00035\u00035\u00035\u0003",
    "5\u00035\u00036\u00036\u00036\u00036\u00076\u0171\n6\f6\u000e6\u0174",
    "\u000b6\u00036\u00036\u0003\u0164\u00027\u0003\u0003\u0005\u0004\u0007",
    "\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017",
    "\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014",
    "\'\u0015)\u0016+\u0017-\u0018/\u00191\u001a3\u001b5\u001c7\u001d9\u001e",
    ";\u001f= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]0_1a2c3e4g5i6k7\u0003\u0002",
    "\r\u0004\u0002C\\c|\u0006\u00022;C\\aac|\u0003\u00023;\u0003\u00022",
    ";\u0004\u0002ZZzz\u0005\u00022;CHch\u0004\u0002GGgg\u0004\u0002--//",
    "\u0005\u0002\f\f\u000f\u000f$$\u0005\u0002\u000b\f\u000f\u000f\"\"\u0004",
    "\u0002\f\f\u000f\u000f\u0002\u0184\u0002\u0003\u0003\u0002\u0002\u0002",
    "\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002",
    "\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002",
    "\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002",
    "\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002",
    "\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002",
    "\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002",
    "\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002",
    "\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002",
    "%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003",
    "\u0002\u0002\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002",
    "\u0002\u0002\u0002/\u0003\u0002\u0002\u0002\u00021\u0003\u0002\u0002",
    "\u0002\u00023\u0003\u0002\u0002\u0002\u00025\u0003\u0002\u0002\u0002",
    "\u00027\u0003\u0002\u0002\u0002\u00029\u0003\u0002\u0002\u0002\u0002",
    ";\u0003\u0002\u0002\u0002\u0002=\u0003\u0002\u0002\u0002\u0002?\u0003",
    "\u0002\u0002\u0002\u0002A\u0003\u0002\u0002\u0002\u0002C\u0003\u0002",
    "\u0002\u0002\u0002E\u0003\u0002\u0002\u0002\u0002G\u0003\u0002\u0002",
    "\u0002\u0002I\u0003\u0002\u0002\u0002\u0002K\u0003\u0002\u0002\u0002",
    "\u0002M\u0003\u0002\u0002\u0002\u0002O\u0003\u0002\u0002\u0002\u0002",
    "Q\u0003\u0002\u0002\u0002\u0002S\u0003\u0002\u0002\u0002\u0002U\u0003",
    "\u0002\u0002\u0002\u0002W\u0003\u0002\u0002\u0002\u0002Y\u0003\u0002",
    "\u0002\u0002\u0002[\u0003\u0002\u0002\u0002\u0002]\u0003\u0002\u0002",
    "\u0002\u0002_\u0003\u0002\u0002\u0002\u0002a\u0003\u0002\u0002\u0002",
    "\u0002c\u0003\u0002\u0002\u0002\u0002e\u0003\u0002\u0002\u0002\u0002",
    "g\u0003\u0002\u0002\u0002\u0002i\u0003\u0002\u0002\u0002\u0002k\u0003",
    "\u0002\u0002\u0002\u0003m\u0003\u0002\u0002\u0002\u0005r\u0003\u0002",
    "\u0002\u0002\u0007v\u0003\u0002\u0002\u0002\t}\u0003\u0002\u0002\u0002",
    "\u000b\u0082\u0003\u0002\u0002\u0002\r\u0089\u0003\u0002\u0002\u0002",
    "\u000f\u008e\u0003\u0002\u0002\u0002\u0011\u0093\u0003\u0002\u0002\u0002",
    "\u0013\u0097\u0003\u0002\u0002\u0002\u0015\u009d\u0003\u0002\u0002\u0002",
    "\u0017\u00a0\u0003\u0002\u0002\u0002\u0019\u00a5\u0003\u0002\u0002\u0002",
    "\u001b\u00ac\u0003\u0002\u0002\u0002\u001d\u00b2\u0003\u0002\u0002\u0002",
    "\u001f\u00b6\u0003\u0002\u0002\u0002!\u00bf\u0003\u0002\u0002\u0002",
    "#\u00c5\u0003\u0002\u0002\u0002%\u00d1\u0003\u0002\u0002\u0002\'\u00da",
    "\u0003\u0002\u0002\u0002)\u00df\u0003\u0002\u0002\u0002+\u00e5\u0003",
    "\u0002\u0002\u0002-\u00e7\u0003\u0002\u0002\u0002/\u00e9\u0003\u0002",
    "\u0002\u00021\u00eb\u0003\u0002\u0002\u00023\u00ed\u0003\u0002\u0002",
    "\u00025\u00ef\u0003\u0002\u0002\u00027\u00f1\u0003\u0002\u0002\u0002",
    "9\u00f3\u0003\u0002\u0002\u0002;\u00f5\u0003\u0002\u0002\u0002=\u00f7",
    "\u0003\u0002\u0002\u0002?\u00f9\u0003\u0002\u0002\u0002A\u00fb\u0003",
    "\u0002\u0002\u0002C\u00fd\u0003\u0002\u0002\u0002E\u00ff\u0003\u0002",
    "\u0002\u0002G\u0101\u0003\u0002\u0002\u0002I\u0104\u0003\u0002\u0002",
    "\u0002K\u0107\u0003\u0002\u0002\u0002M\u0109\u0003\u0002\u0002\u0002",
    "O\u010b\u0003\u0002\u0002\u0002Q\u010d\u0003\u0002\u0002\u0002S\u0110",
    "\u0003\u0002\u0002\u0002U\u0113\u0003\u0002\u0002\u0002W\u0115\u0003",
    "\u0002\u0002\u0002Y\u0118\u0003\u0002\u0002\u0002[\u011b\u0003\u0002",
    "\u0002\u0002]\u012a\u0003\u0002\u0002\u0002_\u012c\u0003\u0002\u0002",
    "\u0002a\u0135\u0003\u0002\u0002\u0002c\u0138\u0003\u0002\u0002\u0002",
    "e\u014e\u0003\u0002\u0002\u0002g\u0158\u0003\u0002\u0002\u0002i\u015e",
    "\u0003\u0002\u0002\u0002k\u016c\u0003\u0002\u0002\u0002mn\u0007x\u0002",
    "\u0002no\u0007q\u0002\u0002op\u0007k\u0002\u0002pq\u0007f\u0002\u0002",
    "q\u0004\u0003\u0002\u0002\u0002rs\u0007k\u0002\u0002st\u0007p\u0002",
    "\u0002tu\u0007v\u0002\u0002u\u0006\u0003\u0002\u0002\u0002vw\u0007f",
    "\u0002\u0002wx\u0007q\u0002\u0002xy\u0007w\u0002\u0002yz\u0007d\u0002",
    "\u0002z{\u0007n\u0002\u0002{|\u0007g\u0002\u0002|\b\u0003\u0002\u0002",
    "\u0002}~\u0007d\u0002\u0002~\u007f\u0007q\u0002\u0002\u007f\u0080\u0007",
    "q\u0002\u0002\u0080\u0081\u0007n\u0002\u0002\u0081\n\u0003\u0002\u0002",
    "\u0002\u0082\u0083\u0007u\u0002\u0002\u0083\u0084\u0007v\u0002\u0002",
    "\u0084\u0085\u0007t\u0002\u0002\u0085\u0086\u0007k\u0002\u0002\u0086",
    "\u0087\u0007p\u0002\u0002\u0087\u0088\u0007i\u0002\u0002\u0088\f\u0003",
    "\u0002\u0002\u0002\u0089\u008a\u0007p\u0002\u0002\u008a\u008b\u0007",
    "w\u0002\u0002\u008b\u008c\u0007n\u0002\u0002\u008c\u008d\u0007n\u0002",
    "\u0002\u008d\u000e\u0003\u0002\u0002\u0002\u008e\u008f\u0007v\u0002",
    "\u0002\u008f\u0090\u0007j\u0002\u0002\u0090\u0091\u0007k\u0002\u0002",
    "\u0091\u0092\u0007u\u0002\u0002\u0092\u0010\u0003\u0002\u0002\u0002",
    "\u0093\u0094\u0007h\u0002\u0002\u0094\u0095\u0007q\u0002\u0002\u0095",
    "\u0096\u0007t\u0002\u0002\u0096\u0012\u0003\u0002\u0002\u0002\u0097",
    "\u0098\u0007y\u0002\u0002\u0098\u0099\u0007j\u0002\u0002\u0099\u009a",
    "\u0007k\u0002\u0002\u009a\u009b\u0007n\u0002\u0002\u009b\u009c\u0007",
    "g\u0002\u0002\u009c\u0014\u0003\u0002\u0002\u0002\u009d\u009e\u0007",
    "k\u0002\u0002\u009e\u009f\u0007h\u0002\u0002\u009f\u0016\u0003\u0002",
    "\u0002\u0002\u00a0\u00a1\u0007g\u0002\u0002\u00a1\u00a2\u0007n\u0002",
    "\u0002\u00a2\u00a3\u0007u\u0002\u0002\u00a3\u00a4\u0007g\u0002\u0002",
    "\u00a4\u0018\u0003\u0002\u0002\u0002\u00a5\u00a6\u0007t\u0002\u0002",
    "\u00a6\u00a7\u0007g\u0002\u0002\u00a7\u00a8\u0007v\u0002\u0002\u00a8",
    "\u00a9\u0007w\u0002\u0002\u00a9\u00aa\u0007t\u0002\u0002\u00aa\u00ab",
    "\u0007p\u0002\u0002\u00ab\u001a\u0003\u0002\u0002\u0002\u00ac\u00ad",
    "\u0007d\u0002\u0002\u00ad\u00ae\u0007t\u0002\u0002\u00ae\u00af\u0007",
    "g\u0002\u0002\u00af\u00b0\u0007c\u0002\u0002\u00b0\u00b1\u0007m\u0002",
    "\u0002\u00b1\u001c\u0003\u0002\u0002\u0002\u00b2\u00b3\u0007p\u0002",
    "\u0002\u00b3\u00b4\u0007g\u0002\u0002\u00b4\u00b5\u0007y\u0002\u0002",
    "\u00b5\u001e\u0003\u0002\u0002\u0002\u00b6\u00b7\u0007P\u0002\u0002",
    "\u00b7\u00b8\u0007g\u0002\u0002\u00b8\u00b9\u0007y\u0002\u0002\u00b9",
    "\u00ba\u0007C\u0002\u0002\u00ba\u00bb\u0007t\u0002\u0002\u00bb\u00bc",
    "\u0007t\u0002\u0002\u00bc\u00bd\u0007c\u0002\u0002\u00bd\u00be\u0007",
    "{\u0002\u0002\u00be \u0003\u0002\u0002\u0002\u00bf\u00c0\u0007R\u0002",
    "\u0002\u00c0\u00c1\u0007t\u0002\u0002\u00c1\u00c2\u0007k\u0002\u0002",
    "\u00c2\u00c3\u0007p\u0002\u0002\u00c3\u00c4\u0007v\u0002\u0002\u00c4",
    "\"\u0003\u0002\u0002\u0002\u00c5\u00c6\u0007T\u0002\u0002\u00c6\u00c7",
    "\u0007g\u0002\u0002\u00c7\u00c8\u0007c\u0002\u0002\u00c8\u00c9\u0007",
    "f\u0002\u0002\u00c9\u00ca\u0007K\u0002\u0002\u00ca\u00cb\u0007p\u0002",
    "\u0002\u00cb\u00cc\u0007v\u0002\u0002\u00cc\u00cd\u0007g\u0002\u0002",
    "\u00cd\u00ce\u0007i\u0002\u0002\u00ce\u00cf\u0007g\u0002\u0002\u00cf",
    "\u00d0\u0007t\u0002\u0002\u00d0$\u0003\u0002\u0002\u0002\u00d1\u00d2",
    "\u0007T\u0002\u0002\u00d2\u00d3\u0007g\u0002\u0002\u00d3\u00d4\u0007",
    "c\u0002\u0002\u00d4\u00d5\u0007f\u0002\u0002\u00d5\u00d6\u0007N\u0002",
    "\u0002\u00d6\u00d7\u0007k\u0002\u0002\u00d7\u00d8\u0007p\u0002\u0002",
    "\u00d8\u00d9\u0007g\u0002\u0002\u00d9&\u0003\u0002\u0002\u0002\u00da",
    "\u00db\u0007v\u0002\u0002\u00db\u00dc\u0007t\u0002\u0002\u00dc\u00dd",
    "\u0007w\u0002\u0002\u00dd\u00de\u0007g\u0002\u0002\u00de(\u0003\u0002",
    "\u0002\u0002\u00df\u00e0\u0007h\u0002\u0002\u00e0\u00e1\u0007c\u0002",
    "\u0002\u00e1\u00e2\u0007n\u0002\u0002\u00e2\u00e3\u0007u\u0002\u0002",
    "\u00e3\u00e4\u0007g\u0002\u0002\u00e4*\u0003\u0002\u0002\u0002\u00e5",
    "\u00e6\u0007=\u0002\u0002\u00e6,\u0003\u0002\u0002\u0002\u00e7\u00e8",
    "\u0007}\u0002\u0002\u00e8.\u0003\u0002\u0002\u0002\u00e9\u00ea\u0007",
    "\u007f\u0002\u0002\u00ea0\u0003\u0002\u0002\u0002\u00eb\u00ec\u0007",
    "]\u0002\u0002\u00ec2\u0003\u0002\u0002\u0002\u00ed\u00ee\u0007_\u0002",
    "\u0002\u00ee4\u0003\u0002\u0002\u0002\u00ef\u00f0\u0007*\u0002\u0002",
    "\u00f06\u0003\u0002\u0002\u0002\u00f1\u00f2\u0007+\u0002\u0002\u00f2",
    "8\u0003\u0002\u0002\u0002\u00f3\u00f4\u0007.\u0002\u0002\u00f4:\u0003",
    "\u0002\u0002\u0002\u00f5\u00f6\u00070\u0002\u0002\u00f6<\u0003\u0002",
    "\u0002\u0002\u00f7\u00f8\u0007-\u0002\u0002\u00f8>\u0003\u0002\u0002",
    "\u0002\u00f9\u00fa\u0007/\u0002\u0002\u00fa@\u0003\u0002\u0002\u0002",
    "\u00fb\u00fc\u0007,\u0002\u0002\u00fcB\u0003\u0002\u0002\u0002\u00fd",
    "\u00fe\u00071\u0002\u0002\u00feD\u0003\u0002\u0002\u0002\u00ff\u0100",
    "\u0007\'\u0002\u0002\u0100F\u0003\u0002\u0002\u0002\u0101\u0102\u0007",
    "(\u0002\u0002\u0102\u0103\u0007(\u0002\u0002\u0103H\u0003\u0002\u0002",
    "\u0002\u0104\u0105\u0007~\u0002\u0002\u0105\u0106\u0007~\u0002\u0002",
    "\u0106J\u0003\u0002\u0002\u0002\u0107\u0108\u0007#\u0002\u0002\u0108",
    "L\u0003\u0002\u0002\u0002\u0109\u010a\u0007@\u0002\u0002\u010aN\u0003",
    "\u0002\u0002\u0002\u010b\u010c\u0007>\u0002\u0002\u010cP\u0003\u0002",
    "\u0002\u0002\u010d\u010e\u0007@\u0002\u0002\u010e\u010f\u0007?\u0002",
    "\u0002\u010fR\u0003\u0002\u0002\u0002\u0110\u0111\u0007>\u0002\u0002",
    "\u0111\u0112\u0007?\u0002\u0002\u0112T\u0003\u0002\u0002\u0002\u0113",
    "\u0114\u0007?\u0002\u0002\u0114V\u0003\u0002\u0002\u0002\u0115\u0116",
    "\u0007?\u0002\u0002\u0116\u0117\u0007?\u0002\u0002\u0117X\u0003\u0002",
    "\u0002\u0002\u0118\u0119\u0007#\u0002\u0002\u0119\u011a\u0007?\u0002",
    "\u0002\u011aZ\u0003\u0002\u0002\u0002\u011b\u011f\t\u0002\u0002\u0002",
    "\u011c\u011e\t\u0003\u0002\u0002\u011d\u011c\u0003\u0002\u0002\u0002",
    "\u011e\u0121\u0003\u0002\u0002\u0002\u011f\u011d\u0003\u0002\u0002\u0002",
    "\u011f\u0120\u0003\u0002\u0002\u0002\u0120\\\u0003\u0002\u0002\u0002",
    "\u0121\u011f\u0003\u0002\u0002\u0002\u0122\u0126\t\u0004\u0002\u0002",
    "\u0123\u0125\t\u0005\u0002\u0002\u0124\u0123\u0003\u0002\u0002\u0002",
    "\u0125\u0128\u0003\u0002\u0002\u0002\u0126\u0124\u0003\u0002\u0002\u0002",
    "\u0126\u0127\u0003\u0002\u0002\u0002\u0127\u012b\u0003\u0002\u0002\u0002",
    "\u0128\u0126\u0003\u0002\u0002\u0002\u0129\u012b\u00072\u0002\u0002",
    "\u012a\u0122\u0003\u0002\u0002\u0002\u012a\u0129\u0003\u0002\u0002\u0002",
    "\u012b^\u0003\u0002\u0002\u0002\u012c\u012d\u00072\u0002\u0002\u012d",
    "\u012f\t\u0006\u0002\u0002\u012e\u0130\t\u0007\u0002\u0002\u012f\u012e",
    "\u0003\u0002\u0002\u0002\u0130\u0131\u0003\u0002\u0002\u0002\u0131\u012f",
    "\u0003\u0002\u0002\u0002\u0131\u0132\u0003\u0002\u0002\u0002\u0132`",
    "\u0003\u0002\u0002\u0002\u0133\u0136\u0005\'\u0014\u0002\u0134\u0136",
    "\u0005)\u0015\u0002\u0135\u0133\u0003\u0002\u0002\u0002\u0135\u0134",
    "\u0003\u0002\u0002\u0002\u0136b\u0003\u0002\u0002\u0002\u0137\u0139",
    "\t\u0005\u0002\u0002\u0138\u0137\u0003\u0002\u0002\u0002\u0139\u013a",
    "\u0003\u0002\u0002\u0002\u013a\u0138\u0003\u0002\u0002\u0002\u013a\u013b",
    "\u0003\u0002\u0002\u0002\u013b\u013c\u0003\u0002\u0002\u0002\u013c\u0140",
    "\u00070\u0002\u0002\u013d\u013f\t\u0005\u0002\u0002\u013e\u013d\u0003",
    "\u0002\u0002\u0002\u013f\u0142\u0003\u0002\u0002\u0002\u0140\u013e\u0003",
    "\u0002\u0002\u0002\u0140\u0141\u0003\u0002\u0002\u0002\u0141\u014c\u0003",
    "\u0002\u0002\u0002\u0142\u0140\u0003\u0002\u0002\u0002\u0143\u0145\t",
    "\b\u0002\u0002\u0144\u0146\t\t\u0002\u0002\u0145\u0144\u0003\u0002\u0002",
    "\u0002\u0145\u0146\u0003\u0002\u0002\u0002\u0146\u0148\u0003\u0002\u0002",
    "\u0002\u0147\u0149\t\u0005\u0002\u0002\u0148\u0147\u0003\u0002\u0002",
    "\u0002\u0149\u014a\u0003\u0002\u0002\u0002\u014a\u0148\u0003\u0002\u0002",
    "\u0002\u014a\u014b\u0003\u0002\u0002\u0002\u014b\u014d\u0003\u0002\u0002",
    "\u0002\u014c\u0143\u0003\u0002\u0002\u0002\u014c\u014d\u0003\u0002\u0002",
    "\u0002\u014dd\u0003\u0002\u0002\u0002\u014e\u0152\u0007$\u0002\u0002",
    "\u014f\u0151\n\n\u0002\u0002\u0150\u014f\u0003\u0002\u0002\u0002\u0151",
    "\u0154\u0003\u0002\u0002\u0002\u0152\u0150\u0003\u0002\u0002\u0002\u0152",
    "\u0153\u0003\u0002\u0002\u0002\u0153\u0155\u0003\u0002\u0002\u0002\u0154",
    "\u0152\u0003\u0002\u0002\u0002\u0155\u0156\u0007$\u0002\u0002\u0156",
    "f\u0003\u0002\u0002\u0002\u0157\u0159\t\u000b\u0002\u0002\u0158\u0157",
    "\u0003\u0002\u0002\u0002\u0159\u015a\u0003\u0002\u0002\u0002\u015a\u0158",
    "\u0003\u0002\u0002\u0002\u015a\u015b\u0003\u0002\u0002\u0002\u015b\u015c",
    "\u0003\u0002\u0002\u0002\u015c\u015d\b4\u0002\u0002\u015dh\u0003\u0002",
    "\u0002\u0002\u015e\u015f\u00071\u0002\u0002\u015f\u0160\u0007,\u0002",
    "\u0002\u0160\u0164\u0003\u0002\u0002\u0002\u0161\u0163\u000b\u0002\u0002",
    "\u0002\u0162\u0161\u0003\u0002\u0002\u0002\u0163\u0166\u0003\u0002\u0002",
    "\u0002\u0164\u0165\u0003\u0002\u0002\u0002\u0164\u0162\u0003\u0002\u0002",
    "\u0002\u0165\u0167\u0003\u0002\u0002\u0002\u0166\u0164\u0003\u0002\u0002",
    "\u0002\u0167\u0168\u0007,\u0002\u0002\u0168\u0169\u00071\u0002\u0002",
    "\u0169\u016a\u0003\u0002\u0002\u0002\u016a\u016b\b5\u0003\u0002\u016b",
    "j\u0003\u0002\u0002\u0002\u016c\u016d\u00071\u0002\u0002\u016d\u016e",
    "\u00071\u0002\u0002\u016e\u0172\u0003\u0002\u0002\u0002\u016f\u0171",
    "\n\f\u0002\u0002\u0170\u016f\u0003\u0002\u0002\u0002\u0171\u0174\u0003",
    "\u0002\u0002\u0002\u0172\u0170\u0003\u0002\u0002\u0002\u0172\u0173\u0003",
    "\u0002\u0002\u0002\u0173\u0175\u0003\u0002\u0002\u0002\u0174\u0172\u0003",
    "\u0002\u0002\u0002\u0175\u0176\b6\u0003\u0002\u0176l\u0003\u0002\u0002",
    "\u0002\u0012\u0002\u011d\u011f\u0126\u012a\u0131\u0135\u013a\u0140\u0145",
    "\u014a\u014c\u0152\u015a\u0164\u0172\u0004\b\u0002\u0002\u0002\u0003",
    "\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class MyGrammarLexer extends antlr4.Lexer {

    static grammarFileName = "MyGrammar.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'void'", "'int'", "'double'", "'bool'", 
                         "'string'", "'null'", "'this'", "'for'", "'while'", 
                         "'if'", "'else'", "'return'", "'break'", "'new'", 
                         "'NewArray'", "'Print'", "'ReadInteger'", "'ReadLine'", 
                         "'true'", "'false'", "';'", "'{'", "'}'", "'['", 
                         "']'", "'('", "')'", "','", "'.'", "'+'", "'-'", 
                         "'*'", "'/'", "'%'", "'&&'", "'||'", "'!'", "'>'", 
                         "'<'", "'>='", "'<='", "'='", "'=='", "'!='" ];
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
                          "T_EQUALITY_OP", "T_UNEQUALITY_OP", "T_ID", "T_INT_LITERAL", 
                          "T_HEX_LITERAL", "T_BOOL_LITERAL", "T_DOUBLE_LITERAL", 
                          "T_STRING_LITERAL", "WHITESPACE", "COMMENT", "LINE_COMMENT" ];
	static ruleNames = [ "T_VOID", "T_INT", "T_DOUBLE", "T_BOOL", "T_STRING", 
                      "T_NULL", "T_THIS", "T_FOR", "T_WHILE", "T_IF", "T_ELSE", 
                      "T_RETURN", "T_BREAK", "T_NEW", "T_NEWARRAY", "T_PRINT", 
                      "T_READINTEGER", "T_READLINE", "T_TRUE", "T_FALSE", 
                      "T_SEMICOLON", "T_LCURLY", "T_RCURLY", "T_LSQUARE", 
                      "T_RSQUARE", "T_LROUND", "T_RROUND", "T_COMMA", "T_DOT", 
                      "T_ADD", "T_SUB", "T_MULTIPLY", "T_DIVIDE", "T_REMINDER", 
                      "T_AND", "T_OR", "T_NOT", "T_GREATER_OP", "T_LESS_OP", 
                      "T_GREATER_eq_op", "T_LESS_eq_op", "T_EQUAL_OP", "T_EQUALITY_OP", 
                      "T_UNEQUALITY_OP", "T_ID", "T_INT_LITERAL", "T_HEX_LITERAL", 
                      "T_BOOL_LITERAL", "T_DOUBLE_LITERAL", "T_STRING_LITERAL", 
                      "WHITESPACE", "COMMENT", "LINE_COMMENT" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

MyGrammarLexer.EOF = antlr4.Token.EOF;
MyGrammarLexer.T_VOID = 1;
MyGrammarLexer.T_INT = 2;
MyGrammarLexer.T_DOUBLE = 3;
MyGrammarLexer.T_BOOL = 4;
MyGrammarLexer.T_STRING = 5;
MyGrammarLexer.T_NULL = 6;
MyGrammarLexer.T_THIS = 7;
MyGrammarLexer.T_FOR = 8;
MyGrammarLexer.T_WHILE = 9;
MyGrammarLexer.T_IF = 10;
MyGrammarLexer.T_ELSE = 11;
MyGrammarLexer.T_RETURN = 12;
MyGrammarLexer.T_BREAK = 13;
MyGrammarLexer.T_NEW = 14;
MyGrammarLexer.T_NEWARRAY = 15;
MyGrammarLexer.T_PRINT = 16;
MyGrammarLexer.T_READINTEGER = 17;
MyGrammarLexer.T_READLINE = 18;
MyGrammarLexer.T_TRUE = 19;
MyGrammarLexer.T_FALSE = 20;
MyGrammarLexer.T_SEMICOLON = 21;
MyGrammarLexer.T_LCURLY = 22;
MyGrammarLexer.T_RCURLY = 23;
MyGrammarLexer.T_LSQUARE = 24;
MyGrammarLexer.T_RSQUARE = 25;
MyGrammarLexer.T_LROUND = 26;
MyGrammarLexer.T_RROUND = 27;
MyGrammarLexer.T_COMMA = 28;
MyGrammarLexer.T_DOT = 29;
MyGrammarLexer.T_ADD = 30;
MyGrammarLexer.T_SUB = 31;
MyGrammarLexer.T_MULTIPLY = 32;
MyGrammarLexer.T_DIVIDE = 33;
MyGrammarLexer.T_REMINDER = 34;
MyGrammarLexer.T_AND = 35;
MyGrammarLexer.T_OR = 36;
MyGrammarLexer.T_NOT = 37;
MyGrammarLexer.T_GREATER_OP = 38;
MyGrammarLexer.T_LESS_OP = 39;
MyGrammarLexer.T_GREATER_eq_op = 40;
MyGrammarLexer.T_LESS_eq_op = 41;
MyGrammarLexer.T_EQUAL_OP = 42;
MyGrammarLexer.T_EQUALITY_OP = 43;
MyGrammarLexer.T_UNEQUALITY_OP = 44;
MyGrammarLexer.T_ID = 45;
MyGrammarLexer.T_INT_LITERAL = 46;
MyGrammarLexer.T_HEX_LITERAL = 47;
MyGrammarLexer.T_BOOL_LITERAL = 48;
MyGrammarLexer.T_DOUBLE_LITERAL = 49;
MyGrammarLexer.T_STRING_LITERAL = 50;
MyGrammarLexer.WHITESPACE = 51;
MyGrammarLexer.COMMENT = 52;
MyGrammarLexer.LINE_COMMENT = 53;



