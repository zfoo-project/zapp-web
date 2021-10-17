// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const SaveGroupSettingRequest = function(groupId, name) {
    this.groupId = groupId; // long
    this.name = name; // java.lang.String
};

SaveGroupSettingRequest.prototype.protocolId = function() {
    return 18204;
};

SaveGroupSettingRequest.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeLong(packet.groupId);
    byteBuffer.writeString(packet.name);
};

SaveGroupSettingRequest.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new SaveGroupSettingRequest();
    const result0 = byteBuffer.readLong();
    packet.groupId = result0;
    const result1 = byteBuffer.readString();
    packet.name = result1;
    return packet;
};

export default SaveGroupSettingRequest;
