const mobileNavBtn = document.getElementById("mobileNavBtn");
const mobileNavItems = document.getElementById("mobileNavItems");

mobileNavBtn.addEventListener("click", () => {
  mobileNavItems.classList.toggle("show");
});
