import { loadHeaderFooter, save, put, get, getParam } from "./utils.js";

let edit = false;

loadHeaderFooter(true, true);

await populateRecipes();

async function populateRecipes(){
    const recipes = await get("/recipe");
    let selectElement = document.getElementById("recipe")
    for (var i = 0; i < recipes.length; i++){
        let optionsElement = document.createElement("option");
        optionsElement.value = recipes[i]._id;
        optionsElement.text = recipes[i].name;
         selectElement.appendChild(optionsElement);
    }
}

const param = getParam("id");
if (param){
    const item = await get(`/meal/${param}`);
    document.getElementById("name").value = item.name;
    document.getElementById("recipe").value = item.recipeId; //Fix this one...
    document.getElementById("rating").value = item.rating;
    edit = true;
}

document.forms["meal"].addEventListener("submit", (event) => {
    event.preventDefault();
    saveMeal(event.target);
});

async function saveMeal(form) {
    let meal = {
        name: form.elements.name.value,
        recipeId: form.elements.recipe.value,
        rating: form.elements.rating.value
    }
    try {
        if (edit){
            const res = await put(meal, "/meal");
        }else{
            const res = await save(meal, "/meal");
        }
    }
    catch (err) {
        console.log(err);
    }
}