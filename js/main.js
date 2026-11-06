var dangPhat = false;
var giayHienTai = 45;
var boDemGiay = null;

function moMenuMobile() {
    var menu = document.getElementById("menu-chinh");
    if (menu) {
        if (menu.classList.contains("hien-menu")) {
            menu.classList.remove("hien-menu");
        } else {
            menu.classList.add("hien-menu");
        }
    }
}

function bamNutPlay() {
    var nutPlay = document.getElementById("nut-play-chinh");
    var thanhRange = document.getElementById("thanh-tien-trinh");
    var dongHo = document.getElementById("thoi-gian-chay");

    if (dangPhat == false) {
        dangPhat = true;
        if (nutPlay) {
            nutPlay.innerText = "Tạm dừng";
        }
        boDemGiay = setInterval(function () {
            giayHienTai = giayHienTai + 1;
            if (giayHienTai > 225) {
                giayHienTai = 0;
            }
            if (thanhRange) {
                thanhRange.value = giayHienTai;
            }
            if (dongHo) {
                var phut = Math.floor(giayHienTai / 60);
                var giay = giayHienTai % 60;
                var chuoiPhut = phut < 10 ? "0" + phut : phut;
                var chuoiGiay = giay < 10 ? "0" + giay : giay;
                dongHo.innerText = chuoiPhut + ":" + chuoiGiay;
            }
        }, 1000);
    } else {
        dangPhat = false;
        if (nutPlay) {
            nutPlay.innerText = "Phát nhạc";
        }
        clearInterval(boDemGiay);
    }
}

function phatNhac(tenBai, tenCaSi, linkAnh) {
    var theTenBai = document.getElementById("player-ten-bai");
    var theCaSi = document.getElementById("player-ca-si");
    var theAnh = document.getElementById("player-anh");

    if (theTenBai) {
        theTenBai.innerText = tenBai;
    }
    if (theCaSi) {
        theCaSi.innerText = tenCaSi;
    }
    if (theAnh && linkAnh) {
        theAnh.src = linkAnh;
    }

    giayHienTai = 0;
    dangPhat = false;
    clearInterval(boDemGiay);
    bamNutPlay();
}

function theoDoiCaSi(nut) {
    if (nut.innerText == "Theo dõi") {
        nut.innerText = "Đã theo dõi";
        nut.style.backgroundColor = "#333333";
        nut.style.color = "#ffffff";
    } else {
        nut.innerText = "Theo dõi";
        nut.style.backgroundColor = "#1db954";
        nut.style.color = "#000000";
    }
}

function timKiemNhac() {
    var oTuKhoa = document.getElementById("tu-khoa");
    var oTheLoai = document.getElementById("loc-the-loai");
    var thongBao = document.getElementById("so-ket-qua");

    if (!oTuKhoa) {
        return;
    }

    var tuKhoa = oTuKhoa.value.toLowerCase();
    var theLoai = oTheLoai ? oTheLoai.value.toLowerCase() : "all";

    var danhSachThe = document.getElementsByClassName("item-tim-kiem");
    var dem = 0;

    for (var i = 0; i < danhSachThe.length; i++) {
        var noiDung = danhSachThe[i].innerText.toLowerCase();
        var nhomLoai = danhSachThe[i].getAttribute("loai");

        var trungTuKhoa = noiDung.indexOf(tuKhoa) !== -1;
        var trungTheLoai = (theLoai == "all" || nhomLoai == theLoai);

        if (trungTuKhoa && trungTheLoai) {
            danhSachThe[i].style.display = "block";
            dem = dem + 1;
        } else {
            danhSachThe[i].style.display = "none";
        }
    }

    if (thongBao) {
        thongBao.innerText = dem;
    }
}

function guiLienHe() {
    var hoTen = document.getElementById("ho-ten").value;
    var email = document.getElementById("email-lien-he").value;
    var noiDung = document.getElementById("noi-dung-gop-y").value;

    if (hoTen == "" || email == "" || noiDung == "") {
        alert("Vui lòng nhập đầy đủ họ tên, email và nội dung!");
        return false;
    }

    alert("Cảm ơn bạn " + hoTen + "! Chúng tôi đã nhận được thông tin liên hệ.");
    document.getElementById("form-lien-he").reset();
    return false;
}
