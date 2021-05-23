// @author jaysunxiao
// @version 1.0
// @since 2020-04-04 21:44
const SearchUserRequest = function(query) {
    this.query = query; // java.lang.String
};

SearchUserRequest.prototype.protocolId = function() {
    return 3030;
};

SearchUserRequest.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeString(packet.query);
};

SearchUserRequest.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new SearchUserRequest();
    const result0 = byteBuffer.readString();
    packet.query = result0;
    return packet;
};

export default SearchUserRequest;
