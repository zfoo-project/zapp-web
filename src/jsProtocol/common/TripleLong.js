const TripleLong = function(left, middle, right) {
    this.left = left; // long
    this.middle = middle; // long
    this.right = right; // long
};

TripleLong.prototype.protocolId = function() {
    return 114;
};

TripleLong.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeLong(packet.left);
    byteBuffer.writeLong(packet.middle);
    byteBuffer.writeLong(packet.right);
};

TripleLong.read = function(byteBuffer) {
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
