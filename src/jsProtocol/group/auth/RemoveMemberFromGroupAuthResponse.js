// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const RemoveMemberFromGroupAuthResponse = function(groupAuthId, groupId, memberId) {
    this.groupAuthId = groupAuthId; // long
    this.groupId = groupId; // long
    this.memberId = memberId; // long
};

RemoveMemberFromGroupAuthResponse.prototype.protocolId = function() {
    return 18523;
};

RemoveMemberFromGroupAuthResponse.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeLong(packet.groupAuthId);
    byteBuffer.writeLong(packet.groupId);
    byteBuffer.writeLong(packet.memberId);
};

RemoveMemberFromGroupAuthResponse.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new RemoveMemberFromGroupAuthResponse();
    const result0 = byteBuffer.readLong();
    packet.groupAuthId = result0;
    const result1 = byteBuffer.readLong();
    packet.groupId = result1;
    const result2 = byteBuffer.readLong();
    packet.memberId = result2;
    return packet;
};

export default RemoveMemberFromGroupAuthResponse;
