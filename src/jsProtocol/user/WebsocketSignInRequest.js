// @author jaysunxiao
// @version 1.0
// @since 2019-10-15 17:55
const WebsocketSignInRequest = function(token) {
    this.token = token; // java.lang.String
};

WebsocketSignInRequest.prototype.protocolId = function() {
    return 1000;
};

WebsocketSignInRequest.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeString(packet.token);
};

WebsocketSignInRequest.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new WebsocketSignInRequest();
    const result0 = byteBuffer.readString();
    packet.token = result0;
    return packet;
};

export default WebsocketSignInRequest;
