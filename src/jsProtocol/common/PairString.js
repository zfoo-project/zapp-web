const PairString = function(key, value) {
    this.key = key; // java.lang.String
    this.value = value; // java.lang.String
};

PairString.prototype.protocolId = function() {
    return 112;
};

PairString.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeString(packet.key);
    byteBuffer.writeString(packet.value);
};

PairString.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new PairString();
    const result0 = byteBuffer.readString();
    packet.key = result0;
    const result1 = byteBuffer.readString();
    packet.value = result1;
    return packet;
};

export default PairString;
