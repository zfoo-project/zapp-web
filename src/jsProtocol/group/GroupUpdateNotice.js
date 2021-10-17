// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const GroupUpdateNotice = function(groupVO) {
    this.groupVO = groupVO; // com.zfoo.app.zapp.common.protocol.group.model.GroupVO
};

GroupUpdateNotice.prototype.protocolId = function() {
    return 19001;
};

GroupUpdateNotice.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writePacket(packet.groupVO, 18000);
};

GroupUpdateNotice.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new GroupUpdateNotice();
    const result0 = byteBuffer.readPacket(18000);
    packet.groupVO = result0;
    return packet;
};

export default GroupUpdateNotice;
