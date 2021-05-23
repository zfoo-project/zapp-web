import ProtocolManager from '../../ProtocolManager.js';
// @author jaysunxiao
// @version 1.0
// @since 2020-04-22 10:23
const GroupTimeVO = function(channelTimes, groupId, mute) {
    this.channelTimes = channelTimes; // java.util.List<com.zfoo.app.zapp.common.protocol.group.model.ChannelTimeVO>
    this.groupId = groupId; // long
    this.mute = mute; // boolean
};

GroupTimeVO.prototype.protocolId = function() {
    return 18014;
};

GroupTimeVO.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    if (packet.channelTimes === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.channelTimes.length);
        packet.channelTimes.forEach(element0 => {
            ProtocolManager.getProtocol(18015).writeObject(byteBuffer, element0);
        });
    }
    byteBuffer.writeLong(packet.groupId);
    byteBuffer.writeBoolean(packet.mute);
};

GroupTimeVO.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new GroupTimeVO();
    const result1 = [];
    const size2 = byteBuffer.readInt();
    if (size2 > 0) {
        for (let index3 = 0; index3 < size2; index3++) {
            const result4 = ProtocolManager.getProtocol(18015).readObject(byteBuffer);
            result1.push(result4);
        }
    }
    packet.channelTimes = result1;
    const result5 = byteBuffer.readLong();
    packet.groupId = result5;
    const result6 = byteBuffer.readBoolean(); 
    packet.mute = result6;
    return packet;
};

export default GroupTimeVO;
