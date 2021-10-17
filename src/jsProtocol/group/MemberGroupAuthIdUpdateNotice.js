// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const MemberGroupAuthIdUpdateNotice = function(groupAuthIds, groupId, memberId) {
    this.groupAuthIds = groupAuthIds; // java.util.List<java.lang.Long>
    this.groupId = groupId; // long
    this.memberId = memberId; // long
};

MemberGroupAuthIdUpdateNotice.prototype.protocolId = function() {
    return 19002;
};

MemberGroupAuthIdUpdateNotice.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeLongArray(packet.groupAuthIds);
    byteBuffer.writeLong(packet.groupId);
    byteBuffer.writeLong(packet.memberId);
};

MemberGroupAuthIdUpdateNotice.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new MemberGroupAuthIdUpdateNotice();
    const list0 = byteBuffer.readLongArray();
    packet.groupAuthIds = list0;
    const result1 = byteBuffer.readLong();
    packet.groupId = result1;
    const result2 = byteBuffer.readLong();
    packet.memberId = result2;
    return packet;
};

export default MemberGroupAuthIdUpdateNotice;
