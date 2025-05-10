const slides = document.querySelectorAll(".slide");
const togglebtn = document.getElementById("themeToggle");
const body = document.getElementById("body");

slides.forEach(slide => {
    slide.addEventListener("click" , ()=>{
        removeCurrentActives();
        slide.classList.add("active");
    });
})

function removeCurrentActives(){
    slides.forEach(slide => {
        slide.classList.remove("active");
    });
}

togglebtn.addEventListener("click" , ()=>{
    body.classList.toggle("bg-black");
    body.classList.toggle("text-white");
    body.classList.toggle("bg-white");
    body.classList.toggle("text-black");
})