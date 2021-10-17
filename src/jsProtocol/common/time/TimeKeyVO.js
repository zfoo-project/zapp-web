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

TimeKeyVO.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writePacketArray(packet.headers, 130);
    byteBuffer.writePacketArray(packet.rows, 131);
};

TimeKeyVO.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new TimeKeyVO();
    const list0 = byteBuffer.readPacketArray(130);
    packet.headers = list0;
    const list1 = byteBuffer.readPacketArray(131);
    packet.rows = list1;
    return packet;
};

export default TimeKeyVO;
