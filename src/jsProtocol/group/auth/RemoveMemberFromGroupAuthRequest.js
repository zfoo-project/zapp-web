// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const RemoveMemberFromGroupAuthRequest = function(groupAuthId, groupId, memberId) {
    this.groupAuthId = groupAuthId; // long
    this.groupId = groupId; // long
    this.memberId = memberId; // long
};

RemoveMemberFromGroupAuthRequest.prototype.protocolId = function() {
    return 18522;
};

RemoveMemberFromGroupAuthRequest.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeLong(packet.groupAuthId);
    byteBuffer.writeLong(packet.groupId);
    byteBuffer.writeLong(packet.memberId);
};

RemoveMemberFromGroupAuthRequest.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new RemoveMemberFromGroupAuthRequest();
    const result0 = byteBuffer.readLong();
    packet.groupAuthId = result0;
    const result1 = byteBuffer.readLong();
    packet.groupId = result1;
    const result2 = byteBuffer.readLong();
    packet.memberId = result2;
    return packet;
};

export default RemoveMemberFromGroupAuthRequest;
