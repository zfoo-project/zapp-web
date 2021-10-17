// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const ChangeGroupAdminRequest = function(adminId, groupId) {
    this.adminId = adminId; // long
    this.groupId = groupId; // long
};

ChangeGroupAdminRequest.prototype.protocolId = function() {
    return 18535;
};

ChangeGroupAdminRequest.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeLong(packet.adminId);
    byteBuffer.writeLong(packet.groupId);
};

ChangeGroupAdminRequest.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new ChangeGroupAdminRequest();
    const result0 = byteBuffer.readLong();
    packet.adminId = result0;
    const result1 = byteBuffer.readLong();
    packet.groupId = result1;
    return packet;
};

export default ChangeGroupAdminRequest;
