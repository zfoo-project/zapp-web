// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const SaveChannelBoxRequest = function(groupId, newChannelBoxName, oldChannelBoxName) {
    this.groupId = groupId; // long
    this.newChannelBoxName = newChannelBoxName; // java.lang.String
    this.oldChannelBoxName = oldChannelBoxName; // java.lang.String
};

SaveChannelBoxRequest.prototype.protocolId = function() {
    return 18310;
};

SaveChannelBoxRequest.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeLong(packet.groupId);
    byteBuffer.writeString(packet.newChannelBoxName);
    byteBuffer.writeString(packet.oldChannelBoxName);
};

SaveChannelBoxRequest.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new SaveChannelBoxRequest();
    const result0 = byteBuffer.readLong();
    packet.groupId = result0;
    const result1 = byteBuffer.readString();
    packet.newChannelBoxName = result1;
    const result2 = byteBuffer.readString();
    packet.oldChannelBoxName = result2;
    return packet;
};

export default SaveChannelBoxRequest;
