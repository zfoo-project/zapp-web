import ProtocolManager from '../ProtocolManager.js';
// @author jaysunxiao
// @version 3.0
const ObjectA = function(a, m, objectB) {
    this.a = a; // int
    this.m = m; // java.util.Map<java.lang.Integer, java.lang.String>
    this.objectB = objectB; // com.zfoo.protocol.packet.ObjectB
};

ObjectA.prototype.protocolId = function() {
    return 102;
};

ObjectA.write = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeInt(packet.a);
    if (packet.m === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.m.size);
        packet.m.forEach((value1, key0) => {
            byteBuffer.writeInt(key0);
            byteBuffer.writeString(value1);
        });
    }
    ProtocolManager.getProtocol(103).write(byteBuffer, packet.objectB);
};

ObjectA.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new ObjectA();
    const result2 = byteBuffer.readInt();
    packet.a = result2;
    const result3 = new Map();
    const size4 = byteBuffer.readInt();
    if (size4 > 0) {
        for (let index5 = 0; index5 < size4; index5++) {
            const result6 = byteBuffer.readInt();
            const result7 = byteBuffer.readString();
            result3.set(result6, result7);
        }
    }
    packet.m = result3;
    const result8 = ProtocolManager.getProtocol(103).read(byteBuffer);
    packet.objectB = result8;
    return packet;
};

export default ObjectA;
