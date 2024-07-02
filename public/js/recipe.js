import { loadHeaderFooter, get, renderListWithTemplate } from "./utils.js";

loadHeaderFooter(true, true);

loadRecipes();

async function loadRecipes(){
    const recipes = await get("/recipe");
    const element = document.getElementById("main-content")
    renderListWithTemplate(recipeListTemplate, element, recipes)
}

export function recipeListTemplate(item) {
    return `<li class="item">
       <a href="recipe.html?id=${item._id}">
           <h3>${item.name}</h3>
           <h3>${item.servingSize}</h3>
           <h3>${item.totalTime}</h3>
           <h3>${item.prepTime}</h3>
           <h3>${item.cookTime}</h3>
           <p>${item.ingredients}</p>
           <p>${item.instructions}</p>
           </a>
           <button class="delete" data-id="${item._id}">Delete</button>
   </li>`
}