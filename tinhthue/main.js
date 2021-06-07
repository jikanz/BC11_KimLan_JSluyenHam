const tien1NguoiPhuThuoc = 1800000;
var thueCaNhan1 = 0;
function thueCaNhan(tongThuNhap, nguoiPhuThuoc) {
  var tich = tongThuNhap - 4000000 - nguoiPhuThuoc * tien1NguoiPhuThuoc;
  tich = parseInt(tich);
  if (tich == 60000000) {
    thueCaNhan1 = (tich * 5) / 100;
  } else if (tich > 60000000 && tich <= 120000000) {
    thueCaNhan1 = (tich * 10) / 100;
  } else if (tich > 120000000 && tich <= 216000000) {
    thueCaNhan1 = (tich * 15) / 100;
  } else if (tich > 216000000 && tich <= 384000000) {
    thueCaNhan1 = (tich * 20) / 100;
  } else if (tich > 384000000 && tich <= 624000000) {
    thueCaNhan1 = (tich * 25) / 100;
  } else if (tich > 624000000 && tich <= 960000000) {
    thueCaNhan1 = (tich * 30) / 100;
  } else if (tich > 960000000) {
    thueCaNhan1 = (tich * 35) / 100;
  } else {
    thueCaNhan1 = 0;
  }
}
// function thuNhapChiuThue(tongThuNhap, nguoiPhuThuoc) {
//   var tich = tongThuNhap - 4000000 - nguoiPhuThuoc * tien1NguoiPhuThuoc;
//   return tich;
// }
document.getElementById("btnThue").onclick = function (event) {
  event.preventDefault();
  var tongThuNhap = document.getElementById("txtTongThuNhap").value;
  var nguoiPhuThuoc = document.getElementById("txtPhuThuoc").value;
  var name = document.getElementById("txtName").value;
  thueCaNhan(tongThuNhap, nguoiPhuThuoc);
  var info = "<div>Tên :" + name + "</div>";
  info += "<div> Tổng thuế phải trả :" + thueCaNhan1 + "</div>";
  document.getElementById("footercard1").innerHTML = info;
};
