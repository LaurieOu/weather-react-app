import React, {  useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    const weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=1f34e3e5d2a2f89d1f52bdf06974edf8";
    fetch(weatherURL) //Promise   
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        console.log("AJAX response",  myJson);
        console.log("myJson.main.temp", myJson.main.temp)
        setTemperature(myJson.main.temp);
    })
    .catch(function (error) {
        console.log("Error: " + error);
    });
  }, []);

  return (
    <div className="App">
      The weather in London is currently {temperature}
    </div>
  );
}

export default App;
