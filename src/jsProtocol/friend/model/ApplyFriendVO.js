// @author jaysunxiao
// @version 1.0
// @since 2019-12-11 10:05
const ApplyFriendVO = function(friendCache, friendId, status, timestamp) {
    this.friendCache = friendCache; // com.zfoo.app.zapp.common.protocol.cache.model.UserCache
    this.friendId = friendId; // long
    this.status = status; // int
    this.timestamp = timestamp; // long
};

ApplyFriendVO.prototype.protocolId = function() {
    return 15000;
};

ApplyFriendVO.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writePacket(packet.friendCache, 3000);
    byteBuffer.writeLong(packet.friendId);
    byteBuffer.writeInt(packet.status);
    byteBuffer.writeLong(packet.timestamp);
};

ApplyFriendVO.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new ApplyFriendVO();
    const result0 = byteBuffer.readPacket(3000);
    packet.friendCache = result0;
    const result1 = byteBuffer.readLong();
    packet.friendId = result1;
    const result2 = byteBuffer.readInt();
    packet.status = result2;
    const result3 = byteBuffer.readLong();
    packet.timestamp = result3;
    return packet;
};

export default ApplyFriendVO;
