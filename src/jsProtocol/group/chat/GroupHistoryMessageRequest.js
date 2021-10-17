// 好友聊天
//
// @author jaysunxiao
// @version 1.0
// @since 2020-05-07 10:54
const GroupHistoryMessageRequest = function(channelId, groupId, lastMessageId) {
    this.channelId = channelId; // long
    this.groupId = groupId; // long
    // 最老消息的id
    this.lastMessageId = lastMessageId; // long
};

GroupHistoryMessageRequest.prototype.protocolId = function() {
    return 18102;
};

GroupHistoryMessageRequest.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeLong(packet.channelId);
    byteBuffer.writeLong(packet.groupId);
    byteBuffer.writeLong(packet.lastMessageId);
};

GroupHistoryMessageRequest.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new GroupHistoryMessageRequest();
    const result0 = byteBuffer.readLong();
    packet.channelId = result0;
    const result1 = byteBuffer.readLong();
    packet.groupId = result1;
    const result2 = byteBuffer.readLong();
    packet.lastMessageId = result2;
    return packet;
};

export default GroupHistoryMessageRequest;
