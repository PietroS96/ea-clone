// modificare lo stile della nav ultime novità
function buildListUN() {
  let buttons = document.querySelectorAll(".li-nav-UN");

  for (button in buttons) {
    buttons[button].onclick = function () {
      buttons.forEach(function (btn) {
        btn.classList.remove("liBG");
        btn.classList.remove("atStart");
      });
      this.classList.add("liBG");
    };
  }
}
buildListUN();

// mostrare le etichette (ci sto ancora lavorando)
function buildSection() {
  document.querySelector("#button-UN1").addEventListener("click", function () {
    document.querySelector("#et-section-1").style.display = "grid";

    document.querySelector("#et-section-2").style.display = "none";
    document.querySelector("#et-section-3").style.display = "none";
    document.querySelector("#et-section-4").style.display = "none";
    document.querySelector("#et-section-5").style.display = "none";
    document.querySelector("#et-section-6").style.display = "none";
    document.querySelector("#et-section-7").style.display = "none";
    document.querySelector("#et-section-8").style.display = "none";
  });

  document.querySelector("#button-UN2").addEventListener("click", function () {
    document.querySelector("#et-section-2").style.display = "grid";

    document.querySelector("#et-section-1").style.display = "none";
    document.querySelector("#et-section-3").style.display = "none";
    document.querySelector("#et-section-4").style.display = "none";
    document.querySelector("#et-section-5").style.display = "none";
    document.querySelector("#et-section-6").style.display = "none";
    document.querySelector("#et-section-7").style.display = "none";
    document.querySelector("#et-section-8").style.display = "none";
  });

  document.querySelector("#button-UN3").addEventListener("click", function () {
    document.querySelector("#et-section-3").style.display = "grid";

    document.querySelector("#et-section-1").style.display = "none";
    document.querySelector("#et-section-2").style.display = "none";
    document.querySelector("#et-section-4").style.display = "none";
    document.querySelector("#et-section-5").style.display = "none";
    document.querySelector("#et-section-6").style.display = "none";
    document.querySelector("#et-section-7").style.display = "none";
    document.querySelector("#et-section-8").style.display = "none";
  });

  document.querySelector("#button-UN4").addEventListener("click", function () {
    document.querySelector("#et-section-4").style.display = "grid";

    document.querySelector("#et-section-1").style.display = "none";
    document.querySelector("#et-section-2").style.display = "none";
    document.querySelector("#et-section-3").style.display = "none";
    document.querySelector("#et-section-5").style.display = "none";
    document.querySelector("#et-section-6").style.display = "none";
    document.querySelector("#et-section-7").style.display = "none";
    document.querySelector("#et-section-8").style.display = "none";
  });

  document.querySelector("#button-UN5").addEventListener("click", function () {
    document.querySelector("#et-section-5").style.display = "grid";

    document.querySelector("#et-section-1").style.display = "none";
    document.querySelector("#et-section-2").style.display = "none";
    document.querySelector("#et-section-3").style.display = "none";
    document.querySelector("#et-section-4").style.display = "none";
    document.querySelector("#et-section-6").style.display = "none";
    document.querySelector("#et-section-7").style.display = "none";
    document.querySelector("#et-section-8").style.display = "none";
  });

  document.querySelector("#button-UN6").addEventListener("click", function () {
    document.querySelector("#et-section-6").style.display = "grid";

    document.querySelector("#et-section-1").style.display = "none";
    document.querySelector("#et-section-2").style.display = "none";
    document.querySelector("#et-section-3").style.display = "none";
    document.querySelector("#et-section-4").style.display = "none";
    document.querySelector("#et-section-5").style.display = "none";
    document.querySelector("#et-section-7").style.display = "none";
    document.querySelector("#et-section-8").style.display = "none";
  });

  document.querySelector("#button-UN7").addEventListener("click", function () {
    document.querySelector("#et-section-7").style.display = "grid";

    document.querySelector("#et-section-1").style.display = "none";
    document.querySelector("#et-section-2").style.display = "none";
    document.querySelector("#et-section-3").style.display = "none";
    document.querySelector("#et-section-4").style.display = "none";
    document.querySelector("#et-section-5").style.display = "none";
    document.querySelector("#et-section-6").style.display = "none";
    document.querySelector("#et-section-8").style.display = "none";
  });

  document.querySelector("#button-UN8").addEventListener("click", function () {
    document.querySelector("#et-section-8").style.display = "grid";

    document.querySelector("#et-section-1").style.display = "none";
    document.querySelector("#et-section-2").style.display = "none";
    document.querySelector("#et-section-3").style.display = "none";
    document.querySelector("#et-section-4").style.display = "none";
    document.querySelector("#et-section-5").style.display = "none";
    document.querySelector("#et-section-6").style.display = "none";
    document.querySelector("#et-section-7").style.display = "none";
  });
}
buildSection();
