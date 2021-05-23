import ProtocolManager from '../ProtocolManager.js';
// @author jaysunxiao
// @version 1.0
// @since 2020-05-07 10:49
const GroupChatMessageNotice = function(channelId, chatMessage, groupId) {
    this.channelId = channelId; // long
    this.chatMessage = chatMessage; // com.zfoo.app.zapp.common.protocol.common.ChatMessage
    this.groupId = groupId; // long
};

GroupChatMessageNotice.prototype.protocolId = function() {
    return 19006;
};

GroupChatMessageNotice.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeLong(packet.channelId);
    ProtocolManager.getProtocol(120).writeObject(byteBuffer, packet.chatMessage);
    byteBuffer.writeLong(packet.groupId);
};

GroupChatMessageNotice.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new GroupChatMessageNotice();
    const result0 = byteBuffer.readLong();
    packet.channelId = result0;
    const result1 = ProtocolManager.getProtocol(120).readObject(byteBuffer);
    packet.chatMessage = result1;
    const result2 = byteBuffer.readLong();
    packet.groupId = result2;
    return packet;
};

export default GroupChatMessageNotice;
