const PairLS = function(key, value) {
    this.key = key; // long
    this.value = value; // java.lang.String
};

PairLS.prototype.protocolId = function() {
    return 113;
};

PairLS.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeLong(packet.key);
    byteBuffer.writeString(packet.value);
};

PairLS.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new PairLS();
    const result0 = byteBuffer.readLong();
    packet.key = result0;
    const result1 = byteBuffer.readString();
    packet.value = result1;
    return packet;
};

export default PairLS;
