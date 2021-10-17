// 好友聊天
//
// @author jaysunxiao
// @version 1.0
// @since 2019-11-14 10:54
const ReadFriendMessageResponse = function(friendId, readTime, refreshTime) {
    this.friendId = friendId; // long
    this.readTime = readTime; // long
    this.refreshTime = refreshTime; // long
};

ReadFriendMessageResponse.prototype.protocolId = function() {
    return 15203;
};

ReadFriendMessageResponse.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeLong(packet.friendId);
    byteBuffer.writeLong(packet.readTime);
    byteBuffer.writeLong(packet.refreshTime);
};

ReadFriendMessageResponse.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new ReadFriendMessageResponse();
    const result0 = byteBuffer.readLong();
    packet.friendId = result0;
    const result1 = byteBuffer.readLong();
    packet.readTime = result1;
    const result2 = byteBuffer.readLong();
    packet.refreshTime = result2;
    return packet;
};

export default ReadFriendMessageResponse;
