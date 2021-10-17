// 群组聊天
//
// @author jaysunxiao
// @version 1.0
// @since 2020-04-21 18:20
const PinGroupMessageRequest = function(channelId, groupId, messageId) {
    this.channelId = channelId; // long
    this.groupId = groupId; // long
    this.messageId = messageId; // long
};

PinGroupMessageRequest.prototype.protocolId = function() {
    return 18109;
};

PinGroupMessageRequest.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeLong(packet.channelId);
    byteBuffer.writeLong(packet.groupId);
    byteBuffer.writeLong(packet.messageId);
};

PinGroupMessageRequest.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new PinGroupMessageRequest();
    const result0 = byteBuffer.readLong();
    packet.channelId = result0;
    const result1 = byteBuffer.readLong();
    packet.groupId = result1;
    const result2 = byteBuffer.readLong();
    packet.messageId = result2;
    return packet;
};

export default PinGroupMessageRequest;
