// @author jaysunxiao
// @version 1.0
// @since 2020-05-04 19:59
const GroupAuthVO = function(color, groupAuth, id, name) {
    // 颜色
    this.color = color; // java.lang.String
    // 权限类型
    this.groupAuth = groupAuth; // int
    this.id = id; // long
    // 身份名称
    this.name = name; // java.lang.String
};

GroupAuthVO.prototype.protocolId = function() {
    return 18001;
};

GroupAuthVO.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeString(packet.color);
    byteBuffer.writeInt(packet.groupAuth);
    byteBuffer.writeLong(packet.id);
    byteBuffer.writeString(packet.name);
};

GroupAuthVO.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new GroupAuthVO();
    const result0 = byteBuffer.readString();
    packet.color = result0;
    const result1 = byteBuffer.readInt();
    packet.groupAuth = result1;
    const result2 = byteBuffer.readLong();
    packet.id = result2;
    const result3 = byteBuffer.readString();
    packet.name = result3;
    return packet;
};

export default GroupAuthVO;
