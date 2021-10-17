// @author jaysunxiao
// @version 1.0
// @since 2019-10-15 17:55
const WebsocketSignOutResponse = function(result) {
    this.result = result; // int
};

WebsocketSignOutResponse.prototype.protocolId = function() {
    return 1003;
};

WebsocketSignOutResponse.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeInt(packet.result);
};

WebsocketSignOutResponse.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new WebsocketSignOutResponse();
    const result0 = byteBuffer.readInt();
    packet.result = result0;
    return packet;
};

export default WebsocketSignOutResponse;
