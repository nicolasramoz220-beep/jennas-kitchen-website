async function post() {
    const inputField = document.getElementById('text')
    const commentValue = inputField.value;

    if (!commentValue) return alert("Comment your Thoughts");

}
try {
    //Sending the data to the api
    const response = await fetch ('https://spoonacular.com/food/recipes/123/comments/apiKey=5545447f3c844e2981f44c3b17e64b33');
    method:'POST',
    headers: {
        'Content-Type': 'application/json'
    }
    body: JSON.stringify({
        comment: commentValue,
        timestamp: new Data()
    })
});


if (response.ok) {
      const data = await response.json();
      console.log('Success:', data);
      inputField.value = ""; 
      
      // Clear input on success
      alert("Comment saved to the server!");
    } else {
      alert("Server error. Comment wasn't saved.");
    }
   }catch (error) {
    console.error('Network error:', error);
    alert("Could not connect to the API.");
  }
  }