import ProtocolManager from '../ProtocolManager.js';
// @author jaysunxiao
// @version 3.0
const NormalObject = function(a, aaa, b, c, d, e, f, g, jj, kk, l, ll, lll, llll, m, mm, s, ssss) {
    this.a = a; // byte
    this.aaa = aaa; // byte[]
    this.b = b; // short
    this.c = c; // int
    this.d = d; // long
    this.e = e; // float
    this.f = f; // double
    this.g = g; // boolean
    this.jj = jj; // java.lang.String
    this.kk = kk; // com.zfoo.protocol.packet.ObjectA
    this.l = l; // java.util.List<java.lang.Integer>
    this.ll = ll; // java.util.List<java.lang.Long>
    this.lll = lll; // java.util.List<com.zfoo.protocol.packet.ObjectA>
    this.llll = llll; // java.util.List<java.lang.String>
    this.m = m; // java.util.Map<java.lang.Integer, java.lang.String>
    this.mm = mm; // java.util.Map<java.lang.Integer, com.zfoo.protocol.packet.ObjectA>
    this.s = s; // java.util.Set<java.lang.Integer>
    this.ssss = ssss; // java.util.Set<java.lang.String>
};

NormalObject.prototype.protocolId = function() {
    return 101;
};

NormalObject.write = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeByte(packet.a);
    byteBuffer.writeByteArray(packet.aaa);
    byteBuffer.writeShort(packet.b);
    byteBuffer.writeInt(packet.c);
    byteBuffer.writeLong(packet.d);
    byteBuffer.writeFloat(packet.e);
    byteBuffer.writeDouble(packet.f);
    byteBuffer.writeBoolean(packet.g);
    byteBuffer.writeString(packet.jj);
    ProtocolManager.getProtocol(102).write(byteBuffer, packet.kk);
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
            byteBuffer.writeLong(element1);
        });
    }
    if (packet.lll === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.lll.length);
        packet.lll.forEach(element2 => {
            ProtocolManager.getProtocol(102).write(byteBuffer, element2);
        });
    }
    if (packet.llll === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.llll.length);
        packet.llll.forEach(element3 => {
            byteBuffer.writeString(element3);
        });
    }
    if (packet.m === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.m.size);
        packet.m.forEach((value5, key4) => {
            byteBuffer.writeInt(key4);
            byteBuffer.writeString(value5);
        });
    }
    if (packet.mm === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.mm.size);
        packet.mm.forEach((value7, key6) => {
            byteBuffer.writeInt(key6);
            ProtocolManager.getProtocol(102).write(byteBuffer, value7);
        });
    }
    if (packet.s === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.s.size);
        packet.s.forEach(element8 => {
            byteBuffer.writeInt(element8);
        });
    }
    if (packet.ssss === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.ssss.size);
        packet.ssss.forEach(element9 => {
            byteBuffer.writeString(element9);
        });
    }
};

NormalObject.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new NormalObject();
    const result10 = byteBuffer.readByte();
    packet.a = result10;
    const array11 = byteBuffer.readByteArray();
    packet.aaa = array11;
    const result12 = byteBuffer.readShort();
    packet.b = result12;
    const result13 = byteBuffer.readInt();
    packet.c = result13;
    const result14 = byteBuffer.readLong();
    packet.d = result14;
    const result15 = byteBuffer.readFloat();
    packet.e = result15;
    const result16 = byteBuffer.readDouble();
    packet.f = result16;
    const result17 = byteBuffer.readBoolean(); 
    packet.g = result17;
    const result18 = byteBuffer.readString();
    packet.jj = result18;
    const result19 = ProtocolManager.getProtocol(102).read(byteBuffer);
    packet.kk = result19;
    const result20 = [];
    const size21 = byteBuffer.readInt();
    if (size21 > 0) {
        for (let index22 = 0; index22 < size21; index22++) {
            const result23 = byteBuffer.readInt();
            result20.push(result23);
        }
    }
    packet.l = result20;
    const result24 = [];
    const size25 = byteBuffer.readInt();
    if (size25 > 0) {
        for (let index26 = 0; index26 < size25; index26++) {
            const result27 = byteBuffer.readLong();
            result24.push(result27);
        }
    }
    packet.ll = result24;
    const result28 = [];
    const size29 = byteBuffer.readInt();
    if (size29 > 0) {
        for (let index30 = 0; index30 < size29; index30++) {
            const result31 = ProtocolManager.getProtocol(102).read(byteBuffer);
            result28.push(result31);
        }
    }
    packet.lll = result28;
    const result32 = [];
    const size33 = byteBuffer.readInt();
    if (size33 > 0) {
        for (let index34 = 0; index34 < size33; index34++) {
            const result35 = byteBuffer.readString();
            result32.push(result35);
        }
    }
    packet.llll = result32;
    const result36 = new Map();
    const size37 = byteBuffer.readInt();
    if (size37 > 0) {
        for (let index38 = 0; index38 < size37; index38++) {
            const result39 = byteBuffer.readInt();
            const result40 = byteBuffer.readString();
            result36.set(result39, result40);
        }
    }
    packet.m = result36;
    const result41 = new Map();
    const size42 = byteBuffer.readInt();
    if (size42 > 0) {
        for (let index43 = 0; index43 < size42; index43++) {
            const result44 = byteBuffer.readInt();
            const result45 = ProtocolManager.getProtocol(102).read(byteBuffer);
            result41.set(result44, result45);
        }
    }
    packet.mm = result41;
    const result46 = new Set();
    const size47 = byteBuffer.readInt();
    if (size47 > 0) {
        for (let index48 = 0; index48 < size47; index48++) {
            const result49 = byteBuffer.readInt();
            result46.add(result49);
        }
    }
    packet.s = result46;
    const result50 = new Set();
    const size51 = byteBuffer.readInt();
    if (size51 > 0) {
        for (let index52 = 0; index52 < size51; index52++) {
            const result53 = byteBuffer.readString();
            result50.add(result53);
        }
    }
    packet.ssss = result50;
    return packet;
};

export default NormalObject;
