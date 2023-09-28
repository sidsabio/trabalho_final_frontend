const carousel = new bootstrap.Carousel("#myCarousel");

function exibirReceita(numero, idInput) {
  document.getElementById(`${idInput}`).style.color = "";

  const drinks = {
    1: { name: "Bloody Mary", image: "./assets/src/img/bloody-mary.png" },
    2: { name: "Basil Smash", image: "./assets/src/img/basil-smash.png" },
    3: { name: "Dry Martini", image: "./assets/src/img/dry-martini.png" },
    4: { name: "Jack & Coke", image: "./assets/src/img/jack-coke.png" },
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
  }
}
