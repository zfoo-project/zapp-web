// @author jaysunxiao
// @version 1.0
// @since 2020-02-22 17:44
const TimeKeyRowVO = function(a, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z) {
    this.a = a; // java.lang.String
    this.aa = aa; // java.lang.String
    this.ab = ab; // java.lang.String
    this.ac = ac; // java.lang.String
    this.ad = ad; // java.lang.String
    this.ae = ae; // java.lang.String
    this.af = af; // java.lang.String
    this.ag = ag; // java.lang.String
    this.ah = ah; // java.lang.String
    this.ai = ai; // java.lang.String
    this.aj = aj; // java.lang.String
    this.ak = ak; // java.lang.String
    this.al = al; // java.lang.String
    this.am = am; // java.lang.String
    this.an = an; // java.lang.String
    this.ao = ao; // java.lang.String
    this.ap = ap; // java.lang.String
    this.aq = aq; // java.lang.String
    this.ar = ar; // java.lang.String
    this.as = as; // java.lang.String
    this.at = at; // java.lang.String
    this.au = au; // java.lang.String
    this.av = av; // java.lang.String
    this.aw = aw; // java.lang.String
    this.ax = ax; // java.lang.String
    this.ay = ay; // java.lang.String
    this.az = az; // java.lang.String
    this.b = b; // java.lang.String
    this.c = c; // java.lang.String
    this.d = d; // java.lang.String
    this.e = e; // java.lang.String
    this.f = f; // java.lang.String
    this.g = g; // java.lang.String
    this.h = h; // java.lang.String
    this.i = i; // java.lang.String
    this.j = j; // java.lang.String
    this.k = k; // java.lang.String
    this.l = l; // java.lang.String
    this.m = m; // java.lang.String
    this.n = n; // java.lang.String
    this.o = o; // java.lang.String
    this.p = p; // java.lang.String
    this.q = q; // java.lang.String
    this.r = r; // java.lang.String
    this.s = s; // java.lang.String
    this.t = t; // java.lang.String
    this.u = u; // java.lang.String
    this.v = v; // java.lang.String
    this.w = w; // java.lang.String
    this.x = x; // java.lang.String
    this.y = y; // java.lang.String
    this.z = z; // java.lang.String
};

TimeKeyRowVO.prototype.protocolId = function() {
    return 131;
};

TimeKeyRowVO.write = function(byteBuffer, packet) {
    if (byteBuffer.writePacketFlag(packet)) {
        return;
    }
    byteBuffer.writeString(packet.a);
    byteBuffer.writeString(packet.aa);
    byteBuffer.writeString(packet.ab);
    byteBuffer.writeString(packet.ac);
    byteBuffer.writeString(packet.ad);
    byteBuffer.writeString(packet.ae);
    byteBuffer.writeString(packet.af);
    byteBuffer.writeString(packet.ag);
    byteBuffer.writeString(packet.ah);
    byteBuffer.writeString(packet.ai);
    byteBuffer.writeString(packet.aj);
    byteBuffer.writeString(packet.ak);
    byteBuffer.writeString(packet.al);
    byteBuffer.writeString(packet.am);
    byteBuffer.writeString(packet.an);
    byteBuffer.writeString(packet.ao);
    byteBuffer.writeString(packet.ap);
    byteBuffer.writeString(packet.aq);
    byteBuffer.writeString(packet.ar);
    byteBuffer.writeString(packet.as);
    byteBuffer.writeString(packet.at);
    byteBuffer.writeString(packet.au);
    byteBuffer.writeString(packet.av);
    byteBuffer.writeString(packet.aw);
    byteBuffer.writeString(packet.ax);
    byteBuffer.writeString(packet.ay);
    byteBuffer.writeString(packet.az);
    byteBuffer.writeString(packet.b);
    byteBuffer.writeString(packet.c);
    byteBuffer.writeString(packet.d);
    byteBuffer.writeString(packet.e);
    byteBuffer.writeString(packet.f);
    byteBuffer.writeString(packet.g);
    byteBuffer.writeString(packet.h);
    byteBuffer.writeString(packet.i);
    byteBuffer.writeString(packet.j);
    byteBuffer.writeString(packet.k);
    byteBuffer.writeString(packet.l);
    byteBuffer.writeString(packet.m);
    byteBuffer.writeString(packet.n);
    byteBuffer.writeString(packet.o);
    byteBuffer.writeString(packet.p);
    byteBuffer.writeString(packet.q);
    byteBuffer.writeString(packet.r);
    byteBuffer.writeString(packet.s);
    byteBuffer.writeString(packet.t);
    byteBuffer.writeString(packet.u);
    byteBuffer.writeString(packet.v);
    byteBuffer.writeString(packet.w);
    byteBuffer.writeString(packet.x);
    byteBuffer.writeString(packet.y);
    byteBuffer.writeString(packet.z);
};

TimeKeyRowVO.read = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new TimeKeyRowVO();
    const result0 = byteBuffer.readString();
    packet.a = result0;
    const result1 = byteBuffer.readString();
    packet.aa = result1;
    const result2 = byteBuffer.readString();
    packet.ab = result2;
    const result3 = byteBuffer.readString();
    packet.ac = result3;
    const result4 = byteBuffer.readString();
    packet.ad = result4;
    const result5 = byteBuffer.readString();
    packet.ae = result5;
    const result6 = byteBuffer.readString();
    packet.af = result6;
    const result7 = byteBuffer.readString();
    packet.ag = result7;
    const result8 = byteBuffer.readString();
    packet.ah = result8;
    const result9 = byteBuffer.readString();
    packet.ai = result9;
    const result10 = byteBuffer.readString();
    packet.aj = result10;
    const result11 = byteBuffer.readString();
    packet.ak = result11;
    const result12 = byteBuffer.readString();
    packet.al = result12;
    const result13 = byteBuffer.readString();
    packet.am = result13;
    const result14 = byteBuffer.readString();
    packet.an = result14;
    const result15 = byteBuffer.readString();
    packet.ao = result15;
    const result16 = byteBuffer.readString();
    packet.ap = result16;
    const result17 = byteBuffer.readString();
    packet.aq = result17;
    const result18 = byteBuffer.readString();
    packet.ar = result18;
    const result19 = byteBuffer.readString();
    packet.as = result19;
    const result20 = byteBuffer.readString();
    packet.at = result20;
    const result21 = byteBuffer.readString();
    packet.au = result21;
    const result22 = byteBuffer.readString();
    packet.av = result22;
    const result23 = byteBuffer.readString();
    packet.aw = result23;
    const result24 = byteBuffer.readString();
    packet.ax = result24;
    const result25 = byteBuffer.readString();
    packet.ay = result25;
    const result26 = byteBuffer.readString();
    packet.az = result26;
    const result27 = byteBuffer.readString();
    packet.b = result27;
    const result28 = byteBuffer.readString();
    packet.c = result28;
    const result29 = byteBuffer.readString();
    packet.d = result29;
    const result30 = byteBuffer.readString();
    packet.e = result30;
    const result31 = byteBuffer.readString();
    packet.f = result31;
    const result32 = byteBuffer.readString();
    packet.g = result32;
    const result33 = byteBuffer.readString();
    packet.h = result33;
    const result34 = byteBuffer.readString();
    packet.i = result34;
    const result35 = byteBuffer.readString();
    packet.j = result35;
    const result36 = byteBuffer.readString();
    packet.k = result36;
    const result37 = byteBuffer.readString();
    packet.l = result37;
    const result38 = byteBuffer.readString();
    packet.m = result38;
    const result39 = byteBuffer.readString();
    packet.n = result39;
    const result40 = byteBuffer.readString();
    packet.o = result40;
    const result41 = byteBuffer.readString();
    packet.p = result41;
    const result42 = byteBuffer.readString();
    packet.q = result42;
    const result43 = byteBuffer.readString();
    packet.r = result43;
    const result44 = byteBuffer.readString();
    packet.s = result44;
    const result45 = byteBuffer.readString();
    packet.t = result45;
    const result46 = byteBuffer.readString();
    packet.u = result46;
    const result47 = byteBuffer.readString();
    packet.v = result47;
    const result48 = byteBuffer.readString();
    packet.w = result48;
    const result49 = byteBuffer.readString();
    packet.x = result49;
    const result50 = byteBuffer.readString();
    packet.y = result50;
    const result51 = byteBuffer.readString();
    packet.z = result51;
    return packet;
};

export default TimeKeyRowVO;
