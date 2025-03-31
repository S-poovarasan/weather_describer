import React,{useState}from "react";
import axios from "axios";
import"./App.css";

function App(){
    const[city,setCity]=useState("");
    const[weather,setWeather]=useState("");
    const API_KEY="72b659ec05a185a8af7828c0392ad16e";

    const fetchWeather=async()=>{
        if(!city)return;
        try{
            const response=await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
                    setWeather(response.data);
            }
            catch(error){
                alert("Enter a valid city.");
            }
        };
        return(
            <div className="container">
                <h1>Weather Describer</h1>
                <input   type="text"  value={city}  onChange={(e)=>setCity(e.target.value)}  />
                <button onClick={fetchWeather}>Get</button>
                {weather && (
                    <div className="weather-info">
                        <h2>{weather.name}</h2>
                        <p>Temperature: {weather.main.temp}°c</p>
                        <p>Climate: {weather.weather[0].description}</p>
                        <p>Wind Speed: {weather.wind.speed} m/s</p>
                    </div>
                )}
            </div>
        ); 
    }
    export default App;