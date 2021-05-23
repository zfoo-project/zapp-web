// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const MemberGroupAuthIdUpdateNotice = function(groupAuthIds, groupId, memberId) {
    this.groupAuthIds = groupAuthIds; // java.util.List<java.lang.Long>
    this.groupId = groupId; // long
    this.memberId = memberId; // long
};

MemberGroupAuthIdUpdateNotice.prototype.protocolId = function() {
    return 19002;
};

MemberGroupAuthIdUpdateNotice.writeObject = function(byteBuffer, packet) {
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
    byteBuffer.writeLong(packet.memberId);
};

MemberGroupAuthIdUpdateNotice.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new MemberGroupAuthIdUpdateNotice();
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
    const result6 = byteBuffer.readLong();
    packet.memberId = result6;
    return packet;
};

export default MemberGroupAuthIdUpdateNotice;
