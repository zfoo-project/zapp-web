// @author jaysunxiao
// @version 1.0
// @since 2020-05-04 19:59
const GroupMemberSimpleVO = function(groupAuthIds, groupId, groupTime, memberId) {
    this.groupAuthIds = groupAuthIds; // java.util.List<java.lang.Long>
    this.groupId = groupId; // long
    this.groupTime = groupTime; // com.zfoo.app.zapp.common.protocol.group.model.GroupTimeVO
    this.memberId = memberId; // long
};

GroupMemberSimpleVO.prototype.protocolId = function() {
    return 18013;
};

GroupMemberSimpleVO.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeLongArray(packet.groupAuthIds);
    byteBuffer.writeLong(packet.groupId);
    byteBuffer.writePacket(packet.groupTime, 18014);
    byteBuffer.writeLong(packet.memberId);
};

GroupMemberSimpleVO.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new GroupMemberSimpleVO();
    const list0 = byteBuffer.readLongArray();
    packet.groupAuthIds = list0;
    const result1 = byteBuffer.readLong();
    packet.groupId = result1;
    const result2 = byteBuffer.readPacket(18014);
    packet.groupTime = result2;
    const result3 = byteBuffer.readLong();
    packet.memberId = result3;
    return packet;
};

export default GroupMemberSimpleVO;
