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

UserCache.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
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
    byteBuffer.writePacketArray(packet.items, 113);
    byteBuffer.writePacketArray(packet.locations, 113);
    byteBuffer.writeString(packet.name);
    byteBuffer.writeLong(packet.normal);
    byteBuffer.writePacketArray(packet.persons, 113);
    byteBuffer.writeString(packet.signature);
    byteBuffer.writeInt(packet.starNum);
};

UserCache.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new UserCache();
    const result0 = byteBuffer.readString();
    packet.avatar = result0;
    const result1 = byteBuffer.readString();
    packet.background = result1;
    const result2 = byteBuffer.readLong();
    packet.coin = result2;
    const result3 = byteBuffer.readString();
    packet.custom = result3;
    const result4 = byteBuffer.readLong();
    packet.customTime = result4;
    const result5 = byteBuffer.readInt();
    packet.fanNum = result5;
    const result6 = byteBuffer.readInt();
    packet.followNum = result6;
    const result7 = byteBuffer.readLong();
    packet.free = result7;
    const result8 = byteBuffer.readInt();
    packet.gender = result8;
    const result9 = byteBuffer.readLong();
    packet.id = result9;
    const list10 = byteBuffer.readPacketArray(113);
    packet.items = list10;
    const list11 = byteBuffer.readPacketArray(113);
    packet.locations = list11;
    const result12 = byteBuffer.readString();
    packet.name = result12;
    const result13 = byteBuffer.readLong();
    packet.normal = result13;
    const list14 = byteBuffer.readPacketArray(113);
    packet.persons = list14;
    const result15 = byteBuffer.readString();
    packet.signature = result15;
    const result16 = byteBuffer.readInt();
    packet.starNum = result16;
    return packet;
};

export default UserCache;
