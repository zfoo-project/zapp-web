// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const DeleteGroupRequest = function(groupId) {
    this.groupId = groupId; // long
};

DeleteGroupRequest.prototype.protocolId = function() {
    return 18530;
};

DeleteGroupRequest.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeLong(packet.groupId);
};

DeleteGroupRequest.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new DeleteGroupRequest();
    const result0 = byteBuffer.readLong();
    packet.groupId = result0;
    return packet;
};

export default DeleteGroupRequest;
