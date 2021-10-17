// @author jaysunxiao
// @version 1.0
// @since 2019-11-14 10:54
const EditFriendMessageNotice = function(chatMessage, messageId, uidA, uidB) {
    this.chatMessage = chatMessage; // java.lang.String
    this.messageId = messageId; // long
    this.uidA = uidA; // long
    this.uidB = uidB; // long
};

EditFriendMessageNotice.prototype.protocolId = function() {
    return 16004;
};

EditFriendMessageNotice.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeString(packet.chatMessage);
    byteBuffer.writeLong(packet.messageId);
    byteBuffer.writeLong(packet.uidA);
    byteBuffer.writeLong(packet.uidB);
};

EditFriendMessageNotice.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new EditFriendMessageNotice();
    const result0 = byteBuffer.readString();
    packet.chatMessage = result0;
    const result1 = byteBuffer.readLong();
    packet.messageId = result1;
    const result2 = byteBuffer.readLong();
    packet.uidA = result2;
    const result3 = byteBuffer.readLong();
    packet.uidB = result3;
    return packet;
};

export default EditFriendMessageNotice;
