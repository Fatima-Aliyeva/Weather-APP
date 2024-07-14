const searchInp = document.querySelector(".search");
const searchBtn = document.querySelector(".btn");
const result = document.querySelector(".result");
let container = document.querySelector(".container");

const API_KEY = "89e1502877e9366462908f859bffcf36";

async function data() {
  const city = searchInp.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`;
  try {
    const response = await fetch(url);
    const mydata = await response.json();

    if (!response.ok) {
      console.log("Olmadi");
    } else {
      melumatGoster(mydata);
      console.log(mydata);
      container.classList.add("all");
    }
  } catch (err) {
    console.error(err.message);
  }
}

function melumatGoster(data) {
  const city = searchInp.value;
  const weather = data.weather[0];
  const iconUrl = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;

  result.innerHTML = `
  <div class="giris">
    <div class="text">
  <h1> <i class="fa-solid fa-location-dot"></i> ${city}</h1>
   <p class="temp">${data.main.temp}°C</p>
    <p>${weather.description}</p>
     </div>
      <div class="sect-2">
  <p>
    <i class="fa-solid fa-feather"></i> Feels like: <br />
    ${data.main.feels_like}°C
  </p>
  <p>
    <i class="fa-solid fa-droplet"></i> Humidity: <br />
    ${data.main.humidity}%
  </p>
</div>
 <div class="weather-img">
  <img src="${iconUrl}" alt="${weather.description}">
 </div>
  </div>
  </div>

    <div class="wind">
    <p> <i class="fa-solid fa-wind"></i> Wind Speed: ${data.wind.speed} m/s</p>
    <p> <i class="fa-regular fa-compass"></i> Wind Direction: ${data.wind.deg}°</p>
    </div>
     
  `;
}

searchBtn.addEventListener("click", data);
