// @author jaysunxiao
// @version 1.0
// @since 2020-04-04 21:44
const SearchUserRequest = function(query) {
    this.query = query; // java.lang.String
};

SearchUserRequest.prototype.protocolId = function() {
    return 3030;
};

SearchUserRequest.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeString(packet.query);
};

SearchUserRequest.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new SearchUserRequest();
    const result0 = byteBuffer.readString();
    packet.query = result0;
    return packet;
};

export default SearchUserRequest;
