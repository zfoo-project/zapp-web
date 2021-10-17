// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const LeaveGroupRequest = function(groupId) {
    this.groupId = groupId; // long
};

LeaveGroupRequest.prototype.protocolId = function() {
    return 18422;
};

LeaveGroupRequest.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeLong(packet.groupId);
};

LeaveGroupRequest.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new LeaveGroupRequest();
    const result0 = byteBuffer.readLong();
    packet.groupId = result0;
    return packet;
};

export default LeaveGroupRequest;
