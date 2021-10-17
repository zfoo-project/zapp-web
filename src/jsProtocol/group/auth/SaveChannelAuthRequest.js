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

SaveChannelAuthRequest.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writePacketArray(packet.channelAuths, 18012);
    byteBuffer.writeLong(packet.channelId);
    byteBuffer.writeLong(packet.groupId);
};

SaveChannelAuthRequest.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new SaveChannelAuthRequest();
    const list0 = byteBuffer.readPacketArray(18012);
    packet.channelAuths = list0;
    const result1 = byteBuffer.readLong();
    packet.channelId = result1;
    const result2 = byteBuffer.readLong();
    packet.groupId = result2;
    return packet;
};

export default SaveChannelAuthRequest;
