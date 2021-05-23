// @author jaysunxiao
// @version 1.0
// @since 2019-11-17 11:43
const ChatMessage = function(avatar, id, message, name, read, sendId, timestamp, type) {
    this.avatar = avatar; // java.lang.String
    this.id = id; // long
    // 消息内容
    this.message = message; // java.lang.String
    this.name = name; // java.lang.String
    this.read = read; // boolean
    // 发送者的id
    this.sendId = sendId; // long
    // 发送的时间戳
    this.timestamp = timestamp; // long
    this.type = type; // byte
};

ChatMessage.prototype.protocolId = function() {
    return 120;
};

ChatMessage.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeString(packet.avatar);
    byteBuffer.writeLong(packet.id);
    byteBuffer.writeString(packet.message);
    byteBuffer.writeString(packet.name);
    byteBuffer.writeBoolean(packet.read);
    byteBuffer.writeLong(packet.sendId);
    byteBuffer.writeLong(packet.timestamp);
    byteBuffer.writeByte(packet.type);
};

ChatMessage.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new ChatMessage();
    const result0 = byteBuffer.readString();
    packet.avatar = result0;
    const result1 = byteBuffer.readLong();
    packet.id = result1;
    const result2 = byteBuffer.readString();
    packet.message = result2;
    const result3 = byteBuffer.readString();
    packet.name = result3;
    const result4 = byteBuffer.readBoolean(); 
    packet.read = result4;
    const result5 = byteBuffer.readLong();
    packet.sendId = result5;
    const result6 = byteBuffer.readLong();
    packet.timestamp = result6;
    const result7 = byteBuffer.readByte();
    packet.type = result7;
    return packet;
};

export default ChatMessage;
