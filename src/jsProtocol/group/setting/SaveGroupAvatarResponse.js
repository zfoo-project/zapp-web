// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const SaveGroupAvatarResponse = function(avatar, groupId) {
    this.avatar = avatar; // java.lang.String
    this.groupId = groupId; // long
};

SaveGroupAvatarResponse.prototype.protocolId = function() {
    return 18201;
};

SaveGroupAvatarResponse.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeString(packet.avatar);
    byteBuffer.writeLong(packet.groupId);
};

SaveGroupAvatarResponse.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new SaveGroupAvatarResponse();
    const result0 = byteBuffer.readString();
    packet.avatar = result0;
    const result1 = byteBuffer.readLong();
    packet.groupId = result1;
    return packet;
};

export default SaveGroupAvatarResponse;
