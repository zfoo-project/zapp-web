import ProtocolManager from '../../ProtocolManager.js';
// @author jaysunxiao
// @version 1.0
// @since 2019-11-08 11:00
const UserCache = function(avatar, background, coin, custom, customTime, fanNum, followNum, free, gender, id, items, locations, name, normal, persons, signature, starNum) {
    this.avatar = avatar; // java.lang.String
    this.background = background; // java.lang.String
    this.coin = coin; // long
    this.custom = custom; // java.lang.String
    this.customTime = customTime; // long
    this.fanNum = fanNum; // int
    this.followNum = followNum; // int
    this.free = free; // long
    this.gender = gender; // int
    this.id = id; // long
    this.items = items; // java.util.List<com.zfoo.net.packet.common.PairLS>
    this.locations = locations; // java.util.List<com.zfoo.net.packet.common.PairLS>
    this.name = name; // java.lang.String
    this.normal = normal; // long
    this.persons = persons; // java.util.List<com.zfoo.net.packet.common.PairLS>
    this.signature = signature; // java.lang.String
    this.starNum = starNum; // int
};

UserCache.prototype.protocolId = function() {
    return 3000;
};

UserCache.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeString(packet.avatar);
    byteBuffer.writeString(packet.background);
    byteBuffer.writeLong(packet.coin);
    byteBuffer.writeString(packet.custom);
    byteBuffer.writeLong(packet.customTime);
    byteBuffer.writeInt(packet.fanNum);
    byteBuffer.writeInt(packet.followNum);
    byteBuffer.writeLong(packet.free);
    byteBuffer.writeInt(packet.gender);
    byteBuffer.writeLong(packet.id);
    if (packet.items === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.items.length);
        packet.items.forEach(element0 => {
            ProtocolManager.getProtocol(113).writeObject(byteBuffer, element0);
        });
    }
    if (packet.locations === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.locations.length);
        packet.locations.forEach(element1 => {
            ProtocolManager.getProtocol(113).writeObject(byteBuffer, element1);
        });
    }
    byteBuffer.writeString(packet.name);
    byteBuffer.writeLong(packet.normal);
    if (packet.persons === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.persons.length);
        packet.persons.forEach(element2 => {
            ProtocolManager.getProtocol(113).writeObject(byteBuffer, element2);
        });
    }
    byteBuffer.writeString(packet.signature);
    byteBuffer.writeInt(packet.starNum);
};

UserCache.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new UserCache();
    const result3 = byteBuffer.readString();
    packet.avatar = result3;
    const result4 = byteBuffer.readString();
    packet.background = result4;
    const result5 = byteBuffer.readLong();
    packet.coin = result5;
    const result6 = byteBuffer.readString();
    packet.custom = result6;
    const result7 = byteBuffer.readLong();
    packet.customTime = result7;
    const result8 = byteBuffer.readInt();
    packet.fanNum = result8;
    const result9 = byteBuffer.readInt();
    packet.followNum = result9;
    const result10 = byteBuffer.readLong();
    packet.free = result10;
    const result11 = byteBuffer.readInt();
    packet.gender = result11;
    const result12 = byteBuffer.readLong();
    packet.id = result12;
    const result13 = [];
    const size14 = byteBuffer.readInt();
    if (size14 > 0) {
        for (let index15 = 0; index15 < size14; index15++) {
            const result16 = ProtocolManager.getProtocol(113).readObject(byteBuffer);
            result13.push(result16);
        }
    }
    packet.items = result13;
    const result17 = [];
    const size18 = byteBuffer.readInt();
    if (size18 > 0) {
        for (let index19 = 0; index19 < size18; index19++) {
            const result20 = ProtocolManager.getProtocol(113).readObject(byteBuffer);
            result17.push(result20);
        }
    }
    packet.locations = result17;
    const result21 = byteBuffer.readString();
    packet.name = result21;
    const result22 = byteBuffer.readLong();
    packet.normal = result22;
    const result23 = [];
    const size24 = byteBuffer.readInt();
    if (size24 > 0) {
        for (let index25 = 0; index25 < size24; index25++) {
            const result26 = ProtocolManager.getProtocol(113).readObject(byteBuffer);
            result23.push(result26);
        }
    }
    packet.persons = result23;
    const result27 = byteBuffer.readString();
    packet.signature = result27;
    const result28 = byteBuffer.readInt();
    packet.starNum = result28;
    return packet;
};

export default UserCache;
