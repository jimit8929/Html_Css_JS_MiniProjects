let captcha = document.querySelector(".captcha");
let reload = document.querySelector(".reload-btn");
let inputfield = document.querySelector("input");
let checkbtn = document.querySelector(".check-btn");
let statustext = document.querySelector(".status-text");


let allCharacters = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P","Q",
    "R", "S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
    "o","p","q","r","s","t","u","v","w","x","y","z",0,1,2,3,4,5,6,7,8,9,];

checkbtn.addEventListener("click" , (e) => {
    e.preventDefault();
    statustext.style.display = "block";

    let inputvalue = inputfield.value.split("").join("");

    if(inputvalue == captcha.innerText){
        statustext.style.color = "white";
        statustext.innerText = "Nice , Captcha Matched";

        setTimeout(() => {
           statustext.style.display = "";
           inputfield.value="";
           captcha.innerText = "";
           getcaptcha();
        },2000);
    }
    else{
        statustext.style.color ="white";
        statustext.innerText = "Captcha not matched , Please Try again Later";

        setTimeout(() => {
            statustext.style.display = "";
            inputfield.value="";
            captcha.innerText = "";
            getcaptcha();
         },2000);
    }
});

function getcaptcha(){
    for(let i = 0 ; i < 6 ; i++){
        let randomchar = allCharacters[Math.floor(Math.random()*allCharacters.length)];
        captcha.innerText += `${randomchar}`;
    }
}


reload.addEventListener("click" , ()=>{
    captcha.innerHTML = "";
    getcaptcha();
})