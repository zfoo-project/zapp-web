import ProtocolManager from '../ProtocolManager.js';
// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const GroupUpdateNotice = function(groupVO) {
    this.groupVO = groupVO; // com.zfoo.app.zapp.common.protocol.group.model.GroupVO
};

GroupUpdateNotice.prototype.protocolId = function() {
    return 19001;
};

GroupUpdateNotice.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    ProtocolManager.getProtocol(18000).writeObject(byteBuffer, packet.groupVO);
};

GroupUpdateNotice.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new GroupUpdateNotice();
    const result0 = ProtocolManager.getProtocol(18000).readObject(byteBuffer);
    packet.groupVO = result0;
    return packet;
};

export default GroupUpdateNotice;
