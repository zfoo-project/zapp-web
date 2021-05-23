import ProtocolManager from '../../ProtocolManager.js';
// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const SaveGroupAuthRequest = function(groupAuths, groupId) {
    this.groupAuths = groupAuths; // java.util.List<com.zfoo.app.zapp.common.protocol.group.model.GroupAuthVO>
    this.groupId = groupId; // long
};

SaveGroupAuthRequest.prototype.protocolId = function() {
    return 18502;
};

SaveGroupAuthRequest.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    if (packet.groupAuths === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.groupAuths.length);
        packet.groupAuths.forEach(element0 => {
            ProtocolManager.getProtocol(18001).writeObject(byteBuffer, element0);
        });
    }
    byteBuffer.writeLong(packet.groupId);
};

SaveGroupAuthRequest.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new SaveGroupAuthRequest();
    const result1 = [];
    const size2 = byteBuffer.readInt();
    if (size2 > 0) {
        for (let index3 = 0; index3 < size2; index3++) {
            const result4 = ProtocolManager.getProtocol(18001).readObject(byteBuffer);
            result1.push(result4);
        }
    }
    packet.groupAuths = result1;
    const result5 = byteBuffer.readLong();
    packet.groupId = result5;
    return packet;
};

export default SaveGroupAuthRequest;
