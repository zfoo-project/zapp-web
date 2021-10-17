// 群组聊天
//
// @author jaysunxiao
// @version 1.0
// @since 2020-04-21 18:20
const GroupChatRequest = function(channelId, chatMessage, groupId, type) {
    this.channelId = channelId; // long
    this.chatMessage = chatMessage; // java.lang.String
    this.groupId = groupId; // long
    this.type = type; // byte
};

GroupChatRequest.prototype.protocolId = function() {
    return 18100;
};

GroupChatRequest.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeLong(packet.channelId);
    byteBuffer.writeString(packet.chatMessage);
    byteBuffer.writeLong(packet.groupId);
    byteBuffer.writeByte(packet.type);
};

GroupChatRequest.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new GroupChatRequest();
    const result0 = byteBuffer.readLong();
    packet.channelId = result0;
    const result1 = byteBuffer.readString();
    packet.chatMessage = result1;
    const result2 = byteBuffer.readLong();
    packet.groupId = result2;
    const result3 = byteBuffer.readByte();
    packet.type = result3;
    return packet;
};

export default GroupChatRequest;
