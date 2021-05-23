import ProtocolManager from '../../ProtocolManager.js';
// @author jaysunxiao
// @version 1.0
// @since 2020-04-22 11:43
const ChannelBoxVO = function(channels, name) {
    this.channels = channels; // java.util.List<com.zfoo.app.zapp.common.protocol.group.model.ChannelVO>
    this.name = name; // java.lang.String
};

ChannelBoxVO.prototype.protocolId = function() {
    return 18011;
};

ChannelBoxVO.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    if (packet.channels === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.channels.length);
        packet.channels.forEach(element0 => {
            ProtocolManager.getProtocol(18010).writeObject(byteBuffer, element0);
        });
    }
    byteBuffer.writeString(packet.name);
};

ChannelBoxVO.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new ChannelBoxVO();
    const result1 = [];
    const size2 = byteBuffer.readInt();
    if (size2 > 0) {
        for (let index3 = 0; index3 < size2; index3++) {
            const result4 = ProtocolManager.getProtocol(18010).readObject(byteBuffer);
            result1.push(result4);
        }
    }
    packet.channels = result1;
    const result5 = byteBuffer.readString();
    packet.name = result5;
    return packet;
};

export default ChannelBoxVO;
