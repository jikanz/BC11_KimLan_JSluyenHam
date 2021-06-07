const gia50KmDau = 500;
const gia50KmKe = 650;
const gia100KmKe = 850;
const gia150KmKe = 1100;
const giaConLai = 1300;
var tongTien = 0;
function tienDien(soKw) {
  if (soKw <= 50) {
    tongTien = soKw * gia50KmDau;
  } else if (soKw <= 100) {
    tongTien = 50 * gia50KmDau + (soKw - 50) * gia50KmKe;
  } else if (soKw <= 200) {
    tongTien = 50 * gia50KmDau + 50 * gia50KmKe + (soKw - 100) * gia100KmKe;
  } else if (soKw <= 350) {
    tongTien =
      50 * gia50KmDau +
      50 * gia50KmKe +
      gia100KmKe * 100 +
      (soKw - 200) * gia150KmKe;
  } else {
    tongTien =
      50 * gia50KmDau +
      50 * gia50KmKe +
      gia100KmKe * 100 +
      150 * gia150KmKe +
      (soKw - 350) * giaConLai;
  }
}

document.getElementById("btnTienDien").onclick = function (event) {
  event.preventDefault();
  var soKw = document.getElementById("txtSoKw").value;
  var ten = document.getElementById("txtTenDien").value;
  tienDien(soKw);
  var info = "<div>Tên :" + ten + "</div>";
  info += "<div> Tổng thuế phải trả :" + tongTien + "</div>";
  document.getElementById("footercard2").innerHTML = info;
};
