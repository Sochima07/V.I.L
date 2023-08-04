// Function to filter products by category
function filterProduct(value) {
    // Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      // Check if value equals innerText
      if (value.toUpperCase() === button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    // Select all product boxes
    let boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
      const category = box.getAttribute("data-category");
      // Display all boxes on 'all' button click
      if (value === "all" || category.toUpperCase() === value.toUpperCase()) {
        box.style.display = "block";
      } else {
        // Hide other boxes
        box.style.display = "none";
      }
    });
  }
  
  // Search button click
  document.getElementById("search").addEventListener("click", () => {
    // Initializations
    let searchInput = document.getElementById("search-input").value;
    let boxes = document.querySelectorAll(".box");
  
    // Loop through all boxes
    boxes.forEach((box) => {
      let productName = box.getElementsByTagName("figcaption")[0].innerText.toUpperCase();
      // Check if text includes the search value
      if (productName.includes(searchInput.toUpperCase())) {
        // Display matching box
        box.style.display = "block";
      } else {
        // Hide others
        box.style.display = "none";
      }
    });
  });
  
  // Initially display all products
  window.onload = () => {
    filterProduct("all");
  };
  