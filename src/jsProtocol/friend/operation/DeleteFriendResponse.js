// @author jaysunxiao
// @version 1.0
// @since 2019-11-13 18:41
const DeleteFriendResponse = function(friendId) {
    this.friendId = friendId; // long
};

DeleteFriendResponse.prototype.protocolId = function() {
    return 15107;
};

DeleteFriendResponse.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeLong(packet.friendId);
};

DeleteFriendResponse.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new DeleteFriendResponse();
    const result0 = byteBuffer.readLong();
    packet.friendId = result0;
    return packet;
};

export default DeleteFriendResponse;
