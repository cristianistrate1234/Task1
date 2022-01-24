const mainBox = document.querySelector(".mainBox");
const sideMenu = document.querySelector(".sideMenu")
const closeBtn = document.querySelector(".closeBtn");
const divList = document.querySelector(".divList");
const divItems = document.querySelectorAll(".divItems")
function openFunction(){
    sideMenu.style.width = "300px";
}
function closeFunction(){
    sideMenu.style.width = "0px";
    mainBox.style.marginLeft = "0px";
    mainBox.innerHTML = "&#9776;";
}

mainBox.addEventListener("click" , ()=>{
    setTimeout(function(){
        document.querySelector('.item1').style.visibility = "visible";
    },200);
    setTimeout(function(){
        document.querySelector('.item2').style.visibility = "visible";
    },320);
    setTimeout(function(){
        document.querySelector('.item3').style.visibility = "visible";
    },440);
    setTimeout(function(){
        document.querySelector('.item4').style.visibility = "visible";
    },560);
    setTimeout(function(){
        document.querySelector('.item5').style.visibility = "visible";
    },780);
    setTimeout(function(){
        document.querySelector('.item6').style.visibility = "visible";
    },900);
    setTimeout(function(){
        document.querySelector('.item7').style.visibility = "visible";
    },1020);
    setTimeout(function(){
        document.querySelector('.item8').style.visibility = "visible";
    },1140);
})

closeBtn.addEventListener("click" , () =>{
    setTimeout(function(){
        document.querySelector('.item1').style.visibility = "hidden";
    },100);
    setTimeout(function(){
        document.querySelector('.item2').style.visibility = "hidden";
    },100);
    setTimeout(function(){
        document.querySelector('.item3').style.visibility = "hidden";
    },100);
    setTimeout(function(){
        document.querySelector('.item4').style.visibility = "hidden";
    },100);
    setTimeout(function(){
        document.querySelector('.item5').style.visibility = "hidden";
    },100);
    setTimeout(function(){
        document.querySelector('.item6').style.visibility = "hidden";
    },100);
    setTimeout(function(){
        document.querySelector('.item7').style.visibility = "hidden";
    },100);
    setTimeout(function(){
        document.querySelector('.item8').style.visibility = "hidden";
    },100);
})





