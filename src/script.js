function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Earth our mother nature",
    autoStart: true,
    delay: 1,
    cusor: "",
  });
}

let poemGeneratorFormElement = document.querySelector("#poem-generator-form");
poemGeneratorFormElement.addEventListener("submit", generatePoem);
