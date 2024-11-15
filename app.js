// Select the Search button
const searchBtn = document.getElementById("search-btn");

// Add click event listener
searchBtn.addEventListener("click", () => {
  // Fetch data from the superheroes.php endpoint
  fetch("superheroes.php")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json(); // Assuming the PHP script returns JSON
    })
    .then(data => {
      // Display the list of superheroes in an alert
      if (Array.isArray(data)) {
        alert("Superheroes:\n" + data.join("\n"));
      } else {
        alert("Unexpected response format");
      }
    })
    .catch(error => {
      console.error("There was a problem with the fetch operation:", error);
      alert("Failed to fetch superheroes.");
    });
});
