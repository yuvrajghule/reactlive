import React, { useState } from 'react';
import axios from 'axios';
import "./weather.css";

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const fetchWeatherData = () => {
    setError(null); // Clear any previous errors
    setWeatherData(null); // Clear previous weather data

    // Replace 'API_ENDPOINT' with your backend API URL
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=10959d30c320da502d5810cf85c61935&units=metric`)
      .then((response) => {
        setWeatherData(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
        setError('Error fetching weather data. Please try again later.');
      });
  };

  const renderWeatherInfo = () => {
    if (!weatherData) {
      return <p>No data available for the provided city.</p>;
    }

    // const { city, temperature, description } = weatherData;
    return (
      <div>
        <h2>Weather in {weatherData.name}</h2>
        <p>Temperature: {weatherData.main.temp}°C</p>
        <p>Wind speed: {weatherData.wind.speed}</p>
      </div>
    );
  };

  return (
    <div className='weather-app-container'>
      <h1>Weather App</h1>
      <div>
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="Enter city name"
        />
        <button onClick={fetchWeatherData}>Get Weather</button>
      </div>
      <div>
        {error ? <p>{error}</p> : (weatherData ? renderWeatherInfo() : <p>Enter a city and click 'Get Weather' to see the current weather.</p>)}
      </div>
    </div>
  );
};

export default WeatherApp;
