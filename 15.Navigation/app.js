// Cache selectors
const menulist = document.querySelectorAll(".menu_Links ul li");
const sections = document.querySelectorAll(".sections > section");

menulist.forEach(li => {
  li.addEventListener("click", e => {
    document.querySelectorAll(".menu_Links ul li.active")  // previouslly if koi active ho toh usme se active remove kardo
      .forEach(activeEl => activeEl.classList.remove("active"));

    const clickedLi = e.currentTarget; 
    clickedLi.classList.add("active");  // jo click kiya usko hi active rakho


    sections.forEach(sec => {
      sec.classList.add("hidden");
      sec.classList.remove("visible");  // saare sections meh se visible hatado aur hidden add kardo jo taki jo click huwa hai wahi dikhega
    });

    const targetName = clickedLi.textContent.trim();
    sections.forEach(sec => {
      if (sec.dataset.section.trim() === targetName) {
        sec.classList.remove("hidden");         // wahi show karo jiska section clicked-tab se match hojaye
        sec.classList.add("visible");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  sections.forEach(sec => {
    if (!sec.classList.contains("visible")) {  //inially refresh karne pe about section hi dikhega kyuki usme hi manually active add kiya hai
      sec.classList.add("hidden");
    }
  });
});
