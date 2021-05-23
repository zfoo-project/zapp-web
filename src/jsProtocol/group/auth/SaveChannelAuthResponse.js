// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const SaveChannelAuthResponse = function() {
};

SaveChannelAuthResponse.prototype.protocolId = function() {
    return 18513;
};

SaveChannelAuthResponse.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
};

SaveChannelAuthResponse.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new SaveChannelAuthResponse();
    return packet;
};

export default SaveChannelAuthResponse;
