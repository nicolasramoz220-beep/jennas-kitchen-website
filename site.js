// Jenna's Kitchen Sitewide Functionality

// Fake cart count
let cartCount = 0;

const cartButtons = document.querySelectorAll(".recipe-btn, .cart-btn, .buy-btn");

cartButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    cartCount++;

    button.innerText = "Added ✓";
    button.style.backgroundColor = "#6f8f52";

    showPopup("Recipe added to cart!");

    setTimeout(function() {
      button.innerText = "View Cart";
    }, 1000);
  });
});

// Search bar feature
const searchInput = document.querySelector(".fake-search-box input");
const searchButton = document.querySelector(".fake-search-box button");

if (searchInput && searchButton) {
  searchButton.addEventListener("click", function() {
    if (searchInput.value.trim() === "") {
      showPopup("Type something to search.");
    } else {
      showPopup("Searching for: " + searchInput.value);
    }
  });
}

// Comment / review submission
const commentInput = document.querySelector("#text");
const commentButton = document.querySelector(".comment-container button");

if (commentInput && commentButton) {
  commentButton.addEventListener("click", function() {
    if (commentInput.value.trim() === "") {
      showPopup("Please write a comment first.");
    } else {
      showPopup("Review submitted. Thank you!");
      commentInput.value = "";
    }
  });
}

// Newsletter signup
const newsletterInputs = document.querySelectorAll(".newsletter-input");
const newsletterButtons = document.querySelectorAll(".newsletter-btn");

newsletterButtons.forEach(function(button, index) {
  button.addEventListener("click", function() {
    let input = newsletterInputs[index];

    if (input && input.value.trim() !== "") {
      showPopup("Thanks for signing up!");
      input.value = "";
    } else {
      showPopup("Enter an email first.");
    }
  });
});

// Fake clickable links
const fakeLinks = document.querySelectorAll('a[href="#"]');

fakeLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    showPopup("This feature is coming soon!");
  });
});

// Reusable popup
function showPopup(message) {
  let popup = document.createElement("div");
  popup.className = "site-popup";
  popup.innerText = message;

  document.body.appendChild(popup);

  setTimeout(function() {
    popup.classList.add("show-popup");
  }, 50);

  setTimeout(function() {
    popup.classList.remove("show-popup");

    setTimeout(function() {
      popup.remove();
    }, 300);
  }, 2000);
}