/* ── tema.js 
   Brugt på alle temaprojektsider (t1–t6) og om-mig.
   Indeholder:
     Sidebar-sektionsnavigation (kun desktop):
       - Klik på en knap → smooth scroll til den sektion
       - Scroll i siden → fremhæv den aktuelle sektion
    */

"use strict";

var sektionsPunkter = document.querySelectorAll(".sidebar-sek-punkt");

if (sektionsPunkter.length > 0) {
  /* Hent alle sektion-id'er fra knappernes data-maal attribut */
  var sektionIds = [];
  sektionsPunkter.forEach(function (punkt) {
    sektionIds.push(punkt.getAttribute("data-maal"));
  });

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

      /* Sæt aktiv klasse på den klikkede knap */
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
    var aktuelId = sektionIds[0]; /* Fallback: første sektion */

    sektionIds.forEach(function (id) {
      var el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= navHoejde + 60) {
        aktuelId = id;
      }
    });

    sektionsPunkter.forEach(function (punkt, i) {
      if (sektionIds[i] === aktuelId) {
        punkt.classList.add("aktiv");
      } else {
        punkt.classList.remove("aktiv");
      }
    });
  }

  /* Lyt på scroll — passive: true forbedrer ydeevnen */
  window.addEventListener("scroll", opdaterAktivSektion, { passive: true });

  /* Kør én gang ved load for at sætte den rigtige aktive sektion */
  opdaterAktivSektion();
}
