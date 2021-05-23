// 拒绝好友申请
//
// @author jaysunxiao
// @version 1.0
// @since 2019-11-14 10:54
const RejectFriendRequest = function(friendId, userId) {
    // 申请人用户的id
    this.friendId = friendId; // long
    this.userId = userId; // long
};

RejectFriendRequest.prototype.protocolId = function() {
    return 15102;
};

RejectFriendRequest.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeLong(packet.friendId);
    byteBuffer.writeLong(packet.userId);
};

RejectFriendRequest.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new RejectFriendRequest();
    const result0 = byteBuffer.readLong();
    packet.friendId = result0;
    const result1 = byteBuffer.readLong();
    packet.userId = result1;
    return packet;
};

export default RejectFriendRequest;
