// @author jaysunxiao
// @version 1.0
// @since 2019-11-13 18:41
const RejectFriendResponse = function(friendId) {
    this.friendId = friendId; // long
};

RejectFriendResponse.prototype.protocolId = function() {
    return 15103;
};

RejectFriendResponse.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeLong(packet.friendId);
};

RejectFriendResponse.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new RejectFriendResponse();
    const result0 = byteBuffer.readLong();
    packet.friendId = result0;
    return packet;
};

export default RejectFriendResponse;
