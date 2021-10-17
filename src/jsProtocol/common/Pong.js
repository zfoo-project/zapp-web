const Pong = function(time) {
    this.time = time; // long
};

Pong.prototype.protocolId = function() {
    return 104;
};

Pong.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeLong(packet.time);
};

Pong.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new Pong();
    const result0 = byteBuffer.readLong();
    packet.time = result0;
    return packet;
};

export default Pong;
