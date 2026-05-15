let savedIngredients = [];

const recipeDetails = {
    pancakes: {
        title: "Pancakes",
        ingredients: [
            "1 cup flour",
            "1 cup milk",
            "1 egg",
            "2 tablespoons sugar",
            "1 teaspoon baking powder",
            "Syrup or fruit"
        ],
        instructions: "Mix the flour, milk, egg, sugar, and baking powder in a bowl. Pour the batter onto a hot pan. Cook both sides until golden. Serve with syrup or fruit."
    },

    salad: {
        title: "Fresh Salad",
        ingredients: [
            "Lettuce",
            "Tomatoes",
            "Cucumber",
            "Carrots",
            "Olive oil",
            "Salt and pepper"
        ],
        instructions: "Wash and cut the vegetables. Place them in a bowl. Add olive oil, salt, and pepper. Mix everything and serve fresh."
    },

    pasta: {
        title: "Creamy Pasta",
        ingredients: [
            "Pasta",
            "Heavy cream",
            "Cheese",
            "Garlic",
            "Salt",
            "Fresh herbs"
        ],
        instructions: "Boil the pasta until soft. In another pan, cook garlic with cream and cheese. Add the pasta to the sauce. Mix well and add fresh herbs on top."
    },

    cake: {
        title: "Chocolate Cake",
        ingredients: [
            "2 cups flour",
            "1 cup sugar",
            "Cocoa powder",
            "Eggs",
            "Milk",
            "Butter",
            "Baking powder"
        ],
        instructions: "Mix the dry ingredients first. Add eggs, milk, and butter. Pour the batter into a baking pan. Bake until fully cooked. Let it cool before serving."
    },

    omelette: {
        title: "Cheese Omelette",
        ingredients: [
            "2 eggs",
            "Cheese",
            "1 tablespoon milk",
            "Butter",
            "Salt",
            "Pepper"
        ],
        instructions: "Beat the eggs with milk, salt, and pepper. Melt butter in a pan. Pour the eggs into the pan. Add cheese and fold the omelette when it is cooked."
    },

    chickenRice: {
        title: "Chicken Rice",
        ingredients: [
            "Chicken breast",
            "Rice",
            "Garlic",
            "Onion",
            "Olive oil",
            "Salt",
            "Pepper"
        ],
        instructions: "Cook the rice first. Season the chicken with salt and pepper. Cook chicken with garlic and onion in olive oil. Serve the chicken over the rice."
    }
};

window.openRecipe = function(recipeName) {
    const recipe = recipeDetails[recipeName];

    if (!recipe) {
        console.log("Recipe not found:", recipeName);
        return;
    }

    document.getElementById("recipeModalLabel").textContent = recipe.title;

    const ingredientsList = document.getElementById("recipeIngredients");
    ingredientsList.innerHTML = "";

    recipe.ingredients.forEach(function(ingredient) {
        const li = document.createElement("li");
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    document.getElementById("recipeInstructions").textContent = recipe.instructions;

    const modal = new bootstrap.Modal(document.getElementById("recipeModal"));
    modal.show();
};

window.addIngredients = function() {
    const input = document.querySelector(".ingredients");
    const value = input.value.toLowerCase().trim();

    if (value === "") {
        return;
    }

    savedIngredients.push(value);

    document.querySelector(".ingredient-text").textContent =
        "Ingredients entered: " + savedIngredients.join(", ");

    input.value = "";

    recipeSearch();
};

window.recipeSearch = function() {
    const input = document.querySelector(".ingredients");
    const inputValue = input.value.toLowerCase().trim();

    const searchWords = [...savedIngredients];

    if (inputValue !== "") {
        searchWords.push(inputValue);
    }

    const recipes = document.querySelectorAll(".recipe-item");
    const noResults = document.getElementById("noResults");

    let resultsFound = 0;

    recipes.forEach(function(recipe) {
        const title = recipe.dataset.title || "";
        const type = recipe.dataset.type || "";
        const ingredients = recipe.dataset.ingredients || "";

        const fullText = `${title} ${type} ${ingredients}`.toLowerCase();

        const match =
            searchWords.length === 0 ||
            searchWords.some(function(word) {
                return fullText.includes(word);
            });

        if (match) {
            recipe.style.display = "block";
            resultsFound++;
        } else {
            recipe.style.display = "none";
        }
    });

    if (resultsFound === 0) {
        noResults.classList.remove("d-none");
    } else {
        noResults.classList.add("d-none");
    }
};

window.newSearch = function() {
    savedIngredients = [];

    document.querySelector(".ingredients").value = "";
    document.querySelector(".ingredient-text").textContent = "Ingredients entered: ";

    const recipes = document.querySelectorAll(".recipe-item");

    recipes.forEach(function(recipe) {
        recipe.style.display = "block";
    });

    document.getElementById("noResults").classList.add("d-none");
};

/* Changing Images */
const recipeImages = {
    pancakes: [
        "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500",
        "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=500",
        "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=500"
    ],

    salad: [
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500",
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500"
    ],

    pasta: [
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500",
        "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500",
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500"
    ],

    cake: [
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
        "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=500",
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=500"
    ],

    omelette: [
        "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500",
        "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=500",
        "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=500"
    ],

    chickenRice: [
    "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500",
    "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=500",
    "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500"
]
};

let imageIndex = 0;

window.addEventListener("load", function() {
    function getRecipeKey(card) {
        const title = card.dataset.title || "";
        const heading = card.querySelector("h3")?.textContent.toLowerCase() || "";

        if (title.includes("pancakes") || heading.includes("pancakes")) return "pancakes";
        if (title.includes("salad") || heading.includes("salad")) return "salad";
        if (title.includes("pasta") || heading.includes("pasta")) return "pasta";
        if (title.includes("cake") || heading.includes("cake")) return "cake";
        if (title.includes("omelette") || heading.includes("omelette")) return "omelette";
        if (title.includes("chicken") || heading.includes("chicken")) return "chickenRice";

        return null;
    }

    function changeRecipeImages() {
        const recipeCards = document.querySelectorAll(".recipe-item");

        recipeCards.forEach(function(card) {
            const img = card.querySelector("img");
            const recipeKey = getRecipeKey(card);

            if (img && recipeKey && recipeImages[recipeKey]) {
                img.src = recipeImages[recipeKey][imageIndex % recipeImages[recipeKey].length];
            }
        });

        imageIndex++;
    }

    changeRecipeImages();
    setInterval(changeRecipeImages, 3000);
});

//favorito 
// Favorites
window.saveFavorite = function(recipeName) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!favorites.includes(recipeName)) {
        favorites.push(recipeName);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        alert("Recipe added to favorites!");
    } else {
        alert("This recipe is already in your favorites.");
    }

    showFavorites();
};

window.showFavorites = function() {
    const favoriteBox = document.getElementById("favoriteRecipes");

    if (!favoriteBox) {
        console.log("favoriteRecipes element not found");
        return;
    }

    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    favoriteBox.innerHTML = "";

    if (favorites.length === 0) {
        favoriteBox.textContent = "No favorite recipes yet.";
        return;
    }

    favorites.forEach(function(recipeName) {
        const recipe = recipeDetails[recipeName];

        if (recipe) {
            const item = document.createElement("p");
            item.textContent = "❤️ " + recipe.title;
            favoriteBox.appendChild(item);
        }
    });
};

window.addEventListener("load", function() {
    showFavorites();
});