// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const JoinGroupRequest = function(inviteCode) {
    this.inviteCode = inviteCode; // java.lang.String
};

JoinGroupRequest.prototype.protocolId = function() {
    return 18412;
};

JoinGroupRequest.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeString(packet.inviteCode);
};

JoinGroupRequest.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new JoinGroupRequest();
    const result0 = byteBuffer.readString();
    packet.inviteCode = result0;
    return packet;
};

export default JoinGroupRequest;
