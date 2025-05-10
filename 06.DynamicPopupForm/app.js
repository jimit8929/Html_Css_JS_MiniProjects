const close = document.getElementById("close");
const open = document.getElementById("open");

const model = document.getElementById("modal");

open.addEventListener("click" , ()=>{
    model.classList.remove("hidden");
});

close.addEventListener("click" , ()=>{
    model.classList.add("hidden");
});