import { useState } from "react";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  const [city, setCity] = useState("");
  const [weatherList, setWeatherList] = useState([]);
  const [background, setBackground] = useState("#ffffff");

  const apiKey = "0178f4e188ff32eea57b812dd9763baa";

  const fetchWeather = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;

    const res1 = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const current = await res1.json();

    const res2 = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
    );
    const forecastData = await res2.json();

    const forecast = forecastData.list
      .filter((item) => item.dt_txt.includes("12:00:00"))
      .slice(0, 4);

    setWeatherList([{ current, forecast }, ...weatherList]);

    const main = current.weather[0].main;
    if (main.includes("Cloud")) setBackground("#d8d8d8");
    else if (main.includes("Rain")) setBackground("#9ec4ff");
    else if (main.includes("Clear")) setBackground("#fff6b0");
    else if (main.includes("Snow")) setBackground("#e8f7ff");
    else setBackground("#ffffff");

    setCity("");
    };

  return (
    <section style={{ padding: "40px", textAlign: "center", background, minHeight: "100vh" }}>
      <header>
        <form onSubmit={fetchWeather}>
          <input
            type="text"
            value={city}
            placeholder="Brussel"
            onChange={(e) => setCity(e.target.value)}
          />
          <button style={{ marginLeft: "8px" }}>Zoeken</button>
        </form>
      </header>

      <section>
        {weatherList.map((w, index) => (
          <WeatherInfo key={index} data={w} />
        ))}
      </section>
    </section>
  );
}

export default App;
