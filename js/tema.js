var punkter = document.querySelectorAll(".sidebar-sek-punkt");

if (punkter.length > 0) {

  punkter.forEach(function (p) {
    p.addEventListener("click", function () {
      var el = document.getElementById(p.getAttribute("data-maal"));
      if (!el) return;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 76, behavior: "smooth" });
      punkter.forEach(function (x) { x.classList.remove("aktiv"); });
      p.classList.add("aktiv");
    });
  });

  function opdater() {
    var aktiv = punkter[0];
    punkter.forEach(function (p) {
      var el = document.getElementById(p.getAttribute("data-maal"));
      if (el && el.getBoundingClientRect().top <= 124) aktiv = p;
    });
    punkter.forEach(function (x) { x.classList.remove("aktiv"); });
    aktiv.classList.add("aktiv");
  }

  window.addEventListener("scroll", opdater, { passive: true });
  opdater();

}
