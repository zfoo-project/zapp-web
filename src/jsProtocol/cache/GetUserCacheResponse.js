// @author jaysunxiao
// @version 1.0
// @since 2019-11-08 10:35
const GetUserCacheResponse = function(userCacheMap) {
    this.userCacheMap = userCacheMap; // java.util.Map<java.lang.Long, com.zfoo.app.zapp.common.protocol.cache.model.UserCache>
};

GetUserCacheResponse.prototype.protocolId = function() {
    return 3022;
};

GetUserCacheResponse.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeLongPacketMap(packet.userCacheMap, 3000);
};

GetUserCacheResponse.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new GetUserCacheResponse();
    const map0 = byteBuffer.readLongPacketMap(3000);
    packet.userCacheMap = map0;
    return packet;
};

export default GetUserCacheResponse;
