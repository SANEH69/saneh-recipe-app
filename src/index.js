function displayRecipe(response) {
    new Typewriter('#recipe', {
        strings: response.data.answer,
        autoStart: true,
        delay : 1,
        cursor : "",
    });
}

function fetchRecipe(event) {
    event.preventDefault()
    let searchRecipeElement = document.querySelector("#search-recipe");
    let apiKey = "04d1784de2be03a1bd2o2db8tf6b23e4";
    let context = "You are a very brilliant virtual assistant that know so much about cooking and recipes. Please provide a precise, simple and straightforward recipe. Please provide a picture as well, if you can.";
    let prompt = `Please provide a recipe about ${searchRecipeElement.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let recipe = document.querySelector("#recipe");
    recipe.innerHTML = "⌛ Please hang on as we fetch your recipe";

    axios.get(apiUrl).then(displayRecipe);
}

let submitButton = document.querySelector("#submit-recipe");
submitButton.addEventListener('submit', fetchRecipe);
