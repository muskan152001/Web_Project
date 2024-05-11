// Simulated weather data
var currentWeatherData = {
    temperature: 20,
    humidity: 75,
    windSpeed: 10
};

var forecastData = [
    { day: "Monday", temperature: 22, condition: "Sunny" },
    { day: "Tuesday", temperature: 20, condition: "Partly Cloudy" },
    { day: "Wednesday", temperature: 18, condition: "Rainy" }
];

// Update current weather details
document.getElementById("current-temp").textContent = currentWeatherData.temperature;
document.getElementById("current-humidity").textContent = currentWeatherData.humidity;
document.getElementById("current-wind-speed").textContent = currentWeatherData.windSpeed;

// Populate forecast list
var forecastList = document.getElementById("forecast-list");
forecastData.forEach(function(item) {
    var listItem = document.createElement("li");
    listItem.textContent = item.day + ": " + item.temperature + "°C, " + item.condition;
    forecastList.appendChild(listItem);
});

// Simulated map initialization (replace with actual map integration)
var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);
