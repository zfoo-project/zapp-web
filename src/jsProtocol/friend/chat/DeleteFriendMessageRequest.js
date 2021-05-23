// @author jaysunxiao
// @version 1.0
// @since 2019-11-14 10:54
const DeleteFriendMessageRequest = function(friendId, messageId, userId) {
    this.friendId = friendId; // long
    this.messageId = messageId; // long
    this.userId = userId; // long
};

DeleteFriendMessageRequest.prototype.protocolId = function() {
    return 15206;
};

DeleteFriendMessageRequest.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeLong(packet.friendId);
    byteBuffer.writeLong(packet.messageId);
    byteBuffer.writeLong(packet.userId);
};

DeleteFriendMessageRequest.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new DeleteFriendMessageRequest();
    const result0 = byteBuffer.readLong();
    packet.friendId = result0;
    const result1 = byteBuffer.readLong();
    packet.messageId = result1;
    const result2 = byteBuffer.readLong();
    packet.userId = result2;
    return packet;
};

export default DeleteFriendMessageRequest;
