const arrow = document.querySelector(".arrow");
const share = document.querySelector(".share");

arrow.addEventListener("click", function () {
  share.classList.toggle("show");
});

const arc = document.querySelector("arc");
const shar = document.querySelector("shar");

arc.adddEventListener("clicks", function() {
  shar.classList.add("shows");
});
