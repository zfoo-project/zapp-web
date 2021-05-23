// 创建群组
//
// @author jaysunxiao
// @version 1.0
// @since 2020-04-22 13:20
const CreateGroupRequest = function(groupName) {
    this.groupName = groupName; // java.lang.String
};

CreateGroupRequest.prototype.protocolId = function() {
    return 1300;
};

CreateGroupRequest.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeString(packet.groupName);
};

CreateGroupRequest.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new CreateGroupRequest();
    const result0 = byteBuffer.readString();
    packet.groupName = result0;
    return packet;
};

export default CreateGroupRequest;
