// @author jaysunxiao
// @version 1.0
// @since 2019-11-08 10:35
const GetUserCacheRequest = function(userIds) {
    this.userIds = userIds; // java.util.Set<java.lang.Long>
};

GetUserCacheRequest.prototype.protocolId = function() {
    return 3021;
};

GetUserCacheRequest.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeLongArray(packet.userIds);
};

GetUserCacheRequest.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new GetUserCacheRequest();
    const set0 = byteBuffer.readLongArray();
    packet.userIds = set0;
    return packet;
};

export default GetUserCacheRequest;
