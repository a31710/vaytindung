
var header = document.querySelector(".ant-collapse");
var quest = header.getElementsByClassName("ant-collapse-item");

for (let i = 0; i < quest.length; i++) {
    quest[i].addEventListener("click", function() {
        var text = quest[i].querySelector('.ant-collapse-content-box')
        var icon = quest[i].querySelector('.fas')
       
 
      

        if(icon.className.includes('plus')){
            icon.className = 'fas fa-minus'
            text.style.display = "block";
        }else{
            icon.className = 'fas fa-plus'
            text.style.display ="none";
        }
    });
}
