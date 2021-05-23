import ProtocolManager from '../../ProtocolManager.js';
// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const SaveChannelAuthRequest = function(channelAuths, channelId, groupId) {
    this.channelAuths = channelAuths; // java.util.List<com.zfoo.app.zapp.common.protocol.group.model.ChannelAuthVO>
    this.channelId = channelId; // long
    this.groupId = groupId; // long
};

SaveChannelAuthRequest.prototype.protocolId = function() {
    return 18512;
};

SaveChannelAuthRequest.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    if (packet.channelAuths === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.channelAuths.length);
        packet.channelAuths.forEach(element0 => {
            ProtocolManager.getProtocol(18012).writeObject(byteBuffer, element0);
        });
    }
    byteBuffer.writeLong(packet.channelId);
    byteBuffer.writeLong(packet.groupId);
};

SaveChannelAuthRequest.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new SaveChannelAuthRequest();
    const result1 = [];
    const size2 = byteBuffer.readInt();
    if (size2 > 0) {
        for (let index3 = 0; index3 < size2; index3++) {
            const result4 = ProtocolManager.getProtocol(18012).readObject(byteBuffer);
            result1.push(result4);
        }
    }
    packet.channelAuths = result1;
    const result5 = byteBuffer.readLong();
    packet.channelId = result5;
    const result6 = byteBuffer.readLong();
    packet.groupId = result6;
    return packet;
};

export default SaveChannelAuthRequest;
