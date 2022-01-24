const mainBox = document.querySelector(".mainBox");
const sideMenu = document.querySelector(".sideMenu")
const closeBtn = document.querySelector(".closeBtn");
const items = document.querySelectorAll(".items");
function openFunction(){
    sideMenu.style.width = "300px";
    items.style.visibility = "visible";
}
function closeFunction(){
    sideMenu.style.width = "0px";
    mainBox.style.marginLeft = "0px";
    mainBox.innerHTML = "&#9776;";
    items.style.visibility = "hidden";
}



