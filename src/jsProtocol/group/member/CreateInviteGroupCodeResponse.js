// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const CreateInviteGroupCodeResponse = function(inviteCodes) {
    this.inviteCodes = inviteCodes; // java.util.List<com.zfoo.app.zapp.common.protocol.group.member.model.InviteCodeVO>
};

CreateInviteGroupCodeResponse.prototype.protocolId = function() {
    return 18411;
};

CreateInviteGroupCodeResponse.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writePacketArray(packet.inviteCodes, 18400);
};

CreateInviteGroupCodeResponse.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new CreateInviteGroupCodeResponse();
    const list0 = byteBuffer.readPacketArray(18400);
    packet.inviteCodes = list0;
    return packet;
};

export default CreateInviteGroupCodeResponse;
