const Heartbeat = function() {
};

Heartbeat.prototype.protocolId = function() {
    return 102;
};

Heartbeat.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
};

Heartbeat.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new Heartbeat();
    return packet;
};

export default Heartbeat;
