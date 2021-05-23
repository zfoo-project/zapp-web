// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const LeaveGroupResponse = function(groupId, groupName) {
    this.groupId = groupId; // long
    this.groupName = groupName; // java.lang.String
};

LeaveGroupResponse.prototype.protocolId = function() {
    return 18423;
};

LeaveGroupResponse.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeLong(packet.groupId);
    byteBuffer.writeString(packet.groupName);
};

LeaveGroupResponse.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new LeaveGroupResponse();
    const result0 = byteBuffer.readLong();
    packet.groupId = result0;
    const result1 = byteBuffer.readString();
    packet.groupName = result1;
    return packet;
};

export default LeaveGroupResponse;
