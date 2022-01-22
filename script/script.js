function openFunction(){
    document.getElementById("menu").style.width = "300px";
}
function closeFunction(){
    document.getElementById("menu").style.width = "0px";
    document.getElementById("mainbox").style.marginLeft = "0px";
    document.getElementById("mainbox").innerHTML = "&#9776;";
}

const mainbox = document.querySelector("#mainbox");

mainbox.addEventListener("click" , ()=>{
    setTimeout(function(){
        document.querySelector('.test').style.visibility = "visible";
    },200);
    setTimeout(function(){
        document.querySelector('.test2').style.visibility = "visible";
    },350);
    setTimeout(function(){
        document.querySelector('.test3').style.visibility = "visible";
    },500);
    setTimeout(function(){
        document.querySelector('.test4').style.visibility = "visible";
    },650);
    setTimeout(function(){
        document.querySelector('.test5').style.visibility = "visible";
    },800);
    setTimeout(function(){
        document.querySelector('.test6').style.visibility = "visible";
    },950);
    setTimeout(function(){
        document.querySelector('.test7').style.visibility = "visible";
    },1100);
    setTimeout(function(){
        document.querySelector('.test8').style.visibility = "visible";
    },1250);

})

const closebtn = document.querySelector(".closebtn");

closebtn.addEventListener("click" , () =>{
    setTimeout(function(){
        document.querySelector('.test').style.visibility = "hidden";
    },100);
    setTimeout(function(){
        document.querySelector('.test2').style.visibility = "hidden";
    },100);
    setTimeout(function(){
        document.querySelector('.test3').style.visibility = "hidden";
    },100);
    setTimeout(function(){
        document.querySelector('.test4').style.visibility = "hidden";
    },100);
    setTimeout(function(){
        document.querySelector('.test5').style.visibility = "hidden";
    },100);
    setTimeout(function(){
        document.querySelector('.test6').style.visibility = "hidden";
    },100);
    setTimeout(function(){
        document.querySelector('.test7').style.visibility = "hidden";
    },100);
    setTimeout(function(){
        document.querySelector('.test8').style.visibility = "hidden";
    },100);
})