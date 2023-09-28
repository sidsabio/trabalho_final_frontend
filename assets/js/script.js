// const carousel = new bootstrap.Carousel("#myCarousel");

const botao = document.querySelector(".btn-fixed");

window.addEventListener("scroll", function (event) {
  if (window.scrollY == 0) {
    botao.classList.remove("visible");
  } else {
    botao.classList.add("visible");
  }
});

function toggleTema() {
  let toggleTema = document.getElementById("header");
  toggleTema.classList.toggle("light-mode");
}

function exibirReceita(numero) {
  document.getElementById("bloody-mary-input").style.color = "#ab9555";
  document.getElementById("bloody-mary-input").style.borderBottom = "";
  document.getElementById("basil-smash-input").style.color = "#ab9555";
  document.getElementById("basil-smash-input").style.borderBottom = "";
  document.getElementById("dry-martini-input").style.color = "#ab9555";
  document.getElementById("dry-martini-input").style.borderBottom = "";
  document.getElementById("jack-coke-input").style.color = "#ab9555";
  document.getElementById("jack-coke-input").style.borderBottom = "";
  document.getElementById("margarita-input").style.color = "#ab9555";
  document.getElementById("margarita-input").style.borderBottom = "";
  document.getElementById("negroni-input").style.color = "#ab9555";
  document.getElementById("negroni-input").style.borderBottom = "";
  document.getElementById("pina-colada-input").style.color = "#ab9555";
  document.getElementById("pina-colada-input").style.borderBottom = "";

  const drinks = {
    1: { name: "Bloody Mary", image: "./assets/src/img/bloody-mary.png" },
    2: { name: "Basil Smash", image: "./assets/src/img/basil-smash.png" },
    3: { name: "Dry Martini", image: "./assets/src/img/dry-martini.png" },
    4: { name: "Jack Coke", image: "./assets/src/img/jack-coke.png" },
    5: { name: "Margarita", image: "./assets/src/img/margarita.png" },
    6: { name: "Negroni", image: "./assets/src/img/negroni.png" },
    7: { name: "Pina Colada", image: "./assets/src/img/pinacolada.png" },
  };

  const drink = drinks[numero];
  if (drink) {
    const exibeFotos = document.getElementById("exibe-drink");
    exibeFotos.innerHTML = `<img src="${drink.image}" alt="Imagem do ${drink.name}" style="width: 100%; height: 100%;">`;
    document.getElementById(
      `${drink.name.toLowerCase().replace(" ", "-")}-input`
    ).style.color = "aliceblue";

    document.getElementById(
      `${drink.name.toLowerCase().replace(" ", "-")}-input`
    ).style.borderBottom = "1px solid #fdf9ea";
  }
}

function mudar() {
  let header = document.getElementById("header");
  let footer = document.getElementById("footer");
  let destaque = document.getElementsByClassName("destaque");

  header.classList.toggle("header-light");
  footer.classList.toggle("footer-light");
  destaque[0].classList.toggle("destaque-light");
}
