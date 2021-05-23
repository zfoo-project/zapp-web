import ProtocolManager from '../../ProtocolManager.js';
// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 15:33
const SaveChannelBoxResponse = function(groupVO) {
    this.groupVO = groupVO; // com.zfoo.app.zapp.common.protocol.group.model.GroupVO
};

SaveChannelBoxResponse.prototype.protocolId = function() {
    return 18311;
};

SaveChannelBoxResponse.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    ProtocolManager.getProtocol(18000).writeObject(byteBuffer, packet.groupVO);
};

SaveChannelBoxResponse.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new SaveChannelBoxResponse();
    const result0 = ProtocolManager.getProtocol(18000).readObject(byteBuffer);
    packet.groupVO = result0;
    return packet;
};

export default SaveChannelBoxResponse;
