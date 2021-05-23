import ProtocolManager from '../../ProtocolManager.js';
// @author jaysunxiao
// @version 1.0
// @since 2020-05-08 14:20
const GroupMemberListResponse = function(groupId, members, page) {
    this.groupId = groupId; // long
    this.members = members; // java.util.List<com.zfoo.app.zapp.common.protocol.group.member.model.GroupMemberVO>
    this.page = page; // int
};

GroupMemberListResponse.prototype.protocolId = function() {
    return 18431;
};

GroupMemberListResponse.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeLong(packet.groupId);
    if (packet.members === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.members.length);
        packet.members.forEach(element0 => {
            ProtocolManager.getProtocol(18401).writeObject(byteBuffer, element0);
        });
    }
    byteBuffer.writeInt(packet.page);
};

GroupMemberListResponse.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new GroupMemberListResponse();
    const result1 = byteBuffer.readLong();
    packet.groupId = result1;
    const result2 = [];
    const size3 = byteBuffer.readInt();
    if (size3 > 0) {
        for (let index4 = 0; index4 < size3; index4++) {
            const result5 = ProtocolManager.getProtocol(18401).readObject(byteBuffer);
            result2.push(result5);
        }
    }
    packet.members = result2;
    const result6 = byteBuffer.readInt();
    packet.page = result6;
    return packet;
};

export default GroupMemberListResponse;
