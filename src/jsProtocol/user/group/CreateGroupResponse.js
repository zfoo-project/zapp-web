import ProtocolManager from '../../ProtocolManager.js';
// 创建群组
//
// @author jaysunxiao
// @version 1.0
// @since 2020-04-22 13:20
const CreateGroupResponse = function(group) {
    this.group = group; // com.zfoo.app.zapp.common.protocol.group.model.GroupVO
};

CreateGroupResponse.prototype.protocolId = function() {
    return 1301;
};

CreateGroupResponse.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    ProtocolManager.getProtocol(18000).writeObject(byteBuffer, packet.group);
};

CreateGroupResponse.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new CreateGroupResponse();
    const result0 = ProtocolManager.getProtocol(18000).readObject(byteBuffer);
    packet.group = result0;
    return packet;
};

export default CreateGroupResponse;
