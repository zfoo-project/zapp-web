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
    if (packet.l === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.l.length);
        packet.l.forEach(element0 => {
            byteBuffer.writeInt(element0);
        });
    }
    if (packet.ll === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.ll.length);
        packet.ll.forEach(element1 => {
            if (element1 === null) {
                byteBuffer.writeInt(0);
            } else {
                byteBuffer.writeInt(element1.length);
                element1.forEach(element2 => {
                    if (element2 === null) {
                        byteBuffer.writeInt(0);
                    } else {
                        byteBuffer.writeInt(element2.length);
                        element2.forEach(element3 => {
                            byteBuffer.writeInt(element3);
                        });
                    }
                });
            }
        });
    }
    if (packet.lll === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.lll.length);
        packet.lll.forEach(element4 => {
            if (element4 === null) {
                byteBuffer.writeInt(0);
            } else {
                byteBuffer.writeInt(element4.length);
                element4.forEach(element5 => {
                    ProtocolManager.getProtocol(102).write(byteBuffer, element5);
                });
            }
        });
    }
    if (packet.llll === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.llll.length);
        packet.llll.forEach(element6 => {
            byteBuffer.writeString(element6);
        });
    }
    if (packet.lllll === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.lllll.length);
        packet.lllll.forEach(element7 => {
            if (element7 === null) {
                byteBuffer.writeInt(0);
            } else {
                byteBuffer.writeInt(element7.size);
                element7.forEach((value9, key8) => {
                    byteBuffer.writeInt(key8);
                    byteBuffer.writeString(value9);
                });
            }
        });
    }
    if (packet.m === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.m.size);
        packet.m.forEach((value11, key10) => {
            byteBuffer.writeInt(key10);
            byteBuffer.writeString(value11);
        });
    }
    if (packet.mm === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.mm.size);
        packet.mm.forEach((value13, key12) => {
            byteBuffer.writeInt(key12);
            ProtocolManager.getProtocol(102).write(byteBuffer, value13);
        });
    }
    if (packet.mmm === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.mmm.size);
        packet.mmm.forEach((value15, key14) => {
            ProtocolManager.getProtocol(102).write(byteBuffer, key14);
            if (value15 === null) {
                byteBuffer.writeInt(0);
            } else {
                byteBuffer.writeInt(value15.length);
                value15.forEach(element16 => {
                    byteBuffer.writeInt(element16);
                });
            }
        });
    }
    if (packet.mmmm === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.mmmm.size);
        packet.mmmm.forEach((value18, key17) => {
            if (key17 === null) {
                byteBuffer.writeInt(0);
            } else {
                byteBuffer.writeInt(key17.length);
                key17.forEach(element19 => {
                    if (element19 === null) {
                        byteBuffer.writeInt(0);
                    } else {
                        byteBuffer.writeInt(element19.length);
                        element19.forEach(element20 => {
                            ProtocolManager.getProtocol(102).write(byteBuffer, element20);
                        });
                    }
                });
            }
            if (value18 === null) {
                byteBuffer.writeInt(0);
            } else {
                byteBuffer.writeInt(value18.length);
                value18.forEach(element21 => {
                    if (element21 === null) {
                        byteBuffer.writeInt(0);
                    } else {
                        byteBuffer.writeInt(element21.length);
                        element21.forEach(element22 => {
                            if (element22 === null) {
                                byteBuffer.writeInt(0);
                            } else {
                                byteBuffer.writeInt(element22.length);
                                element22.forEach(element23 => {
                                    byteBuffer.writeInt(element23);
                                });
                            }
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
        packet.mmmmm.forEach((value25, key24) => {
            if (key24 === null) {
                byteBuffer.writeInt(0);
            } else {
                byteBuffer.writeInt(key24.length);
                key24.forEach(element26 => {
                    if (element26 === null) {
                        byteBuffer.writeInt(0);
                    } else {
                        byteBuffer.writeInt(element26.size);
                        element26.forEach((value28, key27) => {
                            byteBuffer.writeInt(key27);
                            byteBuffer.writeString(value28);
                        });
                    }
                });
            }
            if (value25 === null) {
                byteBuffer.writeInt(0);
            } else {
                byteBuffer.writeInt(value25.size);
                value25.forEach(element29 => {
                    if (element29 === null) {
                        byteBuffer.writeInt(0);
                    } else {
                        byteBuffer.writeInt(element29.size);
                        element29.forEach((value31, key30) => {
                            byteBuffer.writeInt(key30);
                            byteBuffer.writeString(value31);
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
        packet.s.forEach(element32 => {
            byteBuffer.writeInt(element32);
        });
    }
    if (packet.ss === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.ss.size);
        packet.ss.forEach(element33 => {
            if (element33 === null) {
                byteBuffer.writeInt(0);
            } else {
                byteBuffer.writeInt(element33.size);
                element33.forEach(element34 => {
                    if (element34 === null) {
                        byteBuffer.writeInt(0);
                    } else {
                        byteBuffer.writeInt(element34.length);
                        element34.forEach(element35 => {
                            byteBuffer.writeInt(element35);
                        });
                    }
                });
            }
        });
    }
    if (packet.sss === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.sss.size);
        packet.sss.forEach(element36 => {
            if (element36 === null) {
                byteBuffer.writeInt(0);
            } else {
                byteBuffer.writeInt(element36.size);
                element36.forEach(element37 => {
                    ProtocolManager.getProtocol(102).write(byteBuffer, element37);
                });
            }
        });
    }
    if (packet.ssss === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.ssss.size);
        packet.ssss.forEach(element38 => {
            byteBuffer.writeString(element38);
        });
    }
    if (packet.sssss === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.sssss.size);
        packet.sssss.forEach(element39 => {
            if (element39 === null) {
                byteBuffer.writeInt(0);
            } else {
                byteBuffer.writeInt(element39.size);
                element39.forEach((value41, key40) => {
                    byteBuffer.writeInt(key40);
                    byteBuffer.writeString(value41);
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
    const result42 = byteBuffer.readByte();
    packet.a = result42;
    const result43 = byteBuffer.readByte();
    packet.aa = result43;
    const array44 = byteBuffer.readByteArray();
    packet.aaa = array44;
    const array45 = byteBuffer.readByteArray();
    packet.aaaa = array45;
    const result46 = byteBuffer.readShort();
    packet.b = result46;
    const result47 = byteBuffer.readShort();
    packet.bb = result47;
    const array48 = byteBuffer.readShortArray();
    packet.bbb = array48;
    const array49 = byteBuffer.readShortArray();
    packet.bbbb = array49;
    const result50 = byteBuffer.readInt();
    packet.c = result50;
    const result51 = byteBuffer.readInt();
    packet.cc = result51;
    const array52 = byteBuffer.readIntArray();
    packet.ccc = array52;
    const array53 = byteBuffer.readIntArray();
    packet.cccc = array53;
    const result54 = byteBuffer.readLong();
    packet.d = result54;
    const result55 = byteBuffer.readLong();
    packet.dd = result55;
    const array56 = byteBuffer.readLongArray();
    packet.ddd = array56;
    const array57 = byteBuffer.readLongArray();
    packet.dddd = array57;
    const result58 = byteBuffer.readFloat();
    packet.e = result58;
    const result59 = byteBuffer.readFloat();
    packet.ee = result59;
    const array60 = byteBuffer.readFloatArray();
    packet.eee = array60;
    const array61 = byteBuffer.readFloatArray();
    packet.eeee = array61;
    const result62 = byteBuffer.readDouble();
    packet.f = result62;
    const result63 = byteBuffer.readDouble();
    packet.ff = result63;
    const array64 = byteBuffer.readDoubleArray();
    packet.fff = array64;
    const array65 = byteBuffer.readDoubleArray();
    packet.ffff = array65;
    const result66 = byteBuffer.readBoolean(); 
    packet.g = result66;
    const result67 = byteBuffer.readBoolean(); 
    packet.gg = result67;
    const array68 = byteBuffer.readBooleanArray();
    packet.ggg = array68;
    const array69 = byteBuffer.readBooleanArray();
    packet.gggg = array69;
    const result70 = byteBuffer.readChar();
    packet.h = result70;
    const result71 = byteBuffer.readChar();
    packet.hh = result71;
    const array72 = byteBuffer.readCharArray();
    packet.hhh = array72;
    const array73 = byteBuffer.readCharArray();
    packet.hhhh = array73;
    const result74 = byteBuffer.readString();
    packet.jj = result74;
    const array75 = byteBuffer.readStringArray();
    packet.jjj = array75;
    const result76 = ProtocolManager.getProtocol(102).read(byteBuffer);
    packet.kk = result76;
    const array77 = byteBuffer.readPacketArray(102);
    packet.kkk = array77;
    const result78 = [];
    const size79 = byteBuffer.readInt();
    if (size79 > 0) {
        for (let index80 = 0; index80 < size79; index80++) {
            const result81 = byteBuffer.readInt();
            result78.push(result81);
        }
    }
    packet.l = result78;
    const result82 = [];
    const size83 = byteBuffer.readInt();
    if (size83 > 0) {
        for (let index84 = 0; index84 < size83; index84++) {
            const result85 = [];
            const size86 = byteBuffer.readInt();
            if (size86 > 0) {
                for (let index87 = 0; index87 < size86; index87++) {
                    const result88 = [];
                    const size89 = byteBuffer.readInt();
                    if (size89 > 0) {
                        for (let index90 = 0; index90 < size89; index90++) {
                            const result91 = byteBuffer.readInt();
                            result88.push(result91);
                        }
                    }
                    result85.push(result88);
                }
            }
            result82.push(result85);
        }
    }
    packet.ll = result82;
    const result92 = [];
    const size93 = byteBuffer.readInt();
    if (size93 > 0) {
        for (let index94 = 0; index94 < size93; index94++) {
            const result95 = [];
            const size96 = byteBuffer.readInt();
            if (size96 > 0) {
                for (let index97 = 0; index97 < size96; index97++) {
                    const result98 = ProtocolManager.getProtocol(102).read(byteBuffer);
                    result95.push(result98);
                }
            }
            result92.push(result95);
        }
    }
    packet.lll = result92;
    const result99 = [];
    const size100 = byteBuffer.readInt();
    if (size100 > 0) {
        for (let index101 = 0; index101 < size100; index101++) {
            const result102 = byteBuffer.readString();
            result99.push(result102);
        }
    }
    packet.llll = result99;
    const result103 = [];
    const size104 = byteBuffer.readInt();
    if (size104 > 0) {
        for (let index105 = 0; index105 < size104; index105++) {
            const result106 = new Map();
            const size107 = byteBuffer.readInt();
            if (size107 > 0) {
                for (let index108 = 0; index108 < size107; index108++) {
                    const result109 = byteBuffer.readInt();
                    const result110 = byteBuffer.readString();
                    result106.set(result109, result110);
                }
            }
            result103.push(result106);
        }
    }
    packet.lllll = result103;
    const result111 = new Map();
    const size112 = byteBuffer.readInt();
    if (size112 > 0) {
        for (let index113 = 0; index113 < size112; index113++) {
            const result114 = byteBuffer.readInt();
            const result115 = byteBuffer.readString();
            result111.set(result114, result115);
        }
    }
    packet.m = result111;
    const result116 = new Map();
    const size117 = byteBuffer.readInt();
    if (size117 > 0) {
        for (let index118 = 0; index118 < size117; index118++) {
            const result119 = byteBuffer.readInt();
            const result120 = ProtocolManager.getProtocol(102).read(byteBuffer);
            result116.set(result119, result120);
        }
    }
    packet.mm = result116;
    const result121 = new Map();
    const size122 = byteBuffer.readInt();
    if (size122 > 0) {
        for (let index123 = 0; index123 < size122; index123++) {
            const result124 = ProtocolManager.getProtocol(102).read(byteBuffer);
            const result125 = [];
            const size126 = byteBuffer.readInt();
            if (size126 > 0) {
                for (let index127 = 0; index127 < size126; index127++) {
                    const result128 = byteBuffer.readInt();
                    result125.push(result128);
                }
            }
            result121.set(result124, result125);
        }
    }
    packet.mmm = result121;
    const result129 = new Map();
    const size130 = byteBuffer.readInt();
    if (size130 > 0) {
        for (let index131 = 0; index131 < size130; index131++) {
            const result132 = [];
            const size133 = byteBuffer.readInt();
            if (size133 > 0) {
                for (let index134 = 0; index134 < size133; index134++) {
                    const result135 = [];
                    const size136 = byteBuffer.readInt();
                    if (size136 > 0) {
                        for (let index137 = 0; index137 < size136; index137++) {
                            const result138 = ProtocolManager.getProtocol(102).read(byteBuffer);
                            result135.push(result138);
                        }
                    }
                    result132.push(result135);
                }
            }
            const result139 = [];
            const size140 = byteBuffer.readInt();
            if (size140 > 0) {
                for (let index141 = 0; index141 < size140; index141++) {
                    const result142 = [];
                    const size143 = byteBuffer.readInt();
                    if (size143 > 0) {
                        for (let index144 = 0; index144 < size143; index144++) {
                            const result145 = [];
                            const size146 = byteBuffer.readInt();
                            if (size146 > 0) {
                                for (let index147 = 0; index147 < size146; index147++) {
                                    const result148 = byteBuffer.readInt();
                                    result145.push(result148);
                                }
                            }
                            result142.push(result145);
                        }
                    }
                    result139.push(result142);
                }
            }
            result129.set(result132, result139);
        }
    }
    packet.mmmm = result129;
    const result149 = new Map();
    const size150 = byteBuffer.readInt();
    if (size150 > 0) {
        for (let index151 = 0; index151 < size150; index151++) {
            const result152 = [];
            const size153 = byteBuffer.readInt();
            if (size153 > 0) {
                for (let index154 = 0; index154 < size153; index154++) {
                    const result155 = new Map();
                    const size156 = byteBuffer.readInt();
                    if (size156 > 0) {
                        for (let index157 = 0; index157 < size156; index157++) {
                            const result158 = byteBuffer.readInt();
                            const result159 = byteBuffer.readString();
                            result155.set(result158, result159);
                        }
                    }
                    result152.push(result155);
                }
            }
            const result160 = new Set();
            const size161 = byteBuffer.readInt();
            if (size161 > 0) {
                for (let index162 = 0; index162 < size161; index162++) {
                    const result163 = new Map();
                    const size164 = byteBuffer.readInt();
                    if (size164 > 0) {
                        for (let index165 = 0; index165 < size164; index165++) {
                            const result166 = byteBuffer.readInt();
                            const result167 = byteBuffer.readString();
                            result163.set(result166, result167);
                        }
                    }
                    result160.add(result163);
                }
            }
            result149.set(result152, result160);
        }
    }
    packet.mmmmm = result149;
    const result168 = new Set();
    const size169 = byteBuffer.readInt();
    if (size169 > 0) {
        for (let index170 = 0; index170 < size169; index170++) {
            const result171 = byteBuffer.readInt();
            result168.add(result171);
        }
    }
    packet.s = result168;
    const result172 = new Set();
    const size173 = byteBuffer.readInt();
    if (size173 > 0) {
        for (let index174 = 0; index174 < size173; index174++) {
            const result175 = new Set();
            const size176 = byteBuffer.readInt();
            if (size176 > 0) {
                for (let index177 = 0; index177 < size176; index177++) {
                    const result178 = [];
                    const size179 = byteBuffer.readInt();
                    if (size179 > 0) {
                        for (let index180 = 0; index180 < size179; index180++) {
                            const result181 = byteBuffer.readInt();
                            result178.push(result181);
                        }
                    }
                    result175.add(result178);
                }
            }
            result172.add(result175);
        }
    }
    packet.ss = result172;
    const result182 = new Set();
    const size183 = byteBuffer.readInt();
    if (size183 > 0) {
        for (let index184 = 0; index184 < size183; index184++) {
            const result185 = new Set();
            const size186 = byteBuffer.readInt();
            if (size186 > 0) {
                for (let index187 = 0; index187 < size186; index187++) {
                    const result188 = ProtocolManager.getProtocol(102).read(byteBuffer);
                    result185.add(result188);
                }
            }
            result182.add(result185);
        }
    }
    packet.sss = result182;
    const result189 = new Set();
    const size190 = byteBuffer.readInt();
    if (size190 > 0) {
        for (let index191 = 0; index191 < size190; index191++) {
            const result192 = byteBuffer.readString();
            result189.add(result192);
        }
    }
    packet.ssss = result189;
    const result193 = new Set();
    const size194 = byteBuffer.readInt();
    if (size194 > 0) {
        for (let index195 = 0; index195 < size194; index195++) {
            const result196 = new Map();
            const size197 = byteBuffer.readInt();
            if (size197 > 0) {
                for (let index198 = 0; index198 < size197; index198++) {
                    const result199 = byteBuffer.readInt();
                    const result200 = byteBuffer.readString();
                    result196.set(result199, result200);
                }
            }
            result193.add(result196);
        }
    }
    packet.sssss = result193;
    return packet;
};

export default ComplexObject;
