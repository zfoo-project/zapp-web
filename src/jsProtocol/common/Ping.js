const Ping = function() {
};

Ping.prototype.protocolId = function() {
    return 103;
};

Ping.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
};

Ping.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new Ping();
    return packet;
};

export default Ping;
