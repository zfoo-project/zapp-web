// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const SaveGroupAuthResponse = function() {
};

SaveGroupAuthResponse.prototype.protocolId = function() {
    return 18503;
};

SaveGroupAuthResponse.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
};

SaveGroupAuthResponse.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new SaveGroupAuthResponse();
    return packet;
};

export default SaveGroupAuthResponse;
