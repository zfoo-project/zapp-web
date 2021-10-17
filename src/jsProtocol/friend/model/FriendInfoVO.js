// @author jaysunxiao
// @version 1.0
// @since 2019-12-11 10:05
const FriendInfoVO = function(friendId, readTime, refreshTime, tag) {
    this.friendId = friendId; // long
    this.readTime = readTime; // long
    this.refreshTime = refreshTime; // long
    this.tag = tag; // java.lang.String
};

FriendInfoVO.prototype.protocolId = function() {
    return 15001;
};

FriendInfoVO.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeLong(packet.friendId);
    byteBuffer.writeLong(packet.readTime);
    byteBuffer.writeLong(packet.refreshTime);
    byteBuffer.writeString(packet.tag);
};

FriendInfoVO.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new FriendInfoVO();
    const result0 = byteBuffer.readLong();
    packet.friendId = result0;
    const result1 = byteBuffer.readLong();
    packet.readTime = result1;
    const result2 = byteBuffer.readLong();
    packet.refreshTime = result2;
    const result3 = byteBuffer.readString();
    packet.tag = result3;
    return packet;
};

export default FriendInfoVO;
