import { loadHeaderFooter, get, deleteItem, renderListWithTemplate } from "./utils.js";

await loadHeaderFooter(true, true);

await loadMeals();

let deleteBtn = document.querySelectorAll(".delete");

deleteBtn.forEach((btn) => {
    btn.addEventListener("click", deleteMeal);
});

async function loadMeals() {
    const meals = await get("/meal");
    for (i = 0; i < meals.length; i++){
        const recipe = await get(`/recipe/${meals[i].recipeId}`);
        meals[i].recipe = recipe.name;
    }
    const element = document.getElementById("main-table")
    renderListWithTemplate(mealsListTemplate, element, meals)
}

export function mealsListTemplate(item) {
    
    return `<li class="item">
       <a href="meals/meal?id=${item._id}">
           <h3>Name: ${item.name}</h3>
           <h3>Recipe: ${item.recipe}</h3>
           <h3>Rating: ${item.rating}</h3>
           </a>
           <button class="delete" data-id="${item._id}">Delete</button>
   </li>`
}

export async function deleteMeal(e) {
    const res = await deleteItem(`/meal/${e.target.dataset.id}`)
    // if (res.status == 200){
        
    // }
}