const phiHoaDonNhaDan = 4.5;
const phiHoaDonDoanhNghiep = 15;
const phiDiChVuNhaDan = 20.5;
const phiDiChVuDoanhNghiep = 75;
const kenhCaoCapNhaDan = 7.5;
const kenhCaoCapDoanhNghiep = 50;
// var ketNoi =
var tongTien = 0;
function hoaDonNhaDan(kenhCaoCap) {
  if (kenhCaoCap >= 1) {
    tongTien =
      kenhCaoCap * kenhCaoCapNhaDan + phiHoaDonNhaDan + phiDiChVuNhaDan;
  } else {
    tongTien = 0;
  }
}
function hoaDonDoanhNghiep(kenhCaoCap, ketNoi) {
  if (ketNoi > 10 && kenhCaoCap > 0) {
    tongTien =
      phiHoaDonDoanhNghiep +
      phiDiChVuDoanhNghiep +
      kenhCaoCapDoanhNghiep * kenhCaoCap +
      (ketNoi - 10) * 5;
  } else if (ketNoi < 10 && kenhCaoCap > 0) {
    tongTien =
      phiHoaDonDoanhNghiep +
      phiDiChVuDoanhNghiep +
      kenhCaoCapDoanhNghiep * kenhCaoCap;
  }
}
function chonLoaiHinh() {
  var loaiHinh = document.getElementById("loaiHinh").value;

  if (loaiHinh == 1) {
    return "nhaDan";
  } else if (loaiHinh == 2) {
    return "doanhNghiep";
  }
}
document.getElementById("btnTinhTienCap").onclick = function (event) {
  event.preventDefault();
  var maKhachHang = document.getElementById("txtMa").value;
  var soKetNoi = document.getElementById("txtSoKetNoi").value;
  var kenhCaoCap = document.getElementById("txtSoKenhDangKy").value;
  switch (chonLoaiHinh()) {
    case "nhaDan":
      hoaDonNhaDan(kenhCaoCap);
      break;
    case "doanhNghiep":
      hoaDonDoanhNghiep(kenhCaoCap, soKetNoi);
      break;
  }

  var info = "<div>Tên :" + maKhachHang + "</div>";
  info += "<div> Tổng thuế phải trả :" + tongTien + "USD </div>";
  document.getElementById("footercard3").innerHTML = info;
};
