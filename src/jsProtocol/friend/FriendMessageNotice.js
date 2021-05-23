import ProtocolManager from '../ProtocolManager.js';
// @author jaysunxiao
// @version 1.0
// @since 2020-04-11 11:49
const FriendMessageNotice = function(chatMessage, uidA, uidB) {
    this.chatMessage = chatMessage; // com.zfoo.app.zapp.common.protocol.common.ChatMessage
    this.uidA = uidA; // long
    this.uidB = uidB; // long
};

FriendMessageNotice.prototype.protocolId = function() {
    return 16000;
};

FriendMessageNotice.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    ProtocolManager.getProtocol(120).writeObject(byteBuffer, packet.chatMessage);
    byteBuffer.writeLong(packet.uidA);
    byteBuffer.writeLong(packet.uidB);
};

FriendMessageNotice.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new FriendMessageNotice();
    const result0 = ProtocolManager.getProtocol(120).readObject(byteBuffer);
    packet.chatMessage = result0;
    const result1 = byteBuffer.readLong();
    packet.uidA = result1;
    const result2 = byteBuffer.readLong();
    packet.uidB = result2;
    return packet;
};

export default FriendMessageNotice;
