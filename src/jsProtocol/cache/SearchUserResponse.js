import ProtocolManager from '../ProtocolManager.js';
// @author jaysunxiao
// @version 1.0
// @since 2020-04-04 21:44
const SearchUserResponse = function(userCaches) {
    this.userCaches = userCaches; // java.util.List<com.zfoo.app.zapp.common.protocol.cache.model.UserCache>
};

SearchUserResponse.prototype.protocolId = function() {
    return 3031;
};

SearchUserResponse.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    if (packet.userCaches === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.userCaches.length);
        packet.userCaches.forEach(element0 => {
            ProtocolManager.getProtocol(3000).writeObject(byteBuffer, element0);
        });
    }
};

SearchUserResponse.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new SearchUserResponse();
    const result1 = [];
    const size2 = byteBuffer.readInt();
    if (size2 > 0) {
        for (let index3 = 0; index3 < size2; index3++) {
            const result4 = ProtocolManager.getProtocol(3000).readObject(byteBuffer);
            result1.push(result4);
        }
    }
    packet.userCaches = result1;
    return packet;
};

export default SearchUserResponse;
