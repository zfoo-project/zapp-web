// @author jaysunxiao
// @version 1.0
// @since 2020-04-22 11:43
const GroupVO = function(adminId, avatar, background, channelBoxes, createTime, groupAuths, id, name) {
    this.adminId = adminId; // long
    this.avatar = avatar; // java.lang.String
    this.background = background; // java.lang.String
    this.channelBoxes = channelBoxes; // java.util.List<com.zfoo.app.zapp.common.protocol.group.model.ChannelBoxVO>
    this.createTime = createTime; // long
    this.groupAuths = groupAuths; // java.util.List<com.zfoo.app.zapp.common.protocol.group.model.GroupAuthVO>
    this.id = id; // long
    this.name = name; // java.lang.String
};

GroupVO.prototype.protocolId = function() {
    return 18000;
};

GroupVO.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeLong(packet.adminId);
    byteBuffer.writeString(packet.avatar);
    byteBuffer.writeString(packet.background);
    byteBuffer.writePacketArray(packet.channelBoxes, 18011);
    byteBuffer.writeLong(packet.createTime);
    byteBuffer.writePacketArray(packet.groupAuths, 18001);
    byteBuffer.writeLong(packet.id);
    byteBuffer.writeString(packet.name);
};

GroupVO.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new GroupVO();
    const result0 = byteBuffer.readLong();
    packet.adminId = result0;
    const result1 = byteBuffer.readString();
    packet.avatar = result1;
    const result2 = byteBuffer.readString();
    packet.background = result2;
    const list3 = byteBuffer.readPacketArray(18011);
    packet.channelBoxes = list3;
    const result4 = byteBuffer.readLong();
    packet.createTime = result4;
    const list5 = byteBuffer.readPacketArray(18001);
    packet.groupAuths = list5;
    const result6 = byteBuffer.readLong();
    packet.id = result6;
    const result7 = byteBuffer.readString();
    packet.name = result7;
    return packet;
};

export default GroupVO;
