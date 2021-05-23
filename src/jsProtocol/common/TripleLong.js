const TripleLong = function(left, middle, right) {
    this.left = left; // long
    this.middle = middle; // long
    this.right = right; // long
};

TripleLong.prototype.protocolId = function() {
    return 114;
};

TripleLong.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeLong(packet.left);
    byteBuffer.writeLong(packet.middle);
    byteBuffer.writeLong(packet.right);
};

TripleLong.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new TripleLong();
    const result0 = byteBuffer.readLong();
    packet.left = result0;
    const result1 = byteBuffer.readLong();
    packet.middle = result1;
    const result2 = byteBuffer.readLong();
    packet.right = result2;
    return packet;
};

export default TripleLong;
