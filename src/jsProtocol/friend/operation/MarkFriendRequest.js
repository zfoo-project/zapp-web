// @author jaysunxiao
// @version 1.0
// @since 2019-11-13 18:41
const MarkFriendRequest = function(friendId, tag, userId) {
    // 好友id
    this.friendId = friendId; // long
    this.tag = tag; // java.lang.String
    this.userId = userId; // long
};

MarkFriendRequest.prototype.protocolId = function() {
    return 15112;
};

MarkFriendRequest.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeLong(packet.friendId);
    byteBuffer.writeString(packet.tag);
    byteBuffer.writeLong(packet.userId);
};

MarkFriendRequest.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new MarkFriendRequest();
    const result0 = byteBuffer.readLong();
    packet.friendId = result0;
    const result1 = byteBuffer.readString();
    packet.tag = result1;
    const result2 = byteBuffer.readLong();
    packet.userId = result2;
    return packet;
};

export default MarkFriendRequest;
