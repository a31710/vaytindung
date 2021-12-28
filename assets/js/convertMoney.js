var elem = document.querySelector('input[type="range"]');
var elem2 = document.querySelector('input[id="customRange2"]');
var dropdown = document.querySelector('.ant-select-selection-item');
var price = document.querySelector('.return-value');
var elem3 = document.querySelector('#intl-number-input2');
var rangeValue = function(){
  var newValue = elem.value;
  var target = document.querySelector('.styles_expectedBudgetSliderInput__15J3K');
  var vnd = (parseInt(newValue)).toLocaleString('it-IT', {style : 'currency', currency : 'VND'}).split('VND').join("");
  target.value = vnd
  price.innerHTML = cal(elem.value,elem2.value)
}
var rangeValue2 = function(){
  dropdown.value = elem2.value
  price.innerHTML = cal(elem.value,elem2.value)
}

var rangeValue3 = function(){
  elem2.value  = dropdown.value
  price.innerHTML = cal(elem.value,elem2.value)
}

var rangeValue4 = function(){
  elem.value = elem3.value.split('.').join("");
  price.innerHTML = cal(elem.value,elem2.value)
}
rangeValue();
elem.addEventListener("input", rangeValue);
elem2.addEventListener("input", rangeValue2);
dropdown.addEventListener("change", rangeValue3);
elem3.addEventListener("change", rangeValue4);

function cal(val,month){
  var tienGocThangDau = val/month;
  var tienGocHangThang = val/month;
  var laiHangThang;
  var tienLai = 0;
  for(var i = 1; i<=month;i++){
      if(i == 1){
          laiHangThang = val* 18/(1200);
          tienLai =  tienLai + laiHangThang;
      }else{
          laiHangThang = ((val-tienGocHangThang)*18/(1200));

          tienGocHangThang += tienGocThangDau 
          tienLai =  tienLai + laiHangThang;
      }
  }

  return parseInt(((parseInt(val) + parseInt(tienLai))/month)).toLocaleString('it-IT', {style : 'currency', currency : 'VND'}).split('VND').join("")
}






