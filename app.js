document.getElementById("search-btn").addEventListener("click", function () {
  fetch('superheroes.php')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text(); // Parse the response as plain text (HTML)
    })
    .then(html => {
      alert(html); // Display the HTML as an alert
    })
    .catch(error => {
      console.error('Error fetching superhero data:', error); // Log the error for debugging
      alert(`Failed to fetch superhero data: ${error.message}`);
    });
});
