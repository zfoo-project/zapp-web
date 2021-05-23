// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const MuteChannelResponse = function(channelId, groupId, mute, refreshTime) {
    this.channelId = channelId; // long
    this.groupId = groupId; // long
    this.mute = mute; // boolean
    this.refreshTime = refreshTime; // long
};

MuteChannelResponse.prototype.protocolId = function() {
    return 1315;
};

MuteChannelResponse.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeLong(packet.channelId);
    byteBuffer.writeLong(packet.groupId);
    byteBuffer.writeBoolean(packet.mute);
    byteBuffer.writeLong(packet.refreshTime);
};

MuteChannelResponse.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new MuteChannelResponse();
    const result0 = byteBuffer.readLong();
    packet.channelId = result0;
    const result1 = byteBuffer.readLong();
    packet.groupId = result1;
    const result2 = byteBuffer.readBoolean(); 
    packet.mute = result2;
    const result3 = byteBuffer.readLong();
    packet.refreshTime = result3;
    return packet;
};

export default MuteChannelResponse;
