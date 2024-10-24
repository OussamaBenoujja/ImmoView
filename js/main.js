
let icone_open = document.querySelector(".icon-open");
let icone_close = document.querySelector(".icon-close");
let ul = document.querySelector("nav ul");


function CloseMun() {
    ul.style.display = "none";
    ul.style.transform = "translate(-120px)";

}
function OpenMun() {
    ul.style.display = "block"
    ul.style.transform = "translate(0)";
}

// Rejex
let btn = document.querySelector("#btn");

btn.addEventListener('click', function () {
    let email = document.querySelector("#email");
    let phone = document.querySelector("#phone");
    const poupupMun = document.getElementById("Poup_up");
    let inner_pop_up = document.querySelector(".inner-pop-up");
    let cards_pop_up = document.querySelector(".cards_pop_up")
     let close_pop_up = document.querySelector(".close_pop_up")
    //
    let email_value = email.value;
    let phone_value = phone.value;
    //
    let validEmail = /^[a-z0-9_%]+@[a-zA-Z]+\.(com|net)$/;
    let validPhone = /^\+212\d{8}$/;

    if (validEmail.test(email_value) && validPhone.test(phone_value)) {
        poupupMun.style.display = "block";
    } else {
        cards_pop_up.style.background = "red"
        poupupMun.style.display = "block";
        inner_pop_up.innerHTML = "email or phone is not valid "
    }
    // close menu pop_up
    close_pop_up.onclick=function(){
        poupupMun.style.display = "none";
        
    }
});


let btn_one =document.querySelector(".btn-one")
let btn_two =document.querySelector(".btn-two")
let btn_tree =document.querySelector(".btn-tree")


btn_one.onclick=function(){
    location.href="home.html"
}


btn_two.onclick=function(){
    location.href="home.html"
}

btn_tree.onclick=function(){
    location.href="home.html"
}