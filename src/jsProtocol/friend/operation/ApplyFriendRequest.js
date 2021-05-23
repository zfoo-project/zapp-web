// @author jaysunxiao
// @version 1.0
// @since 2019-11-13 18:41
const ApplyFriendRequest = function(friendId, userId) {
    this.friendId = friendId; // long
    this.userId = userId; // long
};

ApplyFriendRequest.prototype.protocolId = function() {
    return 15100;
};

ApplyFriendRequest.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeLong(packet.friendId);
    byteBuffer.writeLong(packet.userId);
};

ApplyFriendRequest.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new ApplyFriendRequest();
    const result0 = byteBuffer.readLong();
    packet.friendId = result0;
    const result1 = byteBuffer.readLong();
    packet.userId = result1;
    return packet;
};

export default ApplyFriendRequest;
