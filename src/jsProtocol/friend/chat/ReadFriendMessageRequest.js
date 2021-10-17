// 好友聊天
//
// @author jaysunxiao
// @version 1.0
// @since 2019-11-14 10:54
const ReadFriendMessageRequest = function(friendId, userId) {
    this.friendId = friendId; // long
    this.userId = userId; // long
};

ReadFriendMessageRequest.prototype.protocolId = function() {
    return 15202;
};

ReadFriendMessageRequest.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeLong(packet.friendId);
    byteBuffer.writeLong(packet.userId);
};

ReadFriendMessageRequest.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new ReadFriendMessageRequest();
    const result0 = byteBuffer.readLong();
    packet.friendId = result0;
    const result1 = byteBuffer.readLong();
    packet.userId = result1;
    return packet;
};

export default ReadFriendMessageRequest;
