const imagecontainer = document.querySelector(".image-container");
const next  = document.getElementById("next");
const prev = document.getElementById("prev");

let x = 0;

function rotate(){
    imagecontainer.style.transform = `perspective(1000px) rotateY(${x}deg)`
}

prev.addEventListener("click" , ()=>{
    x = x+45;
    rotate();
});

next.addEventListener("click" , ()=>{
   x = x - 45;
   rotate();
});