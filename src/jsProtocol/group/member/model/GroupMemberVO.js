import ProtocolManager from '../../../ProtocolManager.js';
// @author jaysunxiao
// @version 1.0
// @since 2020-08-05 12:35
const GroupMemberVO = function(groupAuthIds, userCache) {
    // 用户在群里的身份
    this.groupAuthIds = groupAuthIds; // java.util.List<java.lang.Long>
    // 用户的信息
    this.userCache = userCache; // com.zfoo.app.zapp.common.protocol.cache.model.UserCache
};

GroupMemberVO.prototype.protocolId = function() {
    return 18401;
};

GroupMemberVO.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    if (packet.groupAuthIds === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.groupAuthIds.length);
        packet.groupAuthIds.forEach(element0 => {
            byteBuffer.writeLong(element0);
        });
    }
    ProtocolManager.getProtocol(3000).writeObject(byteBuffer, packet.userCache);
};

GroupMemberVO.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new GroupMemberVO();
    const result1 = [];
    const size2 = byteBuffer.readInt();
    if (size2 > 0) {
        for (let index3 = 0; index3 < size2; index3++) {
            const result4 = byteBuffer.readLong();
            result1.push(result4);
        }
    }
    packet.groupAuthIds = result1;
    const result5 = ProtocolManager.getProtocol(3000).readObject(byteBuffer);
    packet.userCache = result5;
    return packet;
};

export default GroupMemberVO;
