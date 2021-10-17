// @author jaysunxiao
// @version 1.0
// @since 2020-05-08 14:20
const GroupMemberInfoRequest = function(groupId, members) {
    this.groupId = groupId; // long
    this.members = members; // java.util.List<java.lang.Long>
};

GroupMemberInfoRequest.prototype.protocolId = function() {
    return 18432;
};

GroupMemberInfoRequest.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeLong(packet.groupId);
    byteBuffer.writeLongArray(packet.members);
};

GroupMemberInfoRequest.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new GroupMemberInfoRequest();
    const result0 = byteBuffer.readLong();
    packet.groupId = result0;
    const list1 = byteBuffer.readLongArray();
    packet.members = list1;
    return packet;
};

export default GroupMemberInfoRequest;
