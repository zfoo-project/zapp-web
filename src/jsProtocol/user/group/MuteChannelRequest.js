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

MuteChannelRequest.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    if (packet.allChannelIds === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.allChannelIds.length);
        packet.allChannelIds.forEach(element0 => {
            byteBuffer.writeLong(element0);
        });
    }
    byteBuffer.writeLong(packet.channelId);
    byteBuffer.writeLong(packet.groupId);
    byteBuffer.writeBoolean(packet.mute);
};

MuteChannelRequest.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new MuteChannelRequest();
    const result1 = [];
    const size2 = byteBuffer.readInt();
    if (size2 > 0) {
        for (let index3 = 0; index3 < size2; index3++) {
            const result4 = byteBuffer.readLong();
            result1.push(result4);
        }
    }
    packet.allChannelIds = result1;
    const result5 = byteBuffer.readLong();
    packet.channelId = result5;
    const result6 = byteBuffer.readLong();
    packet.groupId = result6;
    const result7 = byteBuffer.readBoolean(); 
    packet.mute = result7;
    return packet;
};

export default MuteChannelRequest;
