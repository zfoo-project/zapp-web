import ProtocolManager from '../ProtocolManager.js';
// 复杂的对象
// 包括了各种复杂的结构，数组，List，Set，Map
//
// @author jaysunxiao
// @version 3.0
const ComplexObject = function(a, aa, aaa, aaaa, b, bb, bbb, bbbb, c, cc, ccc, cccc, d, dd, ddd, dddd, e, ee, eee, eeee, f, ff, fff, ffff, g, gg, ggg, gggg, h, hh, hhh, hhhh, jj, jjj, kk, kkk, l, ll, lll, llll, lllll, m, mm, mmm, mmmm, mmmmm, s, ss, sss, ssss, sssss) {
    // byte类型，最简单的整形
    this.a = a; // byte
    // byte的包装类型
    // 优先使用基础类型，包装类型会有装箱拆箱
    this.aa = aa; // java.lang.Byte
    // 数组类型
    this.aaa = aaa; // byte[]
    this.aaaa = aaaa; // java.lang.Byte[]
    this.b = b; // short
    this.bb = bb; // java.lang.Short
    this.bbb = bbb; // short[]
    this.bbbb = bbbb; // java.lang.Short[]
    this.c = c; // int
    this.cc = cc; // java.lang.Integer
    this.ccc = ccc; // int[]
    this.cccc = cccc; // java.lang.Integer[]
    this.d = d; // long
    this.dd = dd; // java.lang.Long
    this.ddd = ddd; // long[]
    this.dddd = dddd; // java.lang.Long[]
    this.e = e; // float
    this.ee = ee; // java.lang.Float
    this.eee = eee; // float[]
    this.eeee = eeee; // java.lang.Float[]
    this.f = f; // double
    this.ff = ff; // java.lang.Double
    this.fff = fff; // double[]
    this.ffff = ffff; // java.lang.Double[]
    this.g = g; // boolean
    this.gg = gg; // java.lang.Boolean
    this.ggg = ggg; // boolean[]
    this.gggg = gggg; // java.lang.Boolean[]
    this.h = h; // char
    this.hh = hh; // java.lang.Character
    this.hhh = hhh; // char[]
    this.hhhh = hhhh; // java.lang.Character[]
    this.jj = jj; // java.lang.String
    this.jjj = jjj; // java.lang.String[]
    this.kk = kk; // com.zfoo.protocol.packet.ObjectA
    this.kkk = kkk; // com.zfoo.protocol.packet.ObjectA[]
    this.l = l; // java.util.List<java.lang.Integer>
    this.ll = ll; // java.util.List<java.util.List<java.util.List<java.lang.Integer>>>
    this.lll = lll; // java.util.List<java.util.List<com.zfoo.protocol.packet.ObjectA>>
    this.llll = llll; // java.util.List<java.lang.String>
    this.lllll = lllll; // java.util.List<java.util.Map<java.lang.Integer, java.lang.String>>
    this.m = m; // java.util.Map<java.lang.Integer, java.lang.String>
    this.mm = mm; // java.util.Map<java.lang.Integer, com.zfoo.protocol.packet.ObjectA>
    this.mmm = mmm; // java.util.Map<com.zfoo.protocol.packet.ObjectA, java.util.List<java.lang.Integer>>
    this.mmmm = mmmm; // java.util.Map<java.util.List<java.util.List<com.zfoo.protocol.packet.ObjectA>>, java.util.List<java.util.List<java.util.List<java.lang.Integer>>>>
    this.mmmmm = mmmmm; // java.util.Map<java.util.List<java.util.Map<java.lang.Integer, java.lang.String>>, java.util.Set<java.util.Map<java.lang.Integer, java.lang.String>>>
    this.s = s; // java.util.Set<java.lang.Integer>
    this.ss = ss; // java.util.Set<java.util.Set<java.util.List<java.lang.Integer>>>
    this.sss = sss; // java.util.Set<java.util.Set<com.zfoo.protocol.packet.ObjectA>>
    this.ssss = ssss; // java.util.Set<java.lang.String>
    this.sssss = sssss; // java.util.Set<java.util.Map<java.lang.Integer, java.lang.String>>
};

ComplexObject.prototype.protocolId = function() {
    return 100;
};

ComplexObject.write = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeByte(packet.a);
    byteBuffer.writeByte(packet.aa);
    byteBuffer.writeByteArray(packet.aaa);
    byteBuffer.writeByteArray(packet.aaaa);
    byteBuffer.writeShort(packet.b);
    byteBuffer.writeShort(packet.bb);
    byteBuffer.writeShortArray(packet.bbb);
    byteBuffer.writeShortArray(packet.bbbb);
    byteBuffer.writeInt(packet.c);
    byteBuffer.writeInt(packet.cc);
    byteBuffer.writeIntArray(packet.ccc);
    byteBuffer.writeIntArray(packet.cccc);
    byteBuffer.writeLong(packet.d);
    byteBuffer.writeLong(packet.dd);
    byteBuffer.writeLongArray(packet.ddd);
    byteBuffer.writeLongArray(packet.dddd);
    byteBuffer.writeFloat(packet.e);
    byteBuffer.writeFloat(packet.ee);
    byteBuffer.writeFloatArray(packet.eee);
    byteBuffer.writeFloatArray(packet.eeee);
    byteBuffer.writeDouble(packet.f);
    byteBuffer.writeDouble(packet.ff);
    byteBuffer.writeDoubleArray(packet.fff);
    byteBuffer.writeDoubleArray(packet.ffff);
    byteBuffer.writeBoolean(packet.g);
    byteBuffer.writeBoolean(packet.gg);
    byteBuffer.writeBooleanArray(packet.ggg);
    byteBuffer.writeBooleanArray(packet.gggg);
    byteBuffer.writeChar(packet.h);
    byteBuffer.writeChar(packet.hh);
    byteBuffer.writeCharArray(packet.hhh);
    byteBuffer.writeCharArray(packet.hhhh);
    byteBuffer.writeString(packet.jj);
    byteBuffer.writeStringArray(packet.jjj);
    ProtocolManager.getProtocol(102).write(byteBuffer, packet.kk);
    byteBuffer.writePacketArray(packet.kkk, 102);
    byteBuffer.writeIntArray(packet.l);
    if (packet.ll === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.ll.length);
        packet.ll.forEach(element0 => {
            if (element0 === null) {
                byteBuffer.writeInt(0);
            } else {
                byteBuffer.writeInt(element0.length);
                element0.forEach(element1 => {
                    byteBuffer.writeIntArray(element1);
                });
            }
        });
    }
    if (packet.lll === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.lll.length);
        packet.lll.forEach(element2 => {
            byteBuffer.writePacketArray(element2, 102);
        });
    }
    byteBuffer.writeStringArray(packet.llll);
    if (packet.lllll === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.lllll.length);
        packet.lllll.forEach(element3 => {
            if (element3 === null) {
                byteBuffer.writeInt(0);
            } else {
                byteBuffer.writeInt(element3.size);
                element3.forEach((value5, key4) => {
                    byteBuffer.writeInt(key4);
                    byteBuffer.writeString(value5);
                });
            }
        });
    }
    if (packet.m === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.m.size);
        packet.m.forEach((value7, key6) => {
            byteBuffer.writeInt(key6);
            byteBuffer.writeString(value7);
        });
    }
    if (packet.mm === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.mm.size);
        packet.mm.forEach((value9, key8) => {
            byteBuffer.writeInt(key8);
            ProtocolManager.getProtocol(102).write(byteBuffer, value9);
        });
    }
    if (packet.mmm === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.mmm.size);
        packet.mmm.forEach((value11, key10) => {
            ProtocolManager.getProtocol(102).write(byteBuffer, key10);
            byteBuffer.writeIntArray(value11);
        });
    }
    if (packet.mmmm === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.mmmm.size);
        packet.mmmm.forEach((value13, key12) => {
            if (key12 === null) {
                byteBuffer.writeInt(0);
            } else {
                byteBuffer.writeInt(key12.length);
                key12.forEach(element14 => {
                    byteBuffer.writePacketArray(element14, 102);
                });
            }
            if (value13 === null) {
                byteBuffer.writeInt(0);
            } else {
                byteBuffer.writeInt(value13.length);
                value13.forEach(element15 => {
                    if (element15 === null) {
                        byteBuffer.writeInt(0);
                    } else {
                        byteBuffer.writeInt(element15.length);
                        element15.forEach(element16 => {
                            byteBuffer.writeIntArray(element16);
                        });
                    }
                });
            }
        });
    }
    if (packet.mmmmm === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.mmmmm.size);
        packet.mmmmm.forEach((value18, key17) => {
            if (key17 === null) {
                byteBuffer.writeInt(0);
            } else {
                byteBuffer.writeInt(key17.length);
                key17.forEach(element19 => {
                    if (element19 === null) {
                        byteBuffer.writeInt(0);
                    } else {
                        byteBuffer.writeInt(element19.size);
                        element19.forEach((value21, key20) => {
                            byteBuffer.writeInt(key20);
                            byteBuffer.writeString(value21);
                        });
                    }
                });
            }
            if (value18 === null) {
                byteBuffer.writeInt(0);
            } else {
                byteBuffer.writeInt(value18.size);
                value18.forEach(element22 => {
                    if (element22 === null) {
                        byteBuffer.writeInt(0);
                    } else {
                        byteBuffer.writeInt(element22.size);
                        element22.forEach((value24, key23) => {
                            byteBuffer.writeInt(key23);
                            byteBuffer.writeString(value24);
                        });
                    }
                });
            }
        });
    }
    if (packet.s === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.s.size);
        packet.s.forEach(element25 => {
            byteBuffer.writeInt(element25);
        });
    }
    if (packet.ss === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.ss.size);
        packet.ss.forEach(element26 => {
            if (element26 === null) {
                byteBuffer.writeInt(0);
            } else {
                byteBuffer.writeInt(element26.size);
                element26.forEach(element27 => {
                    byteBuffer.writeIntArray(element27);
                });
            }
        });
    }
    if (packet.sss === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.sss.size);
        packet.sss.forEach(element28 => {
            if (element28 === null) {
                byteBuffer.writeInt(0);
            } else {
                byteBuffer.writeInt(element28.size);
                element28.forEach(element29 => {
                    ProtocolManager.getProtocol(102).write(byteBuffer, element29);
                });
            }
        });
    }
    if (packet.ssss === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.ssss.size);
        packet.ssss.forEach(element30 => {
            byteBuffer.writeString(element30);
        });
    }
    if (packet.sssss === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.sssss.size);
        packet.sssss.forEach(element31 => {
            if (element31 === null) {
                byteBuffer.writeInt(0);
            } else {
                byteBuffer.writeInt(element31.size);
                element31.forEach((value33, key32) => {
                    byteBuffer.writeInt(key32);
                    byteBuffer.writeString(value33);
                });
            }
        });
    }
};

ComplexObject.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new ComplexObject();
    const result34 = byteBuffer.readByte();
    packet.a = result34;
    const result35 = byteBuffer.readByte();
    packet.aa = result35;
    const array36 = byteBuffer.readByteArray();
    packet.aaa = array36;
    const array37 = byteBuffer.readByteArray();
    packet.aaaa = array37;
    const result38 = byteBuffer.readShort();
    packet.b = result38;
    const result39 = byteBuffer.readShort();
    packet.bb = result39;
    const array40 = byteBuffer.readShortArray();
    packet.bbb = array40;
    const array41 = byteBuffer.readShortArray();
    packet.bbbb = array41;
    const result42 = byteBuffer.readInt();
    packet.c = result42;
    const result43 = byteBuffer.readInt();
    packet.cc = result43;
    const array44 = byteBuffer.readIntArray();
    packet.ccc = array44;
    const array45 = byteBuffer.readIntArray();
    packet.cccc = array45;
    const result46 = byteBuffer.readLong();
    packet.d = result46;
    const result47 = byteBuffer.readLong();
    packet.dd = result47;
    const array48 = byteBuffer.readLongArray();
    packet.ddd = array48;
    const array49 = byteBuffer.readLongArray();
    packet.dddd = array49;
    const result50 = byteBuffer.readFloat();
    packet.e = result50;
    const result51 = byteBuffer.readFloat();
    packet.ee = result51;
    const array52 = byteBuffer.readFloatArray();
    packet.eee = array52;
    const array53 = byteBuffer.readFloatArray();
    packet.eeee = array53;
    const result54 = byteBuffer.readDouble();
    packet.f = result54;
    const result55 = byteBuffer.readDouble();
    packet.ff = result55;
    const array56 = byteBuffer.readDoubleArray();
    packet.fff = array56;
    const array57 = byteBuffer.readDoubleArray();
    packet.ffff = array57;
    const result58 = byteBuffer.readBoolean(); 
    packet.g = result58;
    const result59 = byteBuffer.readBoolean(); 
    packet.gg = result59;
    const array60 = byteBuffer.readBooleanArray();
    packet.ggg = array60;
    const array61 = byteBuffer.readBooleanArray();
    packet.gggg = array61;
    const result62 = byteBuffer.readChar();
    packet.h = result62;
    const result63 = byteBuffer.readChar();
    packet.hh = result63;
    const array64 = byteBuffer.readCharArray();
    packet.hhh = array64;
    const array65 = byteBuffer.readCharArray();
    packet.hhhh = array65;
    const result66 = byteBuffer.readString();
    packet.jj = result66;
    const array67 = byteBuffer.readStringArray();
    packet.jjj = array67;
    const result68 = ProtocolManager.getProtocol(102).read(byteBuffer);
    packet.kk = result68;
    const array69 = byteBuffer.readPacketArray(102);
    packet.kkk = array69;
    const list70 = byteBuffer.readIntArray();
    packet.l = list70;
    const result71 = [];
    const size72 = byteBuffer.readInt();
    if (size72 > 0) {
        for (let index73 = 0; index73 < size72; index73++) {
            const result74 = [];
            const size75 = byteBuffer.readInt();
            if (size75 > 0) {
                for (let index76 = 0; index76 < size75; index76++) {
                    const list77 = byteBuffer.readIntArray();
                    result74.push(list77);
                }
            }
            result71.push(result74);
        }
    }
    packet.ll = result71;
    const result78 = [];
    const size79 = byteBuffer.readInt();
    if (size79 > 0) {
        for (let index80 = 0; index80 < size79; index80++) {
            const list81 = byteBuffer.readPacketArray(102);
            result78.push(list81);
        }
    }
    packet.lll = result78;
    const list82 = byteBuffer.readStringArray();
    packet.llll = list82;
    const result83 = [];
    const size84 = byteBuffer.readInt();
    if (size84 > 0) {
        for (let index85 = 0; index85 < size84; index85++) {
            const result86 = new Map();
            const size87 = byteBuffer.readInt();
            if (size87 > 0) {
                for (let index88 = 0; index88 < size87; index88++) {
                    const result89 = byteBuffer.readInt();
                    const result90 = byteBuffer.readString();
                    result86.set(result89, result90);
                }
            }
            result83.push(result86);
        }
    }
    packet.lllll = result83;
    const result91 = new Map();
    const size92 = byteBuffer.readInt();
    if (size92 > 0) {
        for (let index93 = 0; index93 < size92; index93++) {
            const result94 = byteBuffer.readInt();
            const result95 = byteBuffer.readString();
            result91.set(result94, result95);
        }
    }
    packet.m = result91;
    const result96 = new Map();
    const size97 = byteBuffer.readInt();
    if (size97 > 0) {
        for (let index98 = 0; index98 < size97; index98++) {
            const result99 = byteBuffer.readInt();
            const result100 = ProtocolManager.getProtocol(102).read(byteBuffer);
            result96.set(result99, result100);
        }
    }
    packet.mm = result96;
    const result101 = new Map();
    const size102 = byteBuffer.readInt();
    if (size102 > 0) {
        for (let index103 = 0; index103 < size102; index103++) {
            const result104 = ProtocolManager.getProtocol(102).read(byteBuffer);
            const list105 = byteBuffer.readIntArray();
            result101.set(result104, list105);
        }
    }
    packet.mmm = result101;
    const result106 = new Map();
    const size107 = byteBuffer.readInt();
    if (size107 > 0) {
        for (let index108 = 0; index108 < size107; index108++) {
            const result109 = [];
            const size110 = byteBuffer.readInt();
            if (size110 > 0) {
                for (let index111 = 0; index111 < size110; index111++) {
                    const list112 = byteBuffer.readPacketArray(102);
                    result109.push(list112);
                }
            }
            const result113 = [];
            const size114 = byteBuffer.readInt();
            if (size114 > 0) {
                for (let index115 = 0; index115 < size114; index115++) {
                    const result116 = [];
                    const size117 = byteBuffer.readInt();
                    if (size117 > 0) {
                        for (let index118 = 0; index118 < size117; index118++) {
                            const list119 = byteBuffer.readIntArray();
                            result116.push(list119);
                        }
                    }
                    result113.push(result116);
                }
            }
            result106.set(result109, result113);
        }
    }
    packet.mmmm = result106;
    const result120 = new Map();
    const size121 = byteBuffer.readInt();
    if (size121 > 0) {
        for (let index122 = 0; index122 < size121; index122++) {
            const result123 = [];
            const size124 = byteBuffer.readInt();
            if (size124 > 0) {
                for (let index125 = 0; index125 < size124; index125++) {
                    const result126 = new Map();
                    const size127 = byteBuffer.readInt();
                    if (size127 > 0) {
                        for (let index128 = 0; index128 < size127; index128++) {
                            const result129 = byteBuffer.readInt();
                            const result130 = byteBuffer.readString();
                            result126.set(result129, result130);
                        }
                    }
                    result123.push(result126);
                }
            }
            const result131 = new Set();
            const size132 = byteBuffer.readInt();
            if (size132 > 0) {
                for (let index133 = 0; index133 < size132; index133++) {
                    const result134 = new Map();
                    const size135 = byteBuffer.readInt();
                    if (size135 > 0) {
                        for (let index136 = 0; index136 < size135; index136++) {
                            const result137 = byteBuffer.readInt();
                            const result138 = byteBuffer.readString();
                            result134.set(result137, result138);
                        }
                    }
                    result131.add(result134);
                }
            }
            result120.set(result123, result131);
        }
    }
    packet.mmmmm = result120;
    const result139 = new Set();
    const size140 = byteBuffer.readInt();
    if (size140 > 0) {
        for (let index141 = 0; index141 < size140; index141++) {
            const result142 = byteBuffer.readInt();
            result139.add(result142);
        }
    }
    packet.s = result139;
    const result143 = new Set();
    const size144 = byteBuffer.readInt();
    if (size144 > 0) {
        for (let index145 = 0; index145 < size144; index145++) {
            const result146 = new Set();
            const size147 = byteBuffer.readInt();
            if (size147 > 0) {
                for (let index148 = 0; index148 < size147; index148++) {
                    const list149 = byteBuffer.readIntArray();
                    result146.add(list149);
                }
            }
            result143.add(result146);
        }
    }
    packet.ss = result143;
    const result150 = new Set();
    const size151 = byteBuffer.readInt();
    if (size151 > 0) {
        for (let index152 = 0; index152 < size151; index152++) {
            const result153 = new Set();
            const size154 = byteBuffer.readInt();
            if (size154 > 0) {
                for (let index155 = 0; index155 < size154; index155++) {
                    const result156 = ProtocolManager.getProtocol(102).read(byteBuffer);
                    result153.add(result156);
                }
            }
            result150.add(result153);
        }
    }
    packet.sss = result150;
    const result157 = new Set();
    const size158 = byteBuffer.readInt();
    if (size158 > 0) {
        for (let index159 = 0; index159 < size158; index159++) {
            const result160 = byteBuffer.readString();
            result157.add(result160);
        }
    }
    packet.ssss = result157;
    const result161 = new Set();
    const size162 = byteBuffer.readInt();
    if (size162 > 0) {
        for (let index163 = 0; index163 < size162; index163++) {
            const result164 = new Map();
            const size165 = byteBuffer.readInt();
            if (size165 > 0) {
                for (let index166 = 0; index166 < size165; index166++) {
                    const result167 = byteBuffer.readInt();
                    const result168 = byteBuffer.readString();
                    result164.set(result167, result168);
                }
            }
            result161.add(result164);
        }
    }
    packet.sssss = result161;
    return packet;
};

export default ComplexObject;
