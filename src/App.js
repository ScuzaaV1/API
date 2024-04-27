import { useState } from 'react';
import './App.css';

function App() {
  const [city, SetCity] = useState('');
  const [weatherInfo, setWeatherInfo] = useState(null)

function getWeather() {
  const apiKey = '94f17ffd8f6de149583a6fba7e8fbabb'
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

  fetch(url)
  .then((response) => response.json())
  .then((data) =>{
    // console.log(data)
    let MT =Math.round(data.main.temp);
    let FL =Math.round(data.main.feels_like);

    const weather ={
      location: `Weather in ${data.name}`,
      temperature: `Tempuerature: ${MT} C `,
      feels_like:`Feels Like: ${FL} C`,
      humidity: `Humidity : ${data.main.humidity} %`,
      wind: `Wind: ${data.wind.speed} km/h`,
      condition: `Weather Condition : ${data.weather[0].description}`,
    };
    setWeatherInfo(weather);
  })
  .catch((error) => {
    console.error(error);
  });
}

  return (
    <div className="App">
      <input type='text'
      placeholder='Enter City Name'
      value={city}
      onChange={(e) => SetCity(e.target.value)}>
      </input>
      <button onClick={getWeather}>Get Weather</button>
      {weatherInfo && (
        <div className='weather-info'>
          <h3>{weatherInfo.location}</h3>
          <p>{weatherInfo.feels_like}</p>
          <p>{weatherInfo.humidity}</p>
          <p>{weatherInfo.wind}</p>
          <p>{weatherInfo.condition}</p>
        </div>
      )
      }
    </div>
  );
}
export default App;
