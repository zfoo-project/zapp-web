// 好友聊天
//
// @author jaysunxiao
// @version 1.0
// @since 2019-11-14 10:54
const FriendHistoryMessageRequest = function(friendId, lastMessageId, userId) {
    this.friendId = friendId; // long
    // 最老消息的id
    this.lastMessageId = lastMessageId; // long
    this.userId = userId; // long
};

FriendHistoryMessageRequest.prototype.protocolId = function() {
    return 15204;
};

FriendHistoryMessageRequest.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeLong(packet.friendId);
    byteBuffer.writeLong(packet.lastMessageId);
    byteBuffer.writeLong(packet.userId);
};

FriendHistoryMessageRequest.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new FriendHistoryMessageRequest();
    const result0 = byteBuffer.readLong();
    packet.friendId = result0;
    const result1 = byteBuffer.readLong();
    packet.lastMessageId = result1;
    const result2 = byteBuffer.readLong();
    packet.userId = result2;
    return packet;
};

export default FriendHistoryMessageRequest;
