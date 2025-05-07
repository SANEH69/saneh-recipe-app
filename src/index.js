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
    let context = "You are a very brilliant virtual assistant that know so much about cooking and recipes. Please do not make it a paragraph but a list with bullet points. Make sure the subtitles are in a bold font. Do not include the 'servings' section. Please skip the formalities and just get straight to the point.";
    let prompt = `Please provide a recipe about ${searchRecipeElement.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let recipe = document.querySelector("#recipe");
    recipe.innerHTML = "⌛ Please hang on as we fetch your recipe";

    axios.get(apiUrl).then(displayRecipe);
}

let searchButtonElement = document.querySelector(".recipe-search");
searchButtonElement.addEventListener('submit', fetchRecipe);