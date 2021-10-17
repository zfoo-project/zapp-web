// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const DeleteInviteGroupCodeRequest = function(inviteCode) {
    this.inviteCode = inviteCode; // java.lang.String
};

DeleteInviteGroupCodeRequest.prototype.protocolId = function() {
    return 18420;
};

DeleteInviteGroupCodeRequest.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeString(packet.inviteCode);
};

DeleteInviteGroupCodeRequest.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new DeleteInviteGroupCodeRequest();
    const result0 = byteBuffer.readString();
    packet.inviteCode = result0;
    return packet;
};

export default DeleteInviteGroupCodeRequest;
