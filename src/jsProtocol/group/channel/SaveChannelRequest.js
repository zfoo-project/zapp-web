// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const SaveChannelRequest = function(channelId, channelName, groupId) {
    this.channelId = channelId; // long
    this.channelName = channelName; // java.lang.String
    this.groupId = groupId; // long
};

SaveChannelRequest.prototype.protocolId = function() {
    return 18308;
};

SaveChannelRequest.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeLong(packet.channelId);
    byteBuffer.writeString(packet.channelName);
    byteBuffer.writeLong(packet.groupId);
};

SaveChannelRequest.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new SaveChannelRequest();
    const result0 = byteBuffer.readLong();
    packet.channelId = result0;
    const result1 = byteBuffer.readString();
    packet.channelName = result1;
    const result2 = byteBuffer.readLong();
    packet.groupId = result2;
    return packet;
};

export default SaveChannelRequest;
