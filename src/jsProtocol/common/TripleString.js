const TripleString = function(left, middle, right) {
    this.left = left; // java.lang.String
    this.middle = middle; // java.lang.String
    this.right = right; // java.lang.String
};

TripleString.prototype.protocolId = function() {
    return 115;
};

TripleString.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeString(packet.left);
    byteBuffer.writeString(packet.middle);
    byteBuffer.writeString(packet.right);
};

TripleString.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new TripleString();
    const result0 = byteBuffer.readString();
    packet.left = result0;
    const result1 = byteBuffer.readString();
    packet.middle = result1;
    const result2 = byteBuffer.readString();
    packet.right = result2;
    return packet;
};

export default TripleString;
