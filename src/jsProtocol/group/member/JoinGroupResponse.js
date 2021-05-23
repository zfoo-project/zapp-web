// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const JoinGroupResponse = function() {
};

JoinGroupResponse.prototype.protocolId = function() {
    return 18413;
};

JoinGroupResponse.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
};

JoinGroupResponse.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new JoinGroupResponse();
    return packet;
};

export default JoinGroupResponse;
