// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const MuteChannelRequest = function(allChannelIds, channelId, groupId, mute) {
    this.allChannelIds = allChannelIds; // java.util.List<java.lang.Long>
    this.channelId = channelId; // long
    this.groupId = groupId; // long
    this.mute = mute; // boolean
};

MuteChannelRequest.prototype.protocolId = function() {
    return 1314;
};

MuteChannelRequest.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeLongArray(packet.allChannelIds);
    byteBuffer.writeLong(packet.channelId);
    byteBuffer.writeLong(packet.groupId);
    byteBuffer.writeBoolean(packet.mute);
};

MuteChannelRequest.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new MuteChannelRequest();
    const list0 = byteBuffer.readLongArray();
    packet.allChannelIds = list0;
    const result1 = byteBuffer.readLong();
    packet.channelId = result1;
    const result2 = byteBuffer.readLong();
    packet.groupId = result2;
    const result3 = byteBuffer.readBoolean(); 
    packet.mute = result3;
    return packet;
};

export default MuteChannelRequest;
