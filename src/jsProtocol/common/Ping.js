const Ping = function() {
};

Ping.prototype.protocolId = function() {
    return 103;
};

Ping.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
};

Ping.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new Ping();
    return packet;
};

export default Ping;
