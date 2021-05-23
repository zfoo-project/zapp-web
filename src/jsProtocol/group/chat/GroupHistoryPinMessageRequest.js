// 好友聊天
//
// @author jaysunxiao
// @version 1.0
// @since 2020-05-07 10:54
const GroupHistoryPinMessageRequest = function(channelId, groupId, lastMessageId) {
    this.channelId = channelId; // long
    this.groupId = groupId; // long
    // 最老消息的id
    this.lastMessageId = lastMessageId; // long
};

GroupHistoryPinMessageRequest.prototype.protocolId = function() {
    return 18112;
};

GroupHistoryPinMessageRequest.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeLong(packet.channelId);
    byteBuffer.writeLong(packet.groupId);
    byteBuffer.writeLong(packet.lastMessageId);
};

GroupHistoryPinMessageRequest.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new GroupHistoryPinMessageRequest();
    const result0 = byteBuffer.readLong();
    packet.channelId = result0;
    const result1 = byteBuffer.readLong();
    packet.groupId = result1;
    const result2 = byteBuffer.readLong();
    packet.lastMessageId = result2;
    return packet;
};

export default GroupHistoryPinMessageRequest;
