// Cache selectors
const menulist = document.querySelectorAll(".menu_Links ul li");
const sections = document.querySelectorAll(".sections > section");

menulist.forEach(li => {
  li.addEventListener("click", e => {
    document.querySelectorAll(".menu_Links ul li.active")
      .forEach(activeEl => activeEl.classList.remove("active"));

    const clickedLi = e.currentTarget;
    clickedLi.classList.add("active");


    sections.forEach(sec => {
      sec.classList.add("hidden");
      sec.classList.remove("visible");
    });

    const targetName = clickedLi.textContent.trim();
    sections.forEach(sec => {
      if (sec.dataset.section.trim() === targetName) {
        sec.classList.remove("hidden");
        sec.classList.add("visible");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  sections.forEach(sec => {
    if (!sec.classList.contains("visible")) {
      sec.classList.add("hidden");
    }
  });
});
