const API_KEY = "f35b17fcf28dd7aeedd7c3afb5f170ca";
const city = "Odessa";

const refreshButton = document.querySelector(".refresh-btn");
const degreeEl = document.querySelector(".degree");
const feelsLikeEl = document.querySelector(".feels-like");
const weatherPointEl = document.querySelector(".weather__point");
const humidityEl = document.querySelector(".humidity");
const pressureEl = document.querySelector(".pressure");
const windEl = document.querySelector(".wind");
const iconEl = document.querySelector(".weather-icon");
const updateEl = document.querySelector(".update");

async function getWeather() {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=en`
        );

        if (!response.ok) throw new Error("Failed to load weather data");

        const data = await response.json();
        console.log(data);

        degreeEl.textContent = `${Math.round(data.main.temp)}°C`;
        feelsLikeEl.textContent = `Feels like: ${Math.round(data.main.feels_like)}°C`;

        const description = data.weather[0].description;
        weatherPointEl.textContent =
            description.charAt(0).toUpperCase() + description.slice(1);

        humidityEl.textContent = `Humidity: ${data.main.humidity}%`;
        pressureEl.textContent = `Pressure: ${data.main.pressure} hPa`;
        windEl.textContent = `Wind: ${Math.round(data.wind.speed)} km/h`;

        const iconCode = data.weather[0].icon;
        iconEl.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        iconEl.alt = description;

        const now = new Date();
        const formatted = now.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
        });
        updateEl.firstChild.textContent = `Updated: ${formatted} `;

    } catch (error) {
        console.error("Error:", error);
        updateEl.firstChild.textContent = "Error loading data";
    }
}

getWeather();

refreshButton.addEventListener("click", (e) => {
    e.preventDefault();
    updateEl.firstChild.textContent = "Updating...";
    getWeather();
});

function updateDateTime() {
    const dateEl = document.querySelector(".date");
    const timeEl = document.querySelector("#time");
    const pmEl = document.querySelector("#pm-span");

    const now = new Date();

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const dayName = days[now.getDay()];
    const month = months[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();

    dateEl.textContent = `${month} ${day}, ${year} - ${dayName}`;

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, "0");

    timeEl.textContent = `${hours}:${formattedMinutes}`;
    pmEl.textContent = ampm;
}

updateDateTime();

setInterval(updateDateTime, 1000);
