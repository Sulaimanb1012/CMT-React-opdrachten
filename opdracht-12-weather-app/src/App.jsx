import React, { useEffect, useState } from 'react';
import WeatherBackground from './components/WeatherBackground';
import { convertTemperature, getHumidityValue } from './components/Helper';
import { HumidityIcon } from './components/Icons';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState('');
  const [suggestion, setSuggestion] = useState([]);
  const [history, setHistory] = useState([]);
  const [expanded, setExpanded] = useState(null); 
  const API_KEY = '0178f4e188ff32eea57b812dd9763baa';
  const [unit, setUnit] = useState('C');
  const [error, setError] = useState('');

  useEffect(() => {
    if (city.trim().length >= 3 && !weather) {
      const timer = setTimeout(() => fetchSuggestions(city), 500);
      return () => clearTimeout(timer);
    }
    setSuggestion([]);
  }, [city, weather]);

  const fetchSuggestions = async (query) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`
      );
      if (res.ok) {
        setSuggestion(await res.json());
      } else {
        setSuggestion([]);
      }
    } catch {
      setSuggestion([]);
    }
  };

  const fetchWeatherData = async (url, name = '') => {
    setError('');
    try {
      const response = await fetch(url);
      if (!response.ok)
        throw new Error((await response.json()).message || 'Stad niet gevonden');
      const data = await response.json();
      setWeather(data);
      setCity(name || data.name);
      setSuggestion([]);

     
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${API_KEY}&units=metric`
      );
      const forecastData = await forecastRes.json();
      setForecast(forecastData.list.filter((_, i) => i % 8 === 0).slice(1, 5));

  
      setHistory((prev) => [
        ...prev,
        {
          id: Date.now(),
          name: name || data.name,
          temp: data.main.temp,
          icon: data.weather[0].icon,
          full: data,
          forecast: forecastData.list.filter((_, i) => i % 8 === 0).slice(1, 5),
        },
      ]);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!city.trim()) return setError('Voer een geldige stad in');
    await fetchWeatherData(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&appid=${API_KEY}&units=metric`
    );
  };

  const getWeatherCondition = () =>
    weather && {
      main: weather.weather[0].main,
      isDay:
        Date.now() / 1000 > weather.sys.sunrise &&
        Date.now() / 1000 < weather.sys.sunset,
    };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white relative">
      <WeatherBackground condition={getWeatherCondition()} />

      <div className="flex items-center justify-center p-6 min-h-screen relative z-10">
        <div className="bg-blue-950/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8 max-w-md w-full border border-blue-400/30 relative">
          <h1 className="text-4xl font-extrabold text-center mb-6 text-blue-200 drop-shadow-lg">
            Weather App
          </h1>

          
          {!weather ? (
            <form onSubmit={handleSearch} className="flex flex-col relative">
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Voer je stad in"
                className="mb-4 p-3 rounded border border-blue-400 bg-blue-900/60 text-blue-100 placeholder-blue-300 focus:outline-none focus:border-blue-300 transition duration-300"
              />

              {suggestion.length > 0 && (
                <div className="absolute top-12 left-0 right-0 bg-blue-900/90 shadow-md rounded z-10 border border-blue-500/30">
                  {suggestion.map((s) => (
                    <button
                      type="button"
                      key={`${s.lat}-${s.lon}`}
                      onClick={() =>
                        fetchWeatherData(
                          `https://api.openweathermap.org/data/2.5/weather?lat=${s.lat}&lon=${s.lon}&appid=${API_KEY}&units=metric`,
                          `${s.name}, ${s.country}${s.state ? `, ${s.state}` : ''}`
                        )
                      }
                      className="block hover:bg-blue-700 bg-transparent px-4 py-2 text-sm text-left w-full transition-colors text-blue-100"
                    >
                      {s.name}, {s.country}
                      {s.state && `, ${s.state}`}
                    </button>
                  ))}
                </div>
              )}

              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded transition-colors"
              >
                Get Weather
              </button>
            </form>
          ) : (
            <div className="mt-6 text-center transition-opacity duration-500">
              <button
                onClick={() => {
                  setWeather(null);
                  setCity('');
                }}
                className="mb-4 bg-blue-900 hover:bg-blue-800 text-white font-semibold py-1 px-3 rounded transition-colors"
              >
                Nieuwe zoekopdracht
              </button>

            
              <div
                onClick={() => setExpanded(expanded === weather.id ? null : weather.id)}
                className="cursor-pointer transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-bold text-blue-200">{weather.name}</h2>
                  <button
                    onClick={() => setUnit((u) => (u === 'C' ? 'F' : 'C'))}
                    className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-1 px-3 rounded transition-colors"
                  >
                    &deg;{unit}
                  </button>
                </div>

                {expanded === weather.id && (
                  <>
                    <img
                      src={`https://api.openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                      alt={weather.weather[0].description}
                      className="mx-auto my-4 animate-bounce"
                    />

                    <p className="text-4x1 font-bold text-blue-100">
                      {convertTemperature(weather.main.temp, unit)} &deg;{unit}
                    </p>
                    <p className="capitalize text-blue-200">
                      {weather.weather[0].description}
                    </p>

                    <div className="flex flex-wrap justify-around mt-6">
                      {[
                        [
                          HumidityIcon,
                          'Luchtvochtigheid',
                          `${weather.main.humidity}% (${getHumidityValue(weather.main.humidity)})`,
                        ],
                      ].map(([Icon, label, value]) => (
                        <div key={label} className="flex flex-col items-center m-2">
                          <Icon />
                          <p className="mt-1 font-semibold text-blue-200">{label}</p>
                          <p className="text-sm text-blue-300">{value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 text-sm text-blue-200">
                      <p>
                        <strong>Voelt als:</strong>{' '}
                        {convertTemperature(weather.main.feels_like, unit)}&deg;{unit}
                      </p>
                      <p>
                        <strong>Druk:</strong> {weather.main.pressure} hPa
                      </p>
                    </div>

                 
                    {forecast.length > 0 && (
                      <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-4 text-blue-200">
                          4-daagse voorspelling
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          {forecast.map((day, index) => (
                            <div
                              key={index}
                              className="bg-blue-900/60 p-4 rounded-lg border border-blue-500/30 text-center"
                            >
                              <p>
                                {new Date(day.dt * 1000).toLocaleDateString('nl-NL', {
                                  weekday: 'long',
                                })}
                              </p>
                              <img
                                src={`https://api.openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                                alt=""
                                className="mx-auto"
                              />
                              <p>{Math.round(day.main.temp)}°C</p>
                              <p className="capitalize text-blue-300">
                                {day.weather[0].description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          )}

       
          {history.length > 0 && (
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-3 text-blue-200 text-center">
                Zoekgeschiedenis
              </h3>
              <div className="space-y-2">
                {history.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setWeather(item.full)}
                    className="flex items-center justify-between bg-blue-900/60 p-3 rounded-lg border border-blue-500/30 cursor-pointer hover:bg-blue-800/70 transition"
                  >
                    <span>{item.name}</span>
                    <div className="flex items-center gap-2">
                      <img
                        src={`https://api.openweathermap.org/img/wn/${item.icon}.png`}
                        alt=""
                        className="w-6 h-6"
                      />
                      <span>{Math.round(item.temp)}°C</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {error && <p className="text-red-400 text-center mt-4">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default App;
