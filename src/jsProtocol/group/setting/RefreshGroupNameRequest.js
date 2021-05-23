// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const RefreshGroupNameRequest = function(groupId) {
    this.groupId = groupId; // long
};

RefreshGroupNameRequest.prototype.protocolId = function() {
    return 18206;
};

RefreshGroupNameRequest.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeLong(packet.groupId);
};

RefreshGroupNameRequest.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new RefreshGroupNameRequest();
    const result0 = byteBuffer.readLong();
    packet.groupId = result0;
    return packet;
};

export default RefreshGroupNameRequest;
