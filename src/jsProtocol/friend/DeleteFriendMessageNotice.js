// @author jaysunxiao
// @version 1.0
// @since 2019-11-14 10:54
const DeleteFriendMessageNotice = function(messageId, uidA, uidB) {
    this.messageId = messageId; // long
    this.uidA = uidA; // long
    this.uidB = uidB; // long
};

DeleteFriendMessageNotice.prototype.protocolId = function() {
    return 16003;
};

DeleteFriendMessageNotice.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeLong(packet.messageId);
    byteBuffer.writeLong(packet.uidA);
    byteBuffer.writeLong(packet.uidB);
};

DeleteFriendMessageNotice.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new DeleteFriendMessageNotice();
    const result0 = byteBuffer.readLong();
    packet.messageId = result0;
    const result1 = byteBuffer.readLong();
    packet.uidA = result1;
    const result2 = byteBuffer.readLong();
    packet.uidB = result2;
    return packet;
};

export default DeleteFriendMessageNotice;
