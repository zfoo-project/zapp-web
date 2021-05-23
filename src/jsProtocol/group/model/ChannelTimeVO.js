// @author jaysunxiao
// @version 1.0
// @since 2020-04-22 10:23
const ChannelTimeVO = function(channelId, mute, refreshTime) {
    this.channelId = channelId; // long
    this.mute = mute; // boolean
    this.refreshTime = refreshTime; // long
};

ChannelTimeVO.prototype.protocolId = function() {
    return 18015;
};

ChannelTimeVO.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeLong(packet.channelId);
    byteBuffer.writeBoolean(packet.mute);
    byteBuffer.writeLong(packet.refreshTime);
};

ChannelTimeVO.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new ChannelTimeVO();
    const result0 = byteBuffer.readLong();
    packet.channelId = result0;
    const result1 = byteBuffer.readBoolean(); 
    packet.mute = result1;
    const result2 = byteBuffer.readLong();
    packet.refreshTime = result2;
    return packet;
};

export default ChannelTimeVO;
