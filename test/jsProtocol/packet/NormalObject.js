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
    byteBuffer.writeIntArray(packet.l);
    byteBuffer.writeLongArray(packet.ll);
    byteBuffer.writePacketArray(packet.lll, 102);
    byteBuffer.writeStringArray(packet.llll);
    if (packet.m === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.m.size);
        packet.m.forEach((value1, key0) => {
            byteBuffer.writeInt(key0);
            byteBuffer.writeString(value1);
        });
    }
    if (packet.mm === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.mm.size);
        packet.mm.forEach((value3, key2) => {
            byteBuffer.writeInt(key2);
            ProtocolManager.getProtocol(102).write(byteBuffer, value3);
        });
    }
    if (packet.s === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.s.size);
        packet.s.forEach(element4 => {
            byteBuffer.writeInt(element4);
        });
    }
    if (packet.ssss === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.ssss.size);
        packet.ssss.forEach(element5 => {
            byteBuffer.writeString(element5);
        });
    }
};

NormalObject.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new NormalObject();
    const result6 = byteBuffer.readByte();
    packet.a = result6;
    const array7 = byteBuffer.readByteArray();
    packet.aaa = array7;
    const result8 = byteBuffer.readShort();
    packet.b = result8;
    const result9 = byteBuffer.readInt();
    packet.c = result9;
    const result10 = byteBuffer.readLong();
    packet.d = result10;
    const result11 = byteBuffer.readFloat();
    packet.e = result11;
    const result12 = byteBuffer.readDouble();
    packet.f = result12;
    const result13 = byteBuffer.readBoolean(); 
    packet.g = result13;
    const result14 = byteBuffer.readString();
    packet.jj = result14;
    const result15 = ProtocolManager.getProtocol(102).read(byteBuffer);
    packet.kk = result15;
    const list16 = byteBuffer.readIntArray();
    packet.l = list16;
    const list17 = byteBuffer.readLongArray();
    packet.ll = list17;
    const list18 = byteBuffer.readPacketArray(102);
    packet.lll = list18;
    const list19 = byteBuffer.readStringArray();
    packet.llll = list19;
    const result20 = new Map();
    const size21 = byteBuffer.readInt();
    if (size21 > 0) {
        for (let index22 = 0; index22 < size21; index22++) {
            const result23 = byteBuffer.readInt();
            const result24 = byteBuffer.readString();
            result20.set(result23, result24);
        }
    }
    packet.m = result20;
    const result25 = new Map();
    const size26 = byteBuffer.readInt();
    if (size26 > 0) {
        for (let index27 = 0; index27 < size26; index27++) {
            const result28 = byteBuffer.readInt();
            const result29 = ProtocolManager.getProtocol(102).read(byteBuffer);
            result25.set(result28, result29);
        }
    }
    packet.mm = result25;
    const result30 = new Set();
    const size31 = byteBuffer.readInt();
    if (size31 > 0) {
        for (let index32 = 0; index32 < size31; index32++) {
            const result33 = byteBuffer.readInt();
            result30.add(result33);
        }
    }
    packet.s = result30;
    const result34 = new Set();
    const size35 = byteBuffer.readInt();
    if (size35 > 0) {
        for (let index36 = 0; index36 < size35; index36++) {
            const result37 = byteBuffer.readString();
            result34.add(result37);
        }
    }
    packet.ssss = result34;
    return packet;
};

export default NormalObject;
