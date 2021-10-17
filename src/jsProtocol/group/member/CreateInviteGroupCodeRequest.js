// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const CreateInviteGroupCodeRequest = function(countType, expireType, groupId) {
    // 邀请码可以邀请多少个人
    this.countType = countType; // int
    // 邀请码的过期时间
    this.expireType = expireType; // int
    this.groupId = groupId; // long
};

CreateInviteGroupCodeRequest.prototype.protocolId = function() {
    return 18410;
};

CreateInviteGroupCodeRequest.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeInt(packet.countType);
    byteBuffer.writeInt(packet.expireType);
    byteBuffer.writeLong(packet.groupId);
};

CreateInviteGroupCodeRequest.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new CreateInviteGroupCodeRequest();
    const result0 = byteBuffer.readInt();
    packet.countType = result0;
    const result1 = byteBuffer.readInt();
    packet.expireType = result1;
    const result2 = byteBuffer.readLong();
    packet.groupId = result2;
    return packet;
};

export default CreateInviteGroupCodeRequest;
