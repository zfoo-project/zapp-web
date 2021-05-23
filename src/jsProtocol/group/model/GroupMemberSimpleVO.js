import ProtocolManager from '../../ProtocolManager.js';
// @author jaysunxiao
// @version 1.0
// @since 2020-05-04 19:59
const GroupMemberSimpleVO = function(groupAuthIds, groupId, groupTime, memberId) {
    this.groupAuthIds = groupAuthIds; // java.util.List<java.lang.Long>
    this.groupId = groupId; // long
    this.groupTime = groupTime; // com.zfoo.app.zapp.common.protocol.group.model.GroupTimeVO
    this.memberId = memberId; // long
};

GroupMemberSimpleVO.prototype.protocolId = function() {
    return 18013;
};

GroupMemberSimpleVO.writeObject = function(byteBuffer, packet) {
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
    byteBuffer.writeLong(packet.groupId);
    ProtocolManager.getProtocol(18014).writeObject(byteBuffer, packet.groupTime);
    byteBuffer.writeLong(packet.memberId);
};

GroupMemberSimpleVO.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new GroupMemberSimpleVO();
    const result1 = [];
    const size2 = byteBuffer.readInt();
    if (size2 > 0) {
        for (let index3 = 0; index3 < size2; index3++) {
            const result4 = byteBuffer.readLong();
            result1.push(result4);
        }
    }
    packet.groupAuthIds = result1;
    const result5 = byteBuffer.readLong();
    packet.groupId = result5;
    const result6 = ProtocolManager.getProtocol(18014).readObject(byteBuffer);
    packet.groupTime = result6;
    const result7 = byteBuffer.readLong();
    packet.memberId = result7;
    return packet;
};

export default GroupMemberSimpleVO;
