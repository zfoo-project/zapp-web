// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const RefreshChannelTimeResponse = function(channelId, groupId, refreshTime) {
    this.channelId = channelId; // long
    this.groupId = groupId; // long
    this.refreshTime = refreshTime; // long
};

RefreshChannelTimeResponse.prototype.protocolId = function() {
    return 1311;
};

RefreshChannelTimeResponse.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeLong(packet.channelId);
    byteBuffer.writeLong(packet.groupId);
    byteBuffer.writeLong(packet.refreshTime);
};

RefreshChannelTimeResponse.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new RefreshChannelTimeResponse();
    const result0 = byteBuffer.readLong();
    packet.channelId = result0;
    const result1 = byteBuffer.readLong();
    packet.groupId = result1;
    const result2 = byteBuffer.readLong();
    packet.refreshTime = result2;
    return packet;
};

export default RefreshChannelTimeResponse;
