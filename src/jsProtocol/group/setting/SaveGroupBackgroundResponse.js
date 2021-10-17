// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const SaveGroupBackgroundResponse = function(background, groupId) {
    this.background = background; // java.lang.String
    this.groupId = groupId; // long
};

SaveGroupBackgroundResponse.prototype.protocolId = function() {
    return 18203;
};

SaveGroupBackgroundResponse.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeString(packet.background);
    byteBuffer.writeLong(packet.groupId);
};

SaveGroupBackgroundResponse.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new SaveGroupBackgroundResponse();
    const result0 = byteBuffer.readString();
    packet.background = result0;
    const result1 = byteBuffer.readLong();
    packet.groupId = result1;
    return packet;
};

export default SaveGroupBackgroundResponse;
