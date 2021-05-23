const Pong = function(time) {
    this.time = time; // long
};

Pong.prototype.protocolId = function() {
    return 104;
};

Pong.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeLong(packet.time);
};

Pong.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new Pong();
    const result0 = byteBuffer.readLong();
    packet.time = result0;
    return packet;
};

export default Pong;
