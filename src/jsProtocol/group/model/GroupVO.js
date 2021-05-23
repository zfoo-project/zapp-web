import ProtocolManager from '../../ProtocolManager.js';
// @author jaysunxiao
// @version 1.0
// @since 2020-04-22 11:43
const GroupVO = function(adminId, avatar, background, channelBoxes, createTime, groupAuths, id, name) {
    this.adminId = adminId; // long
    this.avatar = avatar; // java.lang.String
    this.background = background; // java.lang.String
    this.channelBoxes = channelBoxes; // java.util.List<com.zfoo.app.zapp.common.protocol.group.model.ChannelBoxVO>
    this.createTime = createTime; // long
    this.groupAuths = groupAuths; // java.util.List<com.zfoo.app.zapp.common.protocol.group.model.GroupAuthVO>
    this.id = id; // long
    this.name = name; // java.lang.String
};

GroupVO.prototype.protocolId = function() {
    return 18000;
};

GroupVO.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeLong(packet.adminId);
    byteBuffer.writeString(packet.avatar);
    byteBuffer.writeString(packet.background);
    if (packet.channelBoxes === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.channelBoxes.length);
        packet.channelBoxes.forEach(element0 => {
            ProtocolManager.getProtocol(18011).writeObject(byteBuffer, element0);
        });
    }
    byteBuffer.writeLong(packet.createTime);
    if (packet.groupAuths === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.groupAuths.length);
        packet.groupAuths.forEach(element1 => {
            ProtocolManager.getProtocol(18001).writeObject(byteBuffer, element1);
        });
    }
    byteBuffer.writeLong(packet.id);
    byteBuffer.writeString(packet.name);
};

GroupVO.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new GroupVO();
    const result2 = byteBuffer.readLong();
    packet.adminId = result2;
    const result3 = byteBuffer.readString();
    packet.avatar = result3;
    const result4 = byteBuffer.readString();
    packet.background = result4;
    const result5 = [];
    const size6 = byteBuffer.readInt();
    if (size6 > 0) {
        for (let index7 = 0; index7 < size6; index7++) {
            const result8 = ProtocolManager.getProtocol(18011).readObject(byteBuffer);
            result5.push(result8);
        }
    }
    packet.channelBoxes = result5;
    const result9 = byteBuffer.readLong();
    packet.createTime = result9;
    const result10 = [];
    const size11 = byteBuffer.readInt();
    if (size11 > 0) {
        for (let index12 = 0; index12 < size11; index12++) {
            const result13 = ProtocolManager.getProtocol(18001).readObject(byteBuffer);
            result10.push(result13);
        }
    }
    packet.groupAuths = result10;
    const result14 = byteBuffer.readLong();
    packet.id = result14;
    const result15 = byteBuffer.readString();
    packet.name = result15;
    return packet;
};

export default GroupVO;
