import ProtocolManager from '../ProtocolManager.js';
// @author jaysunxiao
// @version 1.0
// @since 2019-11-18 10:46
const NewFriendNotice = function(userCacheA, userCacheB) {
    this.userCacheA = userCacheA; // com.zfoo.app.zapp.common.protocol.cache.model.UserCache
    this.userCacheB = userCacheB; // com.zfoo.app.zapp.common.protocol.cache.model.UserCache
};

NewFriendNotice.prototype.protocolId = function() {
    return 16002;
};

NewFriendNotice.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    ProtocolManager.getProtocol(3000).writeObject(byteBuffer, packet.userCacheA);
    ProtocolManager.getProtocol(3000).writeObject(byteBuffer, packet.userCacheB);
};

NewFriendNotice.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new NewFriendNotice();
    const result0 = ProtocolManager.getProtocol(3000).readObject(byteBuffer);
    packet.userCacheA = result0;
    const result1 = ProtocolManager.getProtocol(3000).readObject(byteBuffer);
    packet.userCacheB = result1;
    return packet;
};

export default NewFriendNotice;
