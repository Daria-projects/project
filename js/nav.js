/* ── nav.js
   Deles af alle sider.
   Indeholder:
     1. Mobilmenu (åbn/luk, Escape, klik udenfor) */

/* 2. Mobilmenu */
var burgerKnap = document.querySelector(".burger-knap");
var mobilMenu = document.querySelector(".mobil-menu");

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

  /* Åbn/luk ved klik på burger */
  burgerKnap.addEventListener("click", function () {
    if (mobilMenu.classList.contains("aaben")) {
      lukkeMenu();
    } else {
      aabneMenu();
    }
  });

  /* Luk når et menu-link aktiveres */
  mobilMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", lukkeMenu);
  });

  /* Luk ved Escape */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && mobilMenu.classList.contains("aaben")) {
      lukkeMenu();
      burgerKnap.focus();
    }
  });

  /* Luk ved klik udenfor menuen */
  document.addEventListener("click", function (e) {
    if (!burgerKnap.contains(e.target) && !mobilMenu.contains(e.target)) {
      lukkeMenu();
    }
  });

}
