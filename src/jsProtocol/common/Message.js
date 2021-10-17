const Message = function(code, message, module) {
    this.code = code; // int
    this.message = message; // java.lang.String
    this.module = module; // byte
};

Message.prototype.protocolId = function() {
    return 100;
};

Message.write = function(buffer, packet) {
    if (buffer.writePacketFlag(packet)) {
        return;
    }
    buffer.writeInt(packet.code);
    buffer.writeString(packet.message);
    buffer.writeByte(packet.module);
};

Message.read = function(buffer) {
    if (!buffer.readBoolean()) {
        return null;
    }
    const packet = new Message();
    const result0 = buffer.readInt();
    packet.code = result0;
    const result1 = buffer.readString();
    packet.message = result1;
    const result2 = buffer.readByte();
    packet.module = result2;
    return packet;
};

export default Message;
