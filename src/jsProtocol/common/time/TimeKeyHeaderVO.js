// @author jaysunxiao
// @version 1.0
// @since 2020-02-22 17:41
const TimeKeyHeaderVO = function(text, value) {
    this.text = text; // java.lang.String
    this.value = value; // java.lang.String
};

TimeKeyHeaderVO.prototype.protocolId = function() {
    return 130;
};

TimeKeyHeaderVO.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeString(packet.text);
    byteBuffer.writeString(packet.value);
};

TimeKeyHeaderVO.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new TimeKeyHeaderVO();
    const result0 = byteBuffer.readString();
    packet.text = result0;
    const result1 = byteBuffer.readString();
    packet.value = result1;
    return packet;
};

export default TimeKeyHeaderVO;
