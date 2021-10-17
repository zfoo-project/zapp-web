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

TimeLinkAlbumVO.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeString(packet.album);
    byteBuffer.writeLongArray(packet.links);
};

TimeLinkAlbumVO.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new TimeLinkAlbumVO();
    const result0 = byteBuffer.readString();
    packet.album = result0;
    const list1 = byteBuffer.readLongArray();
    packet.links = list1;
    return packet;
};

export default TimeLinkAlbumVO;
