
const abrirpopup = document.getElementById("abrirpopup");
const fecharpopup = document.getElementById("fecharpopup");
const popup = document.getElementById("popup");

abrirpopup.addEventListener("click", () => {
  popup.style.display = "flex";
});

fecharpopup.addEventListener("click", () => {
  popup.style.display = "none";
});