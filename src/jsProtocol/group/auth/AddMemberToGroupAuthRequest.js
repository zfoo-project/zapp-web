// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const AddMemberToGroupAuthRequest = function(groupAuthId, groupId, memberId) {
    this.groupAuthId = groupAuthId; // long
    this.groupId = groupId; // long
    this.memberId = memberId; // long
};

AddMemberToGroupAuthRequest.prototype.protocolId = function() {
    return 18520;
};

AddMemberToGroupAuthRequest.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeLong(packet.groupAuthId);
    byteBuffer.writeLong(packet.groupId);
    byteBuffer.writeLong(packet.memberId);
};

AddMemberToGroupAuthRequest.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new AddMemberToGroupAuthRequest();
    const result0 = byteBuffer.readLong();
    packet.groupAuthId = result0;
    const result1 = byteBuffer.readLong();
    packet.groupId = result1;
    const result2 = byteBuffer.readLong();
    packet.memberId = result2;
    return packet;
};

export default AddMemberToGroupAuthRequest;
