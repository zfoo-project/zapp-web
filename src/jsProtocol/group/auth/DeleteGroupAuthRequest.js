// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const DeleteGroupAuthRequest = function(groupAuthId, groupId) {
    this.groupAuthId = groupAuthId; // long
    this.groupId = groupId; // long
};

DeleteGroupAuthRequest.prototype.protocolId = function() {
    return 18501;
};

DeleteGroupAuthRequest.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeLong(packet.groupAuthId);
    byteBuffer.writeLong(packet.groupId);
};

DeleteGroupAuthRequest.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new DeleteGroupAuthRequest();
    const result0 = byteBuffer.readLong();
    packet.groupAuthId = result0;
    const result1 = byteBuffer.readLong();
    packet.groupId = result1;
    return packet;
};

export default DeleteGroupAuthRequest;
