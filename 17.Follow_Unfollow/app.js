let body = document.body;
let theme = document.querySelector(".themer"); 
const followButtons = document.querySelectorAll(".follow-button");

theme.addEventListener("click", toggletheme);

function toggletheme() {
    body.classList.toggle("light-theme");
    body.classList.toggle("dark-theme");
    theme.innerText = body.classList.contains("dark-theme") ? "Light" : "Dark";
}

followButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => followUnFollow(e.target));
});

function followUnFollow(button) {
  const isFollowing = button.textContent === "Unfollow";
  button.classList.toggle("bg-[#e0245e]");
  button.classList.toggle("text-white");
  button.classList.toggle("text-[#e0245e]");
  button.textContent = isFollowing ? "Follow" : "Unfollow";
}