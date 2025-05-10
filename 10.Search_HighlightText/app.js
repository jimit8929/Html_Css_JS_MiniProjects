const p = document.getElementById("p");
const searchbtn = document.getElementById("searchBtn");

searchbtn.addEventListener("click" , ()=>{
    let input = document.getElementById("input").value;

    if(input.trim() !== ""){
        let regExp = new RegExp(input , 'gi');
        p.innerHTML = p.textContent.replace(regExp, `<mark class="bg-yellow-400 text-black font-bold px-1 rounded">$&</mark>`);
    }
})

// input ko regular expression meh convert karo
// gi = global search and case-insensitive