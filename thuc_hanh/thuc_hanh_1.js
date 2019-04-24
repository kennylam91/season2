let inputWidth;
let inputHeight;

inputWidth=prompt("Nhap vao chieu rong");
inputHeight=prompt("Nhap vao chieu cao");
let width=parseInt(inputWidth);
let height=parseInt(inputHeight);
let area= width*height;
document.write("Chieu dai: " +height +"<br/>");
document.write("Chieu rong: " +width +"<br/>");
document.write("Dien tich hinh chu nhat la: " +area);
