


// 


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

// Rejex
let btn=document.querySelector("#btn");

btn.addEventListener('click', function() {
    let email = document.querySelector("#email");
    let phone = document.querySelector("#phone");
    const poupupMun =   document.getElementById("Poup_up");
    let email_value = email.value;
    let phone_value = phone.value;

    let validEmail = /^[a-z0-9_%]+@[a-zA-Z]+\.(com|net)$/;

    let validPhone = /^\+212\d{8}$/;

    if (validEmail.test(email_value)) {
        poupupMun.style.display = "block";
    } else {
        poupupMun.style.display = "none";
    }

    if (validPhone.test(phone_value)) {
        poupupMun.style.display = "block";

    } else {
        poupupMun.style.display = "none";

    }
   
});
