// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const CreateChannelRequest = function(channelBoxName, channelName, groupId) {
    this.channelBoxName = channelBoxName; // java.lang.String
    this.channelName = channelName; // java.lang.String
    this.groupId = groupId; // long
};

CreateChannelRequest.prototype.protocolId = function() {
    return 18302;
};

CreateChannelRequest.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeString(packet.channelBoxName);
    byteBuffer.writeString(packet.channelName);
    byteBuffer.writeLong(packet.groupId);
};

CreateChannelRequest.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new CreateChannelRequest();
    const result0 = byteBuffer.readString();
    packet.channelBoxName = result0;
    const result1 = byteBuffer.readString();
    packet.channelName = result1;
    const result2 = byteBuffer.readLong();
    packet.groupId = result2;
    return packet;
};

export default CreateChannelRequest;
