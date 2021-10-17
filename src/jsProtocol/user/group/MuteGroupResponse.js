// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const MuteGroupResponse = function(groupId, mute) {
    this.groupId = groupId; // long
    this.mute = mute; // boolean
};

MuteGroupResponse.prototype.protocolId = function() {
    return 1313;
};

MuteGroupResponse.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeLong(packet.groupId);
    byteBuffer.writeBoolean(packet.mute);
};

MuteGroupResponse.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new MuteGroupResponse();
    const result0 = byteBuffer.readLong();
    packet.groupId = result0;
    const result1 = byteBuffer.readBoolean(); 
    packet.mute = result1;
    return packet;
};

export default MuteGroupResponse;
