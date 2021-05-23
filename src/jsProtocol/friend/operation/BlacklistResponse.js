import ProtocolManager from '../../ProtocolManager.js';
// @author jaysunxiao
// @version 1.0
// @since 2019-11-13 18:41
const BlacklistResponse = function(userCache) {
    this.userCache = userCache; // com.zfoo.app.zapp.common.protocol.cache.model.UserCache
};

BlacklistResponse.prototype.protocolId = function() {
    return 15109;
};

BlacklistResponse.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    ProtocolManager.getProtocol(3000).writeObject(byteBuffer, packet.userCache);
};

BlacklistResponse.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new BlacklistResponse();
    const result0 = ProtocolManager.getProtocol(3000).readObject(byteBuffer);
    packet.userCache = result0;
    return packet;
};

export default BlacklistResponse;
