// 好友聊天
//
// @author jaysunxiao
// @version 1.0
// @since 2019-11-14 10:54
const GroupHistoryPinMessageResponse = function(channelId, chatMessages, groupId, lastMessageId) {
    this.channelId = channelId; // long
    this.chatMessages = chatMessages; // java.util.List<com.zfoo.app.zapp.common.protocol.common.ChatMessage>
    this.groupId = groupId; // long
    this.lastMessageId = lastMessageId; // long
};

GroupHistoryPinMessageResponse.prototype.protocolId = function() {
    return 18113;
};

GroupHistoryPinMessageResponse.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeLong(packet.channelId);
    byteBuffer.writePacketArray(packet.chatMessages, 120);
    byteBuffer.writeLong(packet.groupId);
    byteBuffer.writeLong(packet.lastMessageId);
};

GroupHistoryPinMessageResponse.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new GroupHistoryPinMessageResponse();
    const result0 = byteBuffer.readLong();
    packet.channelId = result0;
    const list1 = byteBuffer.readPacketArray(120);
    packet.chatMessages = list1;
    const result2 = byteBuffer.readLong();
    packet.groupId = result2;
    const result3 = byteBuffer.readLong();
    packet.lastMessageId = result3;
    return packet;
};

export default GroupHistoryPinMessageResponse;
