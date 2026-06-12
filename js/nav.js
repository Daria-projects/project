var burgerKnap = document.querySelector(".burger-knap");
var mobilMenu  = document.querySelector(".mobil-menu");

if (burgerKnap && mobilMenu) {

  function aabneMenu() {
    mobilMenu.classList.add("aaben");
    burgerKnap.setAttribute("aria-expanded", "true");
    burgerKnap.setAttribute("aria-label", "Luk menu");
  }

  function lukkeMenu() {
    mobilMenu.classList.remove("aaben");
    burgerKnap.setAttribute("aria-expanded", "false");
    burgerKnap.setAttribute("aria-label", "Åbn menu");
  }

  burgerKnap.addEventListener("click", function () {
    mobilMenu.classList.contains("aaben") ? lukkeMenu() : aabneMenu();
  });

  mobilMenu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", lukkeMenu);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { lukkeMenu(); burgerKnap.focus(); }
  });

  document.addEventListener("click", function (e) {
    if (!burgerKnap.contains(e.target) && !mobilMenu.contains(e.target)) lukkeMenu();
  });

}
