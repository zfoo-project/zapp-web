// @author jaysunxiao
// @version 1.0
// @since 2019-10-15 17:55
const WebsocketSignOutRequest = function() {
};

WebsocketSignOutRequest.prototype.protocolId = function() {
    return 1002;
};

WebsocketSignOutRequest.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
};

WebsocketSignOutRequest.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new WebsocketSignOutRequest();
    return packet;
};

export default WebsocketSignOutRequest;
