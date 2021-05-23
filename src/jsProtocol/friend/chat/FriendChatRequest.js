// 好友聊天
//
// @author jaysunxiao
// @version 1.0
// @since 2019-11-14 10:54
const FriendChatRequest = function(chatMessage, friendId, type, userId) {
    this.chatMessage = chatMessage; // java.lang.String
    this.friendId = friendId; // long
    this.type = type; // byte
    this.userId = userId; // long
};

FriendChatRequest.prototype.protocolId = function() {
    return 15200;
};

FriendChatRequest.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeString(packet.chatMessage);
    byteBuffer.writeLong(packet.friendId);
    byteBuffer.writeByte(packet.type);
    byteBuffer.writeLong(packet.userId);
};

FriendChatRequest.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new FriendChatRequest();
    const result0 = byteBuffer.readString();
    packet.chatMessage = result0;
    const result1 = byteBuffer.readLong();
    packet.friendId = result1;
    const result2 = byteBuffer.readByte();
    packet.type = result2;
    const result3 = byteBuffer.readLong();
    packet.userId = result3;
    return packet;
};

export default FriendChatRequest;
