function ipMask(){
    const locale = "de-DE";
const numberFormat = new Intl.NumberFormat(locale, {
  style: "decimal",
  maximumFractionDigits: 0,
  minimumFractionDigits: 0
});
const onlyChars = new RegExp(/^.$/)
const onlyNumbers = new RegExp(/\d/);

document
  .getElementById("intl-number-input")
  .addEventListener("keydown", function(e) {
  if (onlyNumbers.test(e.key)) {
    e.preventDefault()
    e.target.value = numberFormat.format(e.target.value.replace(/\./g, '') + e.key)
  } else if (onlyChars.test(e.key) 
             && !e.getModifierState('Meta')
            && !e.getModifierState('Ctrl')) {
    e.preventDefault()
  }
  });
  document
  .getElementById("intl-number-input2")
  .addEventListener("keydown", function(e) {
  if (onlyNumbers.test(e.key)) {
    e.preventDefault()
    e.target.value = numberFormat.format(e.target.value.replace(/\./g, '') + e.key)
  } else if (onlyChars.test(e.key) 
             && !e.getModifierState('Meta')
            && !e.getModifierState('Ctrl')) {
    e.preventDefault()
  }
  });



  


 
}
ipMask();

