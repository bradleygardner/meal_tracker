import { loadHeaderFooter, save, edit, get, getParam } from "./utils.js";

//let edit = false;

loadHeaderFooter(true, true);
const param = getParam("id");
if (param){
    const item = await get(`/recipe/${param}`);
    document.getElementById("name").value = item.name;
    document.getElementById("servingSize").value = item.servingSize;
    document.getElementById("totalTime").value = item.totalTime;
    document.getElementById("prepTime").value = item.prepTime;
    document.getElementById("cookTime").value = item.cookTime;
    document.getElementById("ingredients").value = item.ingredients;
    document.getElementById("instructions").value = item.instructions;
    edit = true;
}

document.forms["recipe"].addEventListener("submit", (event) => {
    event.preventDefault();
    saveRecipe(event.target);
});

async function saveRecipe(form) {
    let recipe = {
        name: form.elements.name.value,
        servingSize: form.elements.servingSize.value,
        totalTime: form.elements.totalTime.value,
        prepTime: form.elements.prepTime.value,
        cookTime: form.elements.cookTime.value,
        ingredients: form.elements.servingSize.value,
        instructions: form.elements.instructions.value,
    }
    try {
        if (edit){
            const res = await edit(recipe, "/recipe");
        }else{
            const res = await save(recipe, "/recipe");
        }
    }
    catch (err) {
        console.log(err);
    }
}