// @author jaysunxiao
// @version 1.0
// @since 2019-11-08 10:35
const GetUserCacheRequest = function(userIds) {
    this.userIds = userIds; // java.util.Set<java.lang.Long>
};

GetUserCacheRequest.prototype.protocolId = function() {
    return 3021;
};

GetUserCacheRequest.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    if (packet.userIds === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.userIds.size);
        packet.userIds.forEach(element0 => {
            byteBuffer.writeLong(element0);
        });
    }
};

GetUserCacheRequest.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new GetUserCacheRequest();
    const result1 = new Set();
    const size2 = byteBuffer.readInt();
    if (size2 > 0) {
        for (let index3 = 0; index3 < size2; index3++) {
            const result4 = byteBuffer.readLong();
            result1.add(result4);
        }
    }
    packet.userIds = result1;
    return packet;
};

export default GetUserCacheRequest;
