const API_KEY = "Enter API_KEY";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(`${API_URL}${city}&appid=${API_KEY}`);

    if (response.status === 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        const data = await response.json();

        // Update weather data
        document.querySelector(".city").textContent = data.name;
        document.querySelector(".temp").textContent = `${Math.round(data.main.temp)}°C`;
        document.querySelector(".humidity").textContent = `${data.main.humidity}%`;
        document.querySelector(".wind").textContent = `${data.wind.speed} m/s`;

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "./Assets/Cloudy.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "./Assets/Clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "./Assets/Rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "./Assets/Drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "./Assets/Mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

// Event Listeners
searchBtn.addEventListener("click", () => {
    checkWeather(searchInput.value);
});

searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        checkWeather(searchInput.value);
    }
});