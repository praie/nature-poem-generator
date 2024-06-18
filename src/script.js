function displayPoem(response) {
  console.log("poem generated");
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
    "You are a poem enthusiast and love to write short poems.Your task is to generate a 4 line basic poem in HTML and separate each line with a <br>.Sign the poem with 'SheCdes AI'inside a <strong> element at the end and not at the beginning.Do not include a title to the poem.Make sure to follow instructions";
  let prompt = `User instructions: Generate a Nature poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayPoem);
}
let poemGeneratorFormElement = document.querySelector("#poem-generator-form");
poemGeneratorFormElement.addEventListener("submit", generatePoem);
