const TripleLSS = function(left, middle, right) {
    this.left = left; // long
    this.middle = middle; // java.lang.String
    this.right = right; // java.lang.String
};

TripleLSS.prototype.protocolId = function() {
    return 116;
};

TripleLSS.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeLong(packet.left);
    byteBuffer.writeString(packet.middle);
    byteBuffer.writeString(packet.right);
};

TripleLSS.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new TripleLSS();
    const result0 = byteBuffer.readLong();
    packet.left = result0;
    const result1 = byteBuffer.readString();
    packet.middle = result1;
    const result2 = byteBuffer.readString();
    packet.right = result2;
    return packet;
};

export default TripleLSS;
