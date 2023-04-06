const apiKey = "82d496dc7e80a2a8fcdacc2cb5865b64";
const searchButton = document.getElementById("search-button");

const searchBar = document.getElementById("search-bar");

const cityName = document.querySelector(".city-name");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const weatherType = document.querySelector(".weather-type");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");



searchButton.addEventListener("click", () => {
  const city = searchBar.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      cityName.textContent = data.name;
      weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">`;
      temperature.textContent = `${Math.round(data.main.temp)}°C`;
      weatherType.textContent = data.weather[0].main;
      humidity.textContent ="Humidity  " + data.main.humidity + "%"  ;
      windSpeed.textContent = data.wind.speed + "km/hr";
    })
    .catch((error) => {
      console.log(error);
    });
});

