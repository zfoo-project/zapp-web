const Heartbeat = function() {
};

Heartbeat.prototype.protocolId = function() {
    return 102;
};

Heartbeat.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
};

Heartbeat.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new Heartbeat();
    return packet;
};

export default Heartbeat;
