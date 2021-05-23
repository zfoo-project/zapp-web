import ProtocolManager from '../../ProtocolManager.js';
// @author jaysunxiao
// @version 1.0
// @since 2019-12-11 10:05
const ApplyFriendVO = function(friendCache, friendId, status, timestamp) {
    this.friendCache = friendCache; // com.zfoo.app.zapp.common.protocol.cache.model.UserCache
    this.friendId = friendId; // long
    this.status = status; // int
    this.timestamp = timestamp; // long
};

ApplyFriendVO.prototype.protocolId = function() {
    return 15000;
};

ApplyFriendVO.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    ProtocolManager.getProtocol(3000).writeObject(byteBuffer, packet.friendCache);
    byteBuffer.writeLong(packet.friendId);
    byteBuffer.writeInt(packet.status);
    byteBuffer.writeLong(packet.timestamp);
};

ApplyFriendVO.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new ApplyFriendVO();
    const result0 = ProtocolManager.getProtocol(3000).readObject(byteBuffer);
    packet.friendCache = result0;
    const result1 = byteBuffer.readLong();
    packet.friendId = result1;
    const result2 = byteBuffer.readInt();
    packet.status = result2;
    const result3 = byteBuffer.readLong();
    packet.timestamp = result3;
    return packet;
};

export default ApplyFriendVO;
