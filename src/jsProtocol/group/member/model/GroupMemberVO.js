// @author jaysunxiao
// @version 1.0
// @since 2020-08-05 12:35
const GroupMemberVO = function(groupAuthIds, userCache) {
    // 用户在群里的身份
    this.groupAuthIds = groupAuthIds; // java.util.List<java.lang.Long>
    // 用户的信息
    this.userCache = userCache; // com.zfoo.app.zapp.common.protocol.cache.model.UserCache
};

GroupMemberVO.prototype.protocolId = function() {
    return 18401;
};

GroupMemberVO.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeLongArray(packet.groupAuthIds);
    byteBuffer.writePacket(packet.userCache, 3000);
};

GroupMemberVO.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new GroupMemberVO();
    const list0 = byteBuffer.readLongArray();
    packet.groupAuthIds = list0;
    const result1 = byteBuffer.readPacket(3000);
    packet.userCache = result1;
    return packet;
};

export default GroupMemberVO;
