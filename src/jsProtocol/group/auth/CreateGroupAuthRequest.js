// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const CreateGroupAuthRequest = function(groupId, name) {
    this.groupId = groupId; // long
    // 身份名称
    this.name = name; // java.lang.String
};

CreateGroupAuthRequest.prototype.protocolId = function() {
    return 18500;
};

CreateGroupAuthRequest.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeLong(packet.groupId);
    byteBuffer.writeString(packet.name);
};

CreateGroupAuthRequest.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new CreateGroupAuthRequest();
    const result0 = byteBuffer.readLong();
    packet.groupId = result0;
    const result1 = byteBuffer.readString();
    packet.name = result1;
    return packet;
};

export default CreateGroupAuthRequest;
