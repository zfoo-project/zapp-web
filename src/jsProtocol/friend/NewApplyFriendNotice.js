import ProtocolManager from '../ProtocolManager.js';
// @author jaysunxiao
// @version 1.0
// @since 2019-11-18 10:46
const NewApplyFriendNotice = function(applyFriendVO) {
    this.applyFriendVO = applyFriendVO; // com.zfoo.app.zapp.common.protocol.friend.model.ApplyFriendVO
};

NewApplyFriendNotice.prototype.protocolId = function() {
    return 16001;
};

NewApplyFriendNotice.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    ProtocolManager.getProtocol(15000).writeObject(byteBuffer, packet.applyFriendVO);
};

NewApplyFriendNotice.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new NewApplyFriendNotice();
    const result0 = ProtocolManager.getProtocol(15000).readObject(byteBuffer);
    packet.applyFriendVO = result0;
    return packet;
};

export default NewApplyFriendNotice;
