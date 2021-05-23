// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const AllInviteGroupCodeRequest = function(groupId) {
    this.groupId = groupId; // long
};

AllInviteGroupCodeRequest.prototype.protocolId = function() {
    return 18424;
};

AllInviteGroupCodeRequest.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeLong(packet.groupId);
};

AllInviteGroupCodeRequest.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new AllInviteGroupCodeRequest();
    const result0 = byteBuffer.readLong();
    packet.groupId = result0;
    return packet;
};

export default AllInviteGroupCodeRequest;
