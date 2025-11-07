import { useState } from "react";

function WeatherInfo({ data }) {
  const [open, setOpen] = useState(false);
  const { current, forecast } = data;

  return (
    <div
      style={{
        marginTop: "30px",
        display: "inline-block",
        textAlign: "left",
        cursor: "pointer",
        padding: "15px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        background: "white"
      }}
      onClick={() => setOpen(!open)}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <h1>{current.name}</h1>
        <img src={`https://openweathermap.org/img/wn/${current.weather[0].icon}.png`} />
      </div>

      <p>Temperatuur: {current.main.temp} °C</p>

      {open && (
        <>
          <p>Gevoelstemperatuur: {current.main.feels_like} °C</p>
          <p>Luchtvochtigheid: {current.main.humidity}%</p>
          <p>Wind snelheid: {current.wind.speed} m/s</p>

          <h3 style={{ marginTop: "10px" }}>Weer komende dagen:</h3>
          {forecast.map((day, i) => (
            <div key={i}>
              <p>{day.dt_txt.slice(0, 10)} - {day.main.temp}°C</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default WeatherInfo;
