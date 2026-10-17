function capNhatDongHo() {
    const now = new Date();

    const gio = now.getHours();
    const phut = now.getMinutes();
    const giay = now.getSeconds();

    const h = String(gio).padStart(2, "0");
    const m = String(phut).padStart(2, "0");
    const s = String(giay).padStart(2, "0");

    function hienThiSo(id, so) {
        document.getElementById(id).src = "Anh/" + so + ".gif";
    }

    hienThiSo("gio1", h[0]);
    hienThiSo("gio2", h[1]);

    hienThiSo("phut1", m[0]);
    hienThiSo("phut2", m[1]);

    hienThiSo("giay1", s[0]);
    hienThiSo("giay2", s[1]);

    const loiChao = document.getElementById("loiChao");

    if (gio >= 5 && gio < 12) {
        loiChao.textContent = "Chào buổi sáng";
    } else if (gio >= 12 && gio < 18) {
        loiChao.textContent = "Chào buổi chiều";
    } else {
        loiChao.textContent = "Chào buổi tối";
    }
}

capNhatDongHo();

setInterval(capNhatDongHo, 1000);