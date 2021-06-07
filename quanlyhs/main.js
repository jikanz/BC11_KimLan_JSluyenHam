function tongDiem(diemVan, diemToan, diemLy, khuVuc, doiTuong) {
  return diemVan + diemToan + diemLy + khuVuc + doiTuong;
}
function ketQua(diemVan, diemToan, diemLy, diemChuan, khuVuc, doiTuong) {
  if (
    diemChuan <= tongDiem(diemVan, diemToan, diemLy, khuVuc, doiTuong) &&
    diemVan > 0 &&
    diemToan > 0 &&
    diemLy > 0
  ) {
    return "đậu";
  } else {
    return "rớt";
  }
}
document.getElementById("btnTinhTien").onclick = function (event) {
  event.preventDefault();
  var diemChuan = document.getElementById("txtDiemChuan").value;
  var diemVan = document.getElementById("txtDiemVan").value;
  diemVan = parseFloat(diemVan);
  var diemToan = document.getElementById("txtDiemToan").value;
  diemToan = parseFloat(diemToan);
  var diemLy = document.getElementById("txtDiemLy").value;
  diemLy = parseFloat(diemLy);
  var khuVuc = document.getElementById("khuVuc").value;
  khuVuc = parseFloat(khuVuc);
  var doiTuong = document.getElementById("doiTuong").value;
  doiTuong = parseFloat(doiTuong);
  var tongdiem = tongDiem(diemVan, diemToan, diemLy, khuVuc, doiTuong);

  var info = "<div>Tổng Điểm :" + tongdiem + "</div>";
  info +=
    "<div> Kết Quả Cuối :" +
    ketQua(diemVan, diemToan, diemLy, diemChuan, khuVuc, doiTuong) +
    "</div>";
  document.getElementById("footercard").innerHTML = info;
};
