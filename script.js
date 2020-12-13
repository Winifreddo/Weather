
let now = new Date();
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let year = now.getFullYear();
let date = now.getDate();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let inputTime = document.querySelector("#time");
inputTime.innerHTML = `${hour}: ${minutes}`;

let day = days[now.getDay()];
let month = months[now.getMonth()];
let inputDay = document.querySelector("h2");
inputDay.innerHTML = `${day}`;
let inputDate = document.querySelector("#date");
inputDate.innerHTML = `${date} ${month}, ${year}`;

function formatHours(timestamp) {
  let now = new Date(timestamp);
  let hour = now.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let year = now.getFullYear();
  let date = now.getDate();
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hour}:${minutes}`;
  
}
function showIcon(response){
  let icon = (response.data.weather[0].icon);
  document.querySelector("#icon-now").innerHTML = `<img 
  src ="http://openweathermap.org/img/wn/${icon}@2x.png"
  />`;
}

function showTemp(response) {
  
  
  document.querySelector("#city").innerHTML = response.data.name;
  let temp = Math.round(response.data.main.temp);
  document.querySelector("#temperature").innerHTML = `${temp}°C`;

  let humid = Math.round(response.data.main.humidity);
  document.querySelector("#humidity").innerHTML = `Humidity: ${humid}%`;

  let weatherDescription = response.data.weather[0].description;
  document.querySelector("#description").innerHTML = `${weatherDescription}`;

  let speed = response.data.wind.speed;
  document.querySelector("#wind").innerHTML = `Wind: ${speed} km/h`;

}
function showForecast(response) { 

  let forecastElement = document.querySelector("#forecasting");
  let forecast = (response.data.list[0]);
  let icon = (response);
 

  forecastElement.innerHTML = `<div class="col-2">
  <h4> 
     ${formatHours(forecast.dt*1000)}
</h4>
<img 
src ="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"
/>
<div id="weather-forecast">
<strong>${Math.round(forecast.main.temp_max)}°</strong>${Math.round(forecast.main.temp_min)}°
</div>
    </div>`;
    forecast = (response.data.list[1]);
    forecastElement.innerHTML += `<div class="col-2">
  <h4> 
     ${formatHours(forecast.dt*1000)}
</h4>
<img 
src ="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"
/>
<div id="weather-forecast">
<strong>${Math.round(forecast.main.temp_max)}°</strong>${Math.round(forecast.main.temp_min)}°
</div>
    </div>`;
    forecast = (response.data.list[2]);
    forecastElement.innerHTML += `<div class="col-2">
  <h4> 
     ${formatHours(forecast.dt*1000)}
</h4>
<img 
src ="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"
/>
<div id="weather-forecast">
<strong>${Math.round(forecast.main.temp_max)}°</strong>${Math.round(forecast.main.temp_min)}°
</div>
    </div>`;
    forecast = (response.data.list[3]);
    forecastElement.innerHTML += `<div class="col-2">
  <h4> 
     ${formatHours(forecast.dt*1000)}
</h4>
<img 
src ="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"
/>
<div id="weather-forecast">
<strong>${Math.round(forecast.main.temp_max)}°</strong>${Math.round(forecast.main.temp_min)}°
</div>
    </div>`;
    forecast = (response.data.list[4]);
    forecastElement.innerHTML += `<div class="col-2">
  <h4> 
     ${formatHours(forecast.dt*1000)}
</h4>
<img 
src ="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"
/>
<div id="weather-forecast">
<strong>${Math.round(forecast.main.temp_max)}°</strong>${Math.round(forecast.main.temp_min)}°
</div>
    </div>`;
    forecast = (response.data.list[5]);
    forecastElement.innerHTML += `<div class="col-2">
  <h4> 
     ${formatHours(forecast.dt*1000)}
</h4>
<img 
src ="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"
/>
<div id="weather-forecast">
<strong>${Math.round(forecast.main.temp_max)}°</strong>${Math.round(forecast.main.temp_min)}°
</div>
    </div>`;
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#input-city").value;
  let unit = "units=metric";
  let apiKey = "91a2969663631e6bc0bf8b6ad1300fee";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&${unit}`;
 
  axios.get(apiUrl).then(showTemp);
axios.get(apiUrl).then(showIcon);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&${unit}`;
  axios.get(apiUrl).then(showForecast);

  
}

let formSearch = document.querySelector("#search-form");

formSearch.addEventListener("submit", search);

