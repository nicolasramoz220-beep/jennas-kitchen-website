async function fetchData() {
     try {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=5545447f3c844e2981f44c3b17e64b33`);
        const data = await response.json();
        return data;
     }
     catch(error){
        console.error(`Error fetching data:`, error);
     }
}

// render data into cards//

async function renderData() {
    const container = document.querySelector(`.about_container`);
    const data = await fetchData();

    if (!data) return;

    const targetIds = [716426,715446,716406];

    data.results
    .filter(item => targetIds.includes(item.id))
    .forEach(item => {

        const card = document.createElement('div');
        card.classList.add('about_card');

        const title = document.createElement('h2');
        title.textContent = item.title;

        const recipeImage = document.createElement(`img`);
        recipeImage.src = item.image;
        recipeImage.alt = item.title;
        recipeImage.style.width = "100%";

        card.appendChild(title);
        card.appendChild(recipeImage);
        container.appendChild(card);
    });
}

// Call the renderData function to display data
renderData();



let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
