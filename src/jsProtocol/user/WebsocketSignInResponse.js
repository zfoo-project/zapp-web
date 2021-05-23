import ProtocolManager from '../ProtocolManager.js';
// @author jaysunxiao
// @version 1.0
// @since 2019-10-15 17:55
const WebsocketSignInResponse = function(applyFriends, blacklist, friendInfoMap, friends, groupMemberSimpleVOs, groups, userId) {
    this.applyFriends = applyFriends; // java.util.List<com.zfoo.app.zapp.common.protocol.friend.model.ApplyFriendVO>
    this.blacklist = blacklist; // java.util.List<com.zfoo.app.zapp.common.protocol.cache.model.UserCache>
    this.friendInfoMap = friendInfoMap; // java.util.Map<java.lang.Long, com.zfoo.app.zapp.common.protocol.friend.model.FriendInfoVO>
    this.friends = friends; // java.util.List<com.zfoo.app.zapp.common.protocol.cache.model.UserCache>
    // 用户所拥有的群组对应的权限信息
    this.groupMemberSimpleVOs = groupMemberSimpleVOs; // java.util.List<com.zfoo.app.zapp.common.protocol.group.model.GroupMemberSimpleVO>
    // 用户拥有的所有群组信息
    this.groups = groups; // java.util.List<com.zfoo.app.zapp.common.protocol.group.model.GroupVO>
    this.userId = userId; // long
};

WebsocketSignInResponse.prototype.protocolId = function() {
    return 1001;
};

WebsocketSignInResponse.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    if (packet.applyFriends === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.applyFriends.length);
        packet.applyFriends.forEach(element0 => {
            ProtocolManager.getProtocol(15000).writeObject(byteBuffer, element0);
        });
    }
    if (packet.blacklist === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.blacklist.length);
        packet.blacklist.forEach(element1 => {
            ProtocolManager.getProtocol(3000).writeObject(byteBuffer, element1);
        });
    }
    if (packet.friendInfoMap === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.friendInfoMap.size);
        packet.friendInfoMap.forEach((value3, key2) => {
            byteBuffer.writeLong(key2);
            ProtocolManager.getProtocol(15001).writeObject(byteBuffer, value3);
        });
    }
    if (packet.friends === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.friends.length);
        packet.friends.forEach(element4 => {
            ProtocolManager.getProtocol(3000).writeObject(byteBuffer, element4);
        });
    }
    if (packet.groupMemberSimpleVOs === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.groupMemberSimpleVOs.length);
        packet.groupMemberSimpleVOs.forEach(element5 => {
            ProtocolManager.getProtocol(18013).writeObject(byteBuffer, element5);
        });
    }
    if (packet.groups === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.groups.length);
        packet.groups.forEach(element6 => {
            ProtocolManager.getProtocol(18000).writeObject(byteBuffer, element6);
        });
    }
    byteBuffer.writeLong(packet.userId);
};

WebsocketSignInResponse.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new WebsocketSignInResponse();
    const result7 = [];
    const size8 = byteBuffer.readInt();
    if (size8 > 0) {
        for (let index9 = 0; index9 < size8; index9++) {
            const result10 = ProtocolManager.getProtocol(15000).readObject(byteBuffer);
            result7.push(result10);
        }
    }
    packet.applyFriends = result7;
    const result11 = [];
    const size12 = byteBuffer.readInt();
    if (size12 > 0) {
        for (let index13 = 0; index13 < size12; index13++) {
            const result14 = ProtocolManager.getProtocol(3000).readObject(byteBuffer);
            result11.push(result14);
        }
    }
    packet.blacklist = result11;
    const result15 = new Map();
    const size16 = byteBuffer.readInt();
    if (size16 > 0) {
        for (let index17 = 0; index17 < size16; index17++) {
            const result18 = byteBuffer.readLong();
            const result19 = ProtocolManager.getProtocol(15001).readObject(byteBuffer);
            result15.set(result18, result19);
        }
    }
    packet.friendInfoMap = result15;
    const result20 = [];
    const size21 = byteBuffer.readInt();
    if (size21 > 0) {
        for (let index22 = 0; index22 < size21; index22++) {
            const result23 = ProtocolManager.getProtocol(3000).readObject(byteBuffer);
            result20.push(result23);
        }
    }
    packet.friends = result20;
    const result24 = [];
    const size25 = byteBuffer.readInt();
    if (size25 > 0) {
        for (let index26 = 0; index26 < size25; index26++) {
            const result27 = ProtocolManager.getProtocol(18013).readObject(byteBuffer);
            result24.push(result27);
        }
    }
    packet.groupMemberSimpleVOs = result24;
    const result28 = [];
    const size29 = byteBuffer.readInt();
    if (size29 > 0) {
        for (let index30 = 0; index30 < size29; index30++) {
            const result31 = ProtocolManager.getProtocol(18000).readObject(byteBuffer);
            result28.push(result31);
        }
    }
    packet.groups = result28;
    const result32 = byteBuffer.readLong();
    packet.userId = result32;
    return packet;
};

export default WebsocketSignInResponse;
