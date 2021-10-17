// @author jaysunxiao
// @version 1.0
// @since 2020-04-22 11:43
const ChannelVO = function(channelAuths, id, name, refreshTime) {
    this.channelAuths = channelAuths; // java.util.List<com.zfoo.app.zapp.common.protocol.group.model.ChannelAuthVO>
    this.id = id; // long
    this.name = name; // java.lang.String
    this.refreshTime = refreshTime; // long
};

ChannelVO.prototype.protocolId = function() {
    return 18010;
};

ChannelVO.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writePacketArray(packet.channelAuths, 18012);
    byteBuffer.writeLong(packet.id);
    byteBuffer.writeString(packet.name);
    byteBuffer.writeLong(packet.refreshTime);
};

ChannelVO.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new ChannelVO();
    const list0 = byteBuffer.readPacketArray(18012);
    packet.channelAuths = list0;
    const result1 = byteBuffer.readLong();
    packet.id = result1;
    const result2 = byteBuffer.readString();
    packet.name = result2;
    const result3 = byteBuffer.readLong();
    packet.refreshTime = result3;
    return packet;
};

export default ChannelVO;
