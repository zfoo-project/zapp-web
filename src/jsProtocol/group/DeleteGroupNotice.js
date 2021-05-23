// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const DeleteGroupNotice = function(groupId, groupName) {
    this.groupId = groupId; // long
    this.groupName = groupName; // java.lang.String
};

DeleteGroupNotice.prototype.protocolId = function() {
    return 19000;
};

DeleteGroupNotice.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeLong(packet.groupId);
    byteBuffer.writeString(packet.groupName);
};

DeleteGroupNotice.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new DeleteGroupNotice();
    const result0 = byteBuffer.readLong();
    packet.groupId = result0;
    const result1 = byteBuffer.readString();
    packet.groupName = result1;
    return packet;
};

export default DeleteGroupNotice;
