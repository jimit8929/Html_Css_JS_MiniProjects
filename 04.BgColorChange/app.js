const btn = document.querySelector("#btn")
let hexa = document.querySelector("#hexcode");

function Randomcolor(){
    let letters = "0123456789ABCEDEF";
    let color = "#";

    for(let i = 0 ; i < 6 ; i++){
        color = color + letters[Math.floor(Math.random()*16)];
    }

    return color;
}

btn.addEventListener("click" , ()=>{
    document.body.style.backgroundColor = Randomcolor();
    hexa.innerHTML = Randomcolor();
});