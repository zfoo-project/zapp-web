// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 15:33
const CreateChannelBoxRequest = function(channelBoxName, groupId) {
    this.channelBoxName = channelBoxName; // java.lang.String
    this.groupId = groupId; // long
};

CreateChannelBoxRequest.prototype.protocolId = function() {
    return 18300;
};

CreateChannelBoxRequest.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeString(packet.channelBoxName);
    byteBuffer.writeLong(packet.groupId);
};

CreateChannelBoxRequest.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new CreateChannelBoxRequest();
    const result0 = byteBuffer.readString();
    packet.channelBoxName = result0;
    const result1 = byteBuffer.readLong();
    packet.groupId = result1;
    return packet;
};

export default CreateChannelBoxRequest;
