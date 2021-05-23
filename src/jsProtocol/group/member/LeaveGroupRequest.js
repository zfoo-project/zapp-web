// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const LeaveGroupRequest = function(groupId) {
    this.groupId = groupId; // long
};

LeaveGroupRequest.prototype.protocolId = function() {
    return 18422;
};

LeaveGroupRequest.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeLong(packet.groupId);
};

LeaveGroupRequest.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new LeaveGroupRequest();
    const result0 = byteBuffer.readLong();
    packet.groupId = result0;
    return packet;
};

export default LeaveGroupRequest;
