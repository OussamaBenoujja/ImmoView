// Rejex
let btn = document.querySelector("#btn");

btn.addEventListener('click', function () {

    let email = document.querySelector("#email");
    let phone = document.querySelector("#phone");
    const poupupMun = document.getElementById("Poupup");
    let inner_pop_up = document.querySelector(".mm-inner-pop-up");
    let cards_pop_up = document.querySelector(".mm-cards_pop_up")
    let close_pop_up = document.querySelector(".mm-close_pop_up")
    //
    let email_value = email.value;
    let phone_value = phone.value;
    //
    let validEmail = /^[a-z0-9%]+@[a-zA-Z]+.(com|net)$/;
    let validPhone = /^+212\d{8}$/;




    if (email_value === '' || phone_value === '') {

        cards_pop_up.style.background = "red"
        poupupMun.style.display = "block";
        inner_pop_up.innerHTML = "email or phone is empty "


    } else if (validEmail.test(email_value) && validPhone.test(phone_value)) {
        poupupMun.style.display = "block";
    } else {
        cards_pop_up.style.background = "red"
        poupupMun.style.display = "block";
        inner_pop_up.innerHTML = "email or phone is not valid"
    }
    // close menu pop_up
    close_pop_up.onclick = function () {
        poupupMun.style.display = "none";

    }
});


let btn_one = document.querySelector(".mm-btn-one")
let btn_two = document.querySelector(".mm-btn-two")
let btn_tree = document.querySelector(".mm-btn-tree")


btn_one.onclick = function () {
    location.href = "Home.html"
}


btn_two.onclick = function () {
    location.href = "Home.html"
}

btn_tree.onclick = function () {
    location.href = "Home.html"
}