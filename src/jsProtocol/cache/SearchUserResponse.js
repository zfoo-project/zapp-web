// @author jaysunxiao
// @version 1.0
// @since 2020-04-04 21:44
const SearchUserResponse = function(userCaches) {
    this.userCaches = userCaches; // java.util.List<com.zfoo.app.zapp.common.protocol.cache.model.UserCache>
};

SearchUserResponse.prototype.protocolId = function() {
    return 3031;
};

SearchUserResponse.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writePacketArray(packet.userCaches, 3000);
};

SearchUserResponse.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new SearchUserResponse();
    const list0 = byteBuffer.readPacketArray(3000);
    packet.userCaches = list0;
    return packet;
};

export default SearchUserResponse;
