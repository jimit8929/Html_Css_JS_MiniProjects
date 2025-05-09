const typedtext = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

// moving couser 
const movingcursor = document.querySelector(".movingcursor");

const words = ["Awesome", "Fun", "Cool", "Life", "Famous", "Weird"];

const typingdelay = 200;
const erasingdelay = 200;
const newletterdelay = 2000;

let index = 0, charindex = 0;

function type() {
    if (charindex < words[index].length) {
        typedtext.textContent += words[index].charAt(charindex);
        charindex++;
        setTimeout(type, typingdelay);
    } else {
        setTimeout(erase, newletterdelay);
    }
}

function erase() {
    if (charindex > 0) {
        typedtext.textContent = words[index].substring(0, charindex - 1);
        charindex--;
        setTimeout(erase, erasingdelay);
    } else {
        index++;
        if (index >= words.length) index = 0;
        setTimeout(type, typingdelay + 1100);
    }
}


document.addEventListener("mousemove" , function(event){
    movecursor(event.pageX , event.pageY);
});

//fuction for moving the cursor
const movecursor = function(pageX , pageY){
    movingcursor.style.left  = pageX + 'px'
    movingcursor.style.top = pageY + 'px'
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, newletterdelay);
});
