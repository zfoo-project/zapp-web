import ProtocolManager from '../../ProtocolManager.js';
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

ChannelVO.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    if (packet.channelAuths === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.channelAuths.length);
        packet.channelAuths.forEach(element0 => {
            ProtocolManager.getProtocol(18012).writeObject(byteBuffer, element0);
        });
    }
    byteBuffer.writeLong(packet.id);
    byteBuffer.writeString(packet.name);
    byteBuffer.writeLong(packet.refreshTime);
};

ChannelVO.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new ChannelVO();
    const result1 = [];
    const size2 = byteBuffer.readInt();
    if (size2 > 0) {
        for (let index3 = 0; index3 < size2; index3++) {
            const result4 = ProtocolManager.getProtocol(18012).readObject(byteBuffer);
            result1.push(result4);
        }
    }
    packet.channelAuths = result1;
    const result5 = byteBuffer.readLong();
    packet.id = result5;
    const result6 = byteBuffer.readString();
    packet.name = result6;
    const result7 = byteBuffer.readLong();
    packet.refreshTime = result7;
    return packet;
};

export default ChannelVO;
