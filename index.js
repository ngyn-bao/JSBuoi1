console.log("Tôi học Javascript buổi 1");
var a = 10;
console.log(a);
console.log(typeof a); // number

var b;
anhLong = "Long đi học Javascript đầu tiên";
console.log(b);
console.log(typeof b); //string

// Operator: + - * / ++ --

var a = 10;
var b = 5;

const PI = Math.PI;
console.log(PI);

console.error("Bị lỗi");
// console.log(a + b);

// a++;
// console.log(a);
// ++a;
// console.log(a);

// b--;
// console.log(b);

var tongSo = a++ + ++b - (++a - --b); //10 + 6 - (11 - 5)
console.log(tongSo);

//assignment
//cammel case: chữ đầu viết thường, các chữ sau viết hoa
var tuoiCuaPhat = 18;
var tuoiCuaBao = 19;
var tuoiCuaHuy = tuoiCuaPhat;

console.log(tuoiCuaPhat); //18
console.log(tuoiCuaBao); //19
console.log(tuoiCuaHuy); //18

tuoiCuaPhat = tuoiCuaBao; //19
tuoiCuaBao = 15;

console.log("tuổi của Phát", tuoiCuaPhat); //19
console.log("tuổi của Bảo", tuoiCuaBao); //15
console.log("tuổi của Huy", tuoiCuaHuy); //18
// anh Long tuổi = Phát đi học lập trình web
console.log("anh Long tuổi " + anhLong + " có tuổi là: " + tuoiCuaPhat);

//template string 1 phương thức es6
console.log(`anh Long tuổi ${anhLong} có tuổi là ${tuoiCuaPhat}`);

//tổng kí số của 1 số nguyên 567
//mô hình 3 khối: input = 567 |  |output= 5 + 6 +7 = 18;
var soN = 567;
var soHangTram = Math.floor(soN / 100); // = 5.67
console.log(soHangTram);
var soHangChuc = Math.floor(Math.floor(soN % 100) / 10);
console.log(soHangChuc);
var soHangDonVi = Math.floor(soN % 10);
console.log(soHangDonVi);

console.log(soHangTram + soHangChuc + soHangDonVi);

// viết 1 chương trình tính lương nhân viên dựa trên 26 ngày và mỗi ngày lương là 150.000 đồng
var luongMoiNgay = 150000;
var soNgay = 26;
var tongTien = luongMoiNgay * soNgay;
console.log(
  `Số lương nhân viên là: ${tongTien.toLocaleString("vn-VN", {
    style: "currency",
    currency: "VND",
  })} `
);

// Tìm số lớn nhất a, b, c, d, e, f;
console.log(Math.max(10, 3, 4, 100, -100, 30, 50));
