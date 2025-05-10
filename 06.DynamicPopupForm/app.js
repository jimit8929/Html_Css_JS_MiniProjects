const close = document.getElementById("close");
const open = document.getElementById("open");
const eye = document.querySelector("#eye-icon");
const input = document.querySelector("#password");

const model = document.getElementById("modal");

open.addEventListener("click", () => {
  model.classList.remove("hidden");
});

close.addEventListener("click", () => {
  model.classList.add("hidden");
});

eye.addEventListener("click", () => {
  if (input.type === "password") {
    input.type = "text";
    eye.classList.remove("fa-eye");
    eye.classList.add("fa-eye-slash");
  } else {
    input.type = "password";
    eye.classList.remove("fa-eye-slash");
    eye.classList.add("fa-eye");
  }
});
