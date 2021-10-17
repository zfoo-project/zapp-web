// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 15:33
const CreateChannelBoxResponse = function(groupVO) {
    this.groupVO = groupVO; // com.zfoo.app.zapp.common.protocol.group.model.GroupVO
};

CreateChannelBoxResponse.prototype.protocolId = function() {
    return 18301;
};

CreateChannelBoxResponse.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writePacket(packet.groupVO, 18000);
};

CreateChannelBoxResponse.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new CreateChannelBoxResponse();
    const result0 = byteBuffer.readPacket(18000);
    packet.groupVO = result0;
    return packet;
};

export default CreateChannelBoxResponse;
