// @author jaysunxiao
// @version 1.0
// @since 2020-05-08 14:20
const GroupMemberListRequest = function(groupId, page) {
    this.groupId = groupId; // long
    this.page = page; // int
};

GroupMemberListRequest.prototype.protocolId = function() {
    return 18430;
};

GroupMemberListRequest.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeLong(packet.groupId);
    byteBuffer.writeInt(packet.page);
};

GroupMemberListRequest.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new GroupMemberListRequest();
    const result0 = byteBuffer.readLong();
    packet.groupId = result0;
    const result1 = byteBuffer.readInt();
    packet.page = result1;
    return packet;
};

export default GroupMemberListRequest;
