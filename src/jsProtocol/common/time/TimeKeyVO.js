import ProtocolManager from '../../ProtocolManager.js';
// @author jaysunxiao
// @version 1.0
// @since 2020-02-22 17:46
const TimeKeyVO = function(headers, rows) {
    this.headers = headers; // java.util.List<com.zfoo.app.zapp.common.protocol.common.time.TimeKeyHeaderVO>
    this.rows = rows; // java.util.List<com.zfoo.app.zapp.common.protocol.common.time.TimeKeyRowVO>
};

TimeKeyVO.prototype.protocolId = function() {
    return 132;
};

TimeKeyVO.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    if (packet.headers === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.headers.length);
        packet.headers.forEach(element0 => {
            ProtocolManager.getProtocol(130).writeObject(byteBuffer, element0);
        });
    }
    if (packet.rows === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.rows.length);
        packet.rows.forEach(element1 => {
            ProtocolManager.getProtocol(131).writeObject(byteBuffer, element1);
        });
    }
};

TimeKeyVO.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new TimeKeyVO();
    const result2 = [];
    const size3 = byteBuffer.readInt();
    if (size3 > 0) {
        for (let index4 = 0; index4 < size3; index4++) {
            const result5 = ProtocolManager.getProtocol(130).readObject(byteBuffer);
            result2.push(result5);
        }
    }
    packet.headers = result2;
    const result6 = [];
    const size7 = byteBuffer.readInt();
    if (size7 > 0) {
        for (let index8 = 0; index8 < size7; index8++) {
            const result9 = ProtocolManager.getProtocol(131).readObject(byteBuffer);
            result6.push(result9);
        }
    }
    packet.rows = result6;
    return packet;
};

export default TimeKeyVO;
