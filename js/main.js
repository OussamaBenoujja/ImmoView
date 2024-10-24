


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



function Rejex(){
let email = document.querySelector("#email");
let first_name = document.querySelector(".first_name");
let last_name = document.querySelector(".last-name");
let phone = document.querySelector(".phone") 
   let emailn = "exommple@kkk.com";
   




let vlueemail=email.value

let validtionEmail=/^[a-z0-9?]+@[a-z]+\.(com|net)$/ig








if(vlueemail.test(emailn)){
email.style.borderBottom=" 2px solid green"
}else{
    email.style.borderBottom="2px solid red"
}

}

console.log(email);
