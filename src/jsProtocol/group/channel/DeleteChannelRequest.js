// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 15:33
const DeleteChannelRequest = function(channelId, groupId) {
    this.channelId = channelId; // long
    this.groupId = groupId; // long
};

DeleteChannelRequest.prototype.protocolId = function() {
    return 18306;
};

DeleteChannelRequest.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeLong(packet.channelId);
    byteBuffer.writeLong(packet.groupId);
};

DeleteChannelRequest.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new DeleteChannelRequest();
    const result0 = byteBuffer.readLong();
    packet.channelId = result0;
    const result1 = byteBuffer.readLong();
    packet.groupId = result1;
    return packet;
};

export default DeleteChannelRequest;
