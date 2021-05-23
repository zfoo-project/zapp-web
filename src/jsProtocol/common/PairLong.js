const PairLong = function(key, value) {
    this.key = key; // long
    this.value = value; // long
};

PairLong.prototype.protocolId = function() {
    return 111;
};

PairLong.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeLong(packet.key);
    byteBuffer.writeLong(packet.value);
};

PairLong.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new PairLong();
    const result0 = byteBuffer.readLong();
    packet.key = result0;
    const result1 = byteBuffer.readLong();
    packet.value = result1;
    return packet;
};

export default PairLong;
