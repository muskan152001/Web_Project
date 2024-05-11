document.getElementById("downloadButton").addEventListener("click", function() {
    // Replace with actual download functionality
    alert("Downloading Weather App!");
});
function downloadApp() {
  // Replace with actual download functionality
  alert("Downloading Weather App!");
}

function exploreWeather() {
  // Redirect or perform other actions when the button is clicked
  console.log("Exploring weather...");
  // Example: Redirect to weather page
  window.location.href = "weather.html";
}







document.getElementById("newsletterForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var email = document.getElementById("emailInput").value;
  // Replace with your newsletter subscription functionality
  console.log("Subscribing email: " + email);
  alert("Thank you for subscribing!");
});  




// JavaScript for Features Section

// Add event listeners for feature elements
document.addEventListener('DOMContentLoaded', function () {
  var features = document.querySelectorAll('.feature');

  features.forEach(function (feature) {
      feature.addEventListener('click', function () {
          // Example: Show alert when a feature is clicked
          var featureTitle = feature.querySelector('h3').textContent;
          alert("You clicked on: " + featureTitle);
      });
  });
});

// JavaScript for How It Works Section
// Add event listeners for step elements
document.addEventListener('DOMContentLoaded', function () {
  var steps = document.querySelectorAll('.step');

  steps.forEach(function (step) {
      step.addEventListener('mouseover', function () {
          // Example: Change background color on mouseover
          step.style.backgroundColor = "#f0f0f0";
      });

      step.addEventListener('mouseout', function () {
          // Example: Restore original background color on mouseout
          step.style.backgroundColor = "#fff";
      });
  });
});

async function showCountryList() {
  const countryList = document.getElementById("countryList");
  countryList.innerHTML = ""; // Clear previous options

  try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const countries = await response.json();

      countries.forEach(country => {
          const option = document.createElement("option");
          option.value = country.name.common;
          option.textContent = country.name.common;
          countryList.appendChild(option);
      });

      countryList.style.display = "block"; // Show the country dropdown
  } catch (error) {
      console.error("Error fetching country data:", error);
  }
}

function searchWeather() {
  const selectedCountry = document.getElementById("countryList").value;
  if (!selectedCountry) {
      console.error("Please select a country.");
      return;
  }

  // Implement weather search for the selected country using selectedCountry value
  console.log("Searching weather for:", selectedCountry);
}