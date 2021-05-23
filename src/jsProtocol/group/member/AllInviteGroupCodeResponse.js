import ProtocolManager from '../../ProtocolManager.js';
// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const AllInviteGroupCodeResponse = function(inviteCodes) {
    this.inviteCodes = inviteCodes; // java.util.List<com.zfoo.app.zapp.common.protocol.group.member.model.InviteCodeVO>
};

AllInviteGroupCodeResponse.prototype.protocolId = function() {
    return 18425;
};

AllInviteGroupCodeResponse.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    if (packet.inviteCodes === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.inviteCodes.length);
        packet.inviteCodes.forEach(element0 => {
            ProtocolManager.getProtocol(18400).writeObject(byteBuffer, element0);
        });
    }
};

AllInviteGroupCodeResponse.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new AllInviteGroupCodeResponse();
    const result1 = [];
    const size2 = byteBuffer.readInt();
    if (size2 > 0) {
        for (let index3 = 0; index3 < size2; index3++) {
            const result4 = ProtocolManager.getProtocol(18400).readObject(byteBuffer);
            result1.push(result4);
        }
    }
    packet.inviteCodes = result1;
    return packet;
};

export default AllInviteGroupCodeResponse;
