// @author jaysunxiao
// @version 1.0
// @since 2019-11-14 10:54
const BlacklistCancelRequest = function(targetId, userId) {
    // 取消加入黑名单的用户id
    this.targetId = targetId; // long
    // 用户的id
    this.userId = userId; // long
};

BlacklistCancelRequest.prototype.protocolId = function() {
    return 15110;
};

BlacklistCancelRequest.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeLong(packet.targetId);
    byteBuffer.writeLong(packet.userId);
};

BlacklistCancelRequest.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new BlacklistCancelRequest();
    const result0 = byteBuffer.readLong();
    packet.targetId = result0;
    const result1 = byteBuffer.readLong();
    packet.userId = result1;
    return packet;
};

export default BlacklistCancelRequest;
