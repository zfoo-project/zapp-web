// @author jaysunxiao
// @version 1.0
// @since 2019-11-14 10:54
const DeleteFriendRequest = function(friendId, userId) {
    // 目标需要删除的用户id
    this.friendId = friendId; // long
    // 用户的id
    this.userId = userId; // long
};

DeleteFriendRequest.prototype.protocolId = function() {
    return 15106;
};

DeleteFriendRequest.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeLong(packet.friendId);
    byteBuffer.writeLong(packet.userId);
};

DeleteFriendRequest.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new DeleteFriendRequest();
    const result0 = byteBuffer.readLong();
    packet.friendId = result0;
    const result1 = byteBuffer.readLong();
    packet.userId = result1;
    return packet;
};

export default DeleteFriendRequest;
