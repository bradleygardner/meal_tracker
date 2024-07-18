import { loadHeaderFooter, get, deleteItem, renderListWithTemplate } from "./utils.js";

await loadHeaderFooter(true, true);

await loadRecipes();

let deleteBtn = document.querySelectorAll(".delete");
let nameReverse = false;

deleteBtn.forEach((btn) => {
    btn.addEventListener("click", deleteRecipe);
});

async function loadRecipes() {
    const recipes = await get("/recipe");
    const element = document.getElementById("main-table")
    renderListWithTemplate(recipeListTemplate, element, recipes)
    const sortNameButton = document.getElementById("sort_by_name");
    sortNameButton.addEventListener("click", () => sortByName(recipes, element));
}

export function recipeListTemplate(item) {
    return `<li class="item">
       <a href="recipes/recipe?id=${item._id}">
           <h3>Name: ${item.name}</h3>
           <h3>Serving Size: ${item.servingSize}</h3>
           <h3>Total Time: ${item.totalTime}</h3>
           <h3>Prep Time: ${item.prepTime}</h3>
           <h3>Cook Time: ${item.cookTime}</h3>
           <h4>Ingredients:</h4>
           <p>${item.ingredients}</p>
           <h4>Instructions:</h4>
           <p>${item.instructions}</p>
           </a>
           <button class="delete" data-id="${item._id}">Delete</button>
   </li>`
}

export async function deleteRecipe(e) {
    const res = await deleteItem(`/recipe/${e.target.dataset.id}`)
    // if (res.status == 200){
        
    // }
}

function sortByName(items, container) {
    items.sort((a, b) => a.name.localeCompare(b.name));
    const icon = document.getElementById("sort_name_icon");
    icon.textContent = "";
    if (nameReverse) {
        items.reverse();
        nameReverse = false;
        icon.textContent = "↓";
    } else {
        nameReverse = true;
        icon.textContent = "↑";
    }
    renderListWithTemplate(recipeListTemplate, container, items);
}