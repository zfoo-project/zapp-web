import ProtocolManager from '../../ProtocolManager.js';
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

GroupHistoryPinMessageResponse.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeLong(packet.channelId);
    if (packet.chatMessages === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.chatMessages.length);
        packet.chatMessages.forEach(element0 => {
            ProtocolManager.getProtocol(120).writeObject(byteBuffer, element0);
        });
    }
    byteBuffer.writeLong(packet.groupId);
    byteBuffer.writeLong(packet.lastMessageId);
};

GroupHistoryPinMessageResponse.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new GroupHistoryPinMessageResponse();
    const result1 = byteBuffer.readLong();
    packet.channelId = result1;
    const result2 = [];
    const size3 = byteBuffer.readInt();
    if (size3 > 0) {
        for (let index4 = 0; index4 < size3; index4++) {
            const result5 = ProtocolManager.getProtocol(120).readObject(byteBuffer);
            result2.push(result5);
        }
    }
    packet.chatMessages = result2;
    const result6 = byteBuffer.readLong();
    packet.groupId = result6;
    const result7 = byteBuffer.readLong();
    packet.lastMessageId = result7;
    return packet;
};

export default GroupHistoryPinMessageResponse;
