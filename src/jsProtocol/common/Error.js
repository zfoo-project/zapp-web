const Error = function(errorCode, errorMessage, module) {
    this.errorCode = errorCode; // int
    this.errorMessage = errorMessage; // java.lang.String
    this.module = module; // int
};

Error.prototype.protocolId = function() {
    return 101;
};

Error.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeInt(packet.errorCode);
    byteBuffer.writeString(packet.errorMessage);
    byteBuffer.writeInt(packet.module);
};

Error.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new Error();
    const result0 = byteBuffer.readInt();
    packet.errorCode = result0;
    const result1 = byteBuffer.readString();
    packet.errorMessage = result1;
    const result2 = byteBuffer.readInt();
    packet.module = result2;
    return packet;
};

export default Error;
