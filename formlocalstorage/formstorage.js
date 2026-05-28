document.getElementById("userForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from reloading the page

  // Create a FormData object from the form
  const formData = new FormData(event.target);
  const newEntry = {};

  // Convert FormData to a plain object
  formData.forEach((value, key) => {
    newEntry[key] = value.trim(); // Trim whitespace
  });

  // Get existing responses from localStorage or start with empty array
  const existingData = JSON.parse(localStorage.getItem("formResponse")) || [];

  // Add the new entry to the array
  existingData.push(newEntry);

  // Store updated array in localStorage
  localStorage.setItem("formResponse", JSON.stringify(existingData));

  alert("Form submitted and stored successfully!");

  // Optionally, clear the form
  event.target.reset();
});