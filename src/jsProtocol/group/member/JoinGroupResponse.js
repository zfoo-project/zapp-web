// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const JoinGroupResponse = function() {
};

JoinGroupResponse.prototype.protocolId = function() {
    return 18413;
};

JoinGroupResponse.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
};

JoinGroupResponse.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new JoinGroupResponse();
    return packet;
};

export default JoinGroupResponse;
