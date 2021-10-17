// @author jaysunxiao
// @version 1.0
// @since 2019-11-13 18:41
const RejectFriendResponse = function(friendId) {
    this.friendId = friendId; // long
};

RejectFriendResponse.prototype.protocolId = function() {
    return 15103;
};

RejectFriendResponse.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeLong(packet.friendId);
};

RejectFriendResponse.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new RejectFriendResponse();
    const result0 = byteBuffer.readLong();
    packet.friendId = result0;
    return packet;
};

export default RejectFriendResponse;
