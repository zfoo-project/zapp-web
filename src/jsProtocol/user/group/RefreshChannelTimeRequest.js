// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const RefreshChannelTimeRequest = function(allChannelIds, channelId, groupId, refreshTime) {
    this.allChannelIds = allChannelIds; // java.util.List<java.lang.Long>
    this.channelId = channelId; // long
    this.groupId = groupId; // long
    this.refreshTime = refreshTime; // long
};

RefreshChannelTimeRequest.prototype.protocolId = function() {
    return 1310;
};

RefreshChannelTimeRequest.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeLongArray(packet.allChannelIds);
    byteBuffer.writeLong(packet.channelId);
    byteBuffer.writeLong(packet.groupId);
    byteBuffer.writeLong(packet.refreshTime);
};

RefreshChannelTimeRequest.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new RefreshChannelTimeRequest();
    const list0 = byteBuffer.readLongArray();
    packet.allChannelIds = list0;
    const result1 = byteBuffer.readLong();
    packet.channelId = result1;
    const result2 = byteBuffer.readLong();
    packet.groupId = result2;
    const result3 = byteBuffer.readLong();
    packet.refreshTime = result3;
    return packet;
};

export default RefreshChannelTimeRequest;
