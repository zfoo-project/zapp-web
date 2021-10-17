// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 15:33
const DeleteChannelBoxRequest = function(channelBoxName, groupId) {
    this.channelBoxName = channelBoxName; // java.lang.String
    this.groupId = groupId; // long
};

DeleteChannelBoxRequest.prototype.protocolId = function() {
    return 18304;
};

DeleteChannelBoxRequest.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeString(packet.channelBoxName);
    byteBuffer.writeLong(packet.groupId);
};

DeleteChannelBoxRequest.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new DeleteChannelBoxRequest();
    const result0 = byteBuffer.readString();
    packet.channelBoxName = result0;
    const result1 = byteBuffer.readLong();
    packet.groupId = result1;
    return packet;
};

export default DeleteChannelBoxRequest;
