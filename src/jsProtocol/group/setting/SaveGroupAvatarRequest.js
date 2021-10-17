// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const SaveGroupAvatarRequest = function(avatar, groupId) {
    this.avatar = avatar; // java.lang.String
    this.groupId = groupId; // long
};

SaveGroupAvatarRequest.prototype.protocolId = function() {
    return 18200;
};

SaveGroupAvatarRequest.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeString(packet.avatar);
    byteBuffer.writeLong(packet.groupId);
};

SaveGroupAvatarRequest.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new SaveGroupAvatarRequest();
    const result0 = byteBuffer.readString();
    packet.avatar = result0;
    const result1 = byteBuffer.readLong();
    packet.groupId = result1;
    return packet;
};

export default SaveGroupAvatarRequest;
