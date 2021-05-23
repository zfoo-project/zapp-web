// @author jaysunxiao
// @version 1.0
// @since 2019-11-13 18:41
const DeleteFriendResponse = function(friendId) {
    this.friendId = friendId; // long
};

DeleteFriendResponse.prototype.protocolId = function() {
    return 15107;
};

DeleteFriendResponse.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeLong(packet.friendId);
};

DeleteFriendResponse.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new DeleteFriendResponse();
    const result0 = byteBuffer.readLong();
    packet.friendId = result0;
    return packet;
};

export default DeleteFriendResponse;
