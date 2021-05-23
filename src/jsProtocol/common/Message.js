const Message = function(code, message, module) {
    this.code = code; // int
    this.message = message; // java.lang.String
    this.module = module; // byte
};

Message.prototype.protocolId = function() {
    return 100;
};

Message.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeInt(packet.code);
    byteBuffer.writeString(packet.message);
    byteBuffer.writeByte(packet.module);
};

Message.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new Message();
    const result0 = byteBuffer.readInt();
    packet.code = result0;
    const result1 = byteBuffer.readString();
    packet.message = result1;
    const result2 = byteBuffer.readByte();
    packet.module = result2;
    return packet;
};

export default Message;
