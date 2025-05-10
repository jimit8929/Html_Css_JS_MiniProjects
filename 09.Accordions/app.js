
const itemheader = document.querySelectorAll(".accordion-item-header");

itemheader.forEach(accordion => {
    accordion.addEventListener("click" , collapseaccordions)

    function collapseaccordions(){
        const active = document.querySelector(".active"); //dekho kausa header active hai (if any)

        if(active && active !== accordion){  // phela thi koi header open che pan click kariyo aa header alag che
            active.classList.toggle("active"); //toh aana par thi .active hatai do
            active.nextElementSibling.style.maxHeight = 0; //height 0 karva thi aa header close thai jase
        }

        accordion.classList.toggle("active");  // agar active hato toh close thai thase else open thai jase
        const accordionitembody = accordion.nextElementSibling; // j navo header aayo aano content store karilio


        if(accordion.classList.contains("active")){  //agar j header no content store kariyo che aa open thayo toh maxheight expand kari do 
            accordionitembody.style.maxHeight = accordionitembody.scrollHeight + "px"; //scrollheight atle k jatli space joiye atle lese
        }
        else{
            accordionitembody.style.maxHeight = 0; // aa header open naa thai toh maxheight 0 rakho
        }
    }
})