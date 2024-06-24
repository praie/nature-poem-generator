function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-input");
  let apiKey = "4t0029f88f229dc5e5o10e3ba24fdd6a";

  let context =
    "You are a poem enthusiast and love to write short poems.Your task is to generate a short line basic poem in HTML and separate each line with a <br>.Do not include a title to the poem.Make sure to follow instructions";
  let prompt = `User instructions: Generate a Nature poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳Generating a Nature poem about ${instructionsInput.value}</div>`;
  axios.get(apiURL).then(displayPoem);
}
let poemGeneratorFormElement = document.querySelector("#poem-generator-form");
poemGeneratorFormElement.addEventListener("submit", generatePoem);
