// @author jaysunxiao
// @version 1.0
// @since 2020-02-25 13:12
const TimeLinkAlbumVO = function(album, links) {
    this.album = album; // java.lang.String
    this.links = links; // java.util.List<java.lang.Long>
};

TimeLinkAlbumVO.prototype.protocolId = function() {
    return 133;
};

TimeLinkAlbumVO.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeString(packet.album);
    if (packet.links === null) {
        byteBuffer.writeInt(0);
    } else {
        byteBuffer.writeInt(packet.links.length);
        packet.links.forEach(element0 => {
            byteBuffer.writeLong(element0);
        });
    }
};

TimeLinkAlbumVO.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new TimeLinkAlbumVO();
    const result1 = byteBuffer.readString();
    packet.album = result1;
    const result2 = [];
    const size3 = byteBuffer.readInt();
    if (size3 > 0) {
        for (let index4 = 0; index4 < size3; index4++) {
            const result5 = byteBuffer.readLong();
            result2.push(result5);
        }
    }
    packet.links = result2;
    return packet;
};

export default TimeLinkAlbumVO;
