// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const SaveGroupBackgroundRequest = function(background, groupId) {
    this.background = background; // java.lang.String
    this.groupId = groupId; // long
};

SaveGroupBackgroundRequest.prototype.protocolId = function() {
    return 18202;
};

SaveGroupBackgroundRequest.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeString(packet.background);
    byteBuffer.writeLong(packet.groupId);
};

SaveGroupBackgroundRequest.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new SaveGroupBackgroundRequest();
    const result0 = byteBuffer.readString();
    packet.background = result0;
    const result1 = byteBuffer.readLong();
    packet.groupId = result1;
    return packet;
};

export default SaveGroupBackgroundRequest;
