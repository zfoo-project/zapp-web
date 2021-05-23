import ProtocolManager from '../ProtocolManager.js';
// @author jaysunxiao
// @version 1.0
// @since 2019-11-08 10:35
const GetUserCacheResponse = function(userCacheMap) {
    this.userCacheMap = userCacheMap; // java.util.Map<java.lang.Long, com.zfoo.app.zapp.common.protocol.cache.model.UserCache>
};

GetUserCacheResponse.prototype.protocolId = function() {
    return 3022;
};

GetUserCacheResponse.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    if (packet.userCacheMap === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.userCacheMap.size);
        packet.userCacheMap.forEach((value1, key0) => {
            byteBuffer.writeLong(key0);
            ProtocolManager.getProtocol(3000).writeObject(byteBuffer, value1);
        });
    }
};

GetUserCacheResponse.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new GetUserCacheResponse();
    const result2 = new Map();
    const size3 = byteBuffer.readInt();
    if (size3 > 0) {
        for (let index4 = 0; index4 < size3; index4++) {
            const result5 = byteBuffer.readLong();
            const result6 = ProtocolManager.getProtocol(3000).readObject(byteBuffer);
            result2.set(result5, result6);
        }
    }
    packet.userCacheMap = result2;
    return packet;
};

export default GetUserCacheResponse;
