// Add active class to the current button (highlight it)


const loan = document.querySelector('#loan_simulation');
let loanPo = loan.offsetTop-213;

const fea = document.querySelector('#features');
let feaPo = fea.offsetTop-213;

const eligibility = document.querySelector('#eligibility');
let eligibilityPo = eligibility.offsetTop-213;

const faq = document.querySelector('#product_faqs');
let faqPo = faq.offsetTop-213;


var header = document.querySelector(".ant-tabs-nav-list");
var btns = header.getElementsByClassName("ant-tabs-tab");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
      
//   var current = document.getElementsByClassName("ant-tabs-tab-active");
//   current[0].className = current[0].className.replace(" ant-tabs-tab-active", "");
//   this.className += " ant-tabs-tab-active";
  var currentCl = document.querySelectorAll(".ant-tabs-tab-active .ant-tabs-tab-btn")[0].attributes.role.nodeValue;

  if(i==0){
      window.scroll(0,loanPo);
  }
  if(i==1){
    window.scroll(0,feaPo);
  }
  if(i==2){
    window.scroll(0,eligibilityPo);
  }
  if(i==3){
    window.scroll(0,faqPo);
  }
  console.log(currentCl);
  });
}

const nav = document.querySelector('#sticky-nav');
let navTop = nav.offsetTop;

var loanNav =  document.querySelector(".ant-tabs-tab[role='loan']");
var feaNav = document.querySelector(".ant-tabs-tab[role='fea']");
var eliNav = document.querySelector(".ant-tabs-tab[role='eli']");
var faqNav = document.querySelector(".ant-tabs-tab[role='faq']");

function removeCls(){
    loanNav.classList.remove('ant-tabs-tab-active')
    feaNav.classList.remove('ant-tabs-tab-active')
    eliNav.classList.remove('ant-tabs-tab-active')
    faqNav.classList.remove('ant-tabs-tab-active')
}


function scrollActive(){

    if (window.scrollY <= loanPo) { 
        this.removeCls();
        loanNav.classList.add('ant-tabs-tab-active')
    }

    if (window.scrollY >= feaPo) { 
        this.removeCls();
        feaNav.classList.add('ant-tabs-tab-active')
    }

    if (window.scrollY >= eligibilityPo) { 
        this.removeCls();
        eliNav.classList.add('ant-tabs-tab-active')
    }

    if (window.scrollY >= faqPo) { 
        this.removeCls();
        faqNav.classList.add('ant-tabs-tab-active')
    }
}
window.addEventListener('scroll', scrollActive)


function fixedNav() {
  if (window.scrollY >= navTop) {    
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');    
  }
}

window.addEventListener('scroll', fixedNav);



