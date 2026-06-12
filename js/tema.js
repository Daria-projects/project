/* ── tema.js
   Brugt på alle temaprojektsider (t1–t6) og om-mig.
   Indeholder:
     Sidebar-sektionsnavigation (kun desktop):
       - Klik på en knap → smooth scroll til den sektion
       - Scroll i siden → fremhæv den aktuelle sektion
*/

var sektionsPunkter = document.querySelectorAll(".sidebar-sek-punkt");

if (sektionsPunkter.length > 0) {
  /* Klik: scroll til den valgte sektion */
  sektionsPunkter.forEach(function (punkt) {
    punkt.addEventListener("click", function () {
      var maalId = punkt.getAttribute("data-maal");
      var maalEl = document.getElementById(maalId);

      if (!maalEl) return;

      /* Tæl navbarhøjden med, så vi ikke scroller bag den */
      var navEl = document.querySelector(".top-nav");
      var navHoejde = navEl ? navEl.offsetHeight : 48;
      var afstand = maalEl.getBoundingClientRect().top + window.scrollY - navHoejde - 12;

      window.scrollTo({ top: afstand, behavior: "smooth" });

      /* Fjern aktiv fra alle, sæt aktiv på den klikkede */
      sektionsPunkter.forEach(function (p) {
        p.classList.remove("aktiv");
      });
      punkt.classList.add("aktiv");
    });
  });

  /* Scroll: fremhæv den sektion der er synlig i toppen */
  function opdaterAktivSektion() {
    var navEl = document.querySelector(".top-nav");
    var navHoejde = navEl ? navEl.offsetHeight : 48;
    var aktuelPunkt = sektionsPunkter[0]; /* Fallback: første sektion */

    sektionsPunkter.forEach(function (punkt) {
      var maalId = punkt.getAttribute("data-maal");
      var el = document.getElementById(maalId);

      if (el && el.getBoundingClientRect().top <= navHoejde + 60) {
        aktuelPunkt = punkt;
      }
    });

    /* Fjern aktiv fra alle, sæt aktiv på den rigtige */
    sektionsPunkter.forEach(function (p) {
      p.classList.remove("aktiv");
    });
    aktuelPunkt.classList.add("aktiv");
  }

  /* Lyt på scroll */
  window.addEventListener("scroll", opdaterAktivSektion);

  /* Kør én gang ved load */
  opdaterAktivSektion();
}
