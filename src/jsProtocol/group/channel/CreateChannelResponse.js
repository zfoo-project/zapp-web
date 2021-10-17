// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 15:33
const CreateChannelResponse = function(groupVO) {
    this.groupVO = groupVO; // com.zfoo.app.zapp.common.protocol.group.model.GroupVO
};

CreateChannelResponse.prototype.protocolId = function() {
    return 18303;
};

CreateChannelResponse.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writePacket(packet.groupVO, 18000);
};

CreateChannelResponse.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new CreateChannelResponse();
    const result0 = byteBuffer.readPacket(18000);
    packet.groupVO = result0;
    return packet;
};

export default CreateChannelResponse;
