var inputTienVay = document.querySelector('#intl-number-input2');
function Validator(){
   var val = inputTienVay.value.split('.').join("");
    if(val <= 10000000){
        inputTienVay.value = (10000000).toLocaleString('it-IT', {style : 'currency', currency : 'VND'}).split('VND').join("");
    }
    if(val >= 300000000){
        inputTienVay.value = (300000000).toLocaleString('it-IT', {style : 'currency', currency : 'VND'}).split('VND').join("");
    }
}
Validator();
inputTienVay.addEventListener("change", Validator);


var inputThuNhap = document.querySelector('#intl-number-input');
function ValidatorThuNhap(){
   var val = inputThuNhap.value.split('.').join("");
  
    if(val >= 300000000){
        inputThuNhap.value = (300000000).toLocaleString('it-IT', {style : 'currency', currency : 'VND'}).split('VND').join("");
    }
}
ValidatorThuNhap();
inputThuNhap.addEventListener("change", ValidatorThuNhap);

