
let icone_open=document.querySelector(".icon-open");
let icone_close=document.querySelector(".icon-close");
let ul=document.querySelector("nav ul");


function CloseMun(){
    ul.style.display="none";
    ul.style.transform="translate(-120px)";

}
function OpenMun(){
    ul.style.display="block"
    ul.style.transform="translate(0)";
}