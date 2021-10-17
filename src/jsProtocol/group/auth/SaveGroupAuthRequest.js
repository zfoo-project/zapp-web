// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const SaveGroupAuthRequest = function(groupAuths, groupId) {
    this.groupAuths = groupAuths; // java.util.List<com.zfoo.app.zapp.common.protocol.group.model.GroupAuthVO>
    this.groupId = groupId; // long
};

SaveGroupAuthRequest.prototype.protocolId = function() {
    return 18502;
};

SaveGroupAuthRequest.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writePacketArray(packet.groupAuths, 18001);
    byteBuffer.writeLong(packet.groupId);
};

SaveGroupAuthRequest.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new SaveGroupAuthRequest();
    const list0 = byteBuffer.readPacketArray(18001);
    packet.groupAuths = list0;
    const result1 = byteBuffer.readLong();
    packet.groupId = result1;
    return packet;
};

export default SaveGroupAuthRequest;
