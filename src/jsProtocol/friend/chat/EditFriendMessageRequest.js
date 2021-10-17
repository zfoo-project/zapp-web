// @author jaysunxiao
// @version 1.0
// @since 2019-11-14 10:54
const EditFriendMessageRequest = function(chatMessage, friendId, messageId, userId) {
    this.chatMessage = chatMessage; // java.lang.String
    this.friendId = friendId; // long
    this.messageId = messageId; // long
    this.userId = userId; // long
};

EditFriendMessageRequest.prototype.protocolId = function() {
    return 15208;
};

EditFriendMessageRequest.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeString(packet.chatMessage);
    byteBuffer.writeLong(packet.friendId);
    byteBuffer.writeLong(packet.messageId);
    byteBuffer.writeLong(packet.userId);
};

EditFriendMessageRequest.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new EditFriendMessageRequest();
    const result0 = byteBuffer.readString();
    packet.chatMessage = result0;
    const result1 = byteBuffer.readLong();
    packet.friendId = result1;
    const result2 = byteBuffer.readLong();
    packet.messageId = result2;
    const result3 = byteBuffer.readLong();
    packet.userId = result3;
    return packet;
};

export default EditFriendMessageRequest;
