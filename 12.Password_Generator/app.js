const generate = document.querySelector(".btn1");
const copy = document.querySelector(".btn2");

generate.addEventListener("click" , ()=> genpassword());
copy.addEventListener("click" , ()=> copypassword());

function genpassword(){
    let char = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()~ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    passwordlength = 7;
    password = ""; 

    for(let i = 0 ; i <= passwordlength ; i++){
        let random = Math.floor(Math.random() * char.length);
        password += char.substring(random , random+1);
    }

    document.getElementById("Password").value = password;
}

function copypassword(){
    let copytext = document.getElementById("Password");
    copytext.select();
    document.execCommand("copy");
}