// @author jaysunxiao
// @version 1.0
// @since 2020-05-03 21:09
const InviteCodeVO = function(code, count, countType, expireTime, expireType) {
    this.code = code; // java.lang.String
    this.count = count; // int
    this.countType = countType; // int
    this.expireTime = expireTime; // long
    this.expireType = expireType; // int
};

InviteCodeVO.prototype.protocolId = function() {
    return 18400;
};

InviteCodeVO.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeString(packet.code);
    byteBuffer.writeInt(packet.count);
    byteBuffer.writeInt(packet.countType);
    byteBuffer.writeLong(packet.expireTime);
    byteBuffer.writeInt(packet.expireType);
};

InviteCodeVO.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new InviteCodeVO();
    const result0 = byteBuffer.readString();
    packet.code = result0;
    const result1 = byteBuffer.readInt();
    packet.count = result1;
    const result2 = byteBuffer.readInt();
    packet.countType = result2;
    const result3 = byteBuffer.readLong();
    packet.expireTime = result3;
    const result4 = byteBuffer.readInt();
    packet.expireType = result4;
    return packet;
};

export default InviteCodeVO;
