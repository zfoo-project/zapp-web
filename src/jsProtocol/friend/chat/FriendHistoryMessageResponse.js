import ProtocolManager from '../../ProtocolManager.js';
// 好友聊天
//
// @author jaysunxiao
// @version 1.0
// @since 2019-11-14 10:54
const FriendHistoryMessageResponse = function(chatMessages, uidA, uidB) {
    this.chatMessages = chatMessages; // java.util.List<com.zfoo.app.zapp.common.protocol.common.ChatMessage>
    this.uidA = uidA; // long
    this.uidB = uidB; // long
};

FriendHistoryMessageResponse.prototype.protocolId = function() {
    return 15205;
};

FriendHistoryMessageResponse.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    if (packet.chatMessages === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.chatMessages.length);
        packet.chatMessages.forEach(element0 => {
            ProtocolManager.getProtocol(120).writeObject(byteBuffer, element0);
        });
    }
    byteBuffer.writeLong(packet.uidA);
    byteBuffer.writeLong(packet.uidB);
};

FriendHistoryMessageResponse.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new FriendHistoryMessageResponse();
    const result1 = [];
    const size2 = byteBuffer.readInt();
    if (size2 > 0) {
        for (let index3 = 0; index3 < size2; index3++) {
            const result4 = ProtocolManager.getProtocol(120).readObject(byteBuffer);
            result1.push(result4);
        }
    }
    packet.chatMessages = result1;
    const result5 = byteBuffer.readLong();
    packet.uidA = result5;
    const result6 = byteBuffer.readLong();
    packet.uidB = result6;
    return packet;
};

export default FriendHistoryMessageResponse;
