// @author jaysunxiao
// @version 1.0
// @since 2019-11-13 18:41
const BlacklistResponse = function(userCache) {
    this.userCache = userCache; // com.zfoo.app.zapp.common.protocol.cache.model.UserCache
};

BlacklistResponse.prototype.protocolId = function() {
    return 15109;
};

BlacklistResponse.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writePacket(packet.userCache, 3000);
};

BlacklistResponse.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new BlacklistResponse();
    const result0 = byteBuffer.readPacket(3000);
    packet.userCache = result0;
    return packet;
};

export default BlacklistResponse;
