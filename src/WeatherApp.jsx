import "./WeatherApp.css"
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from "react";
export default function WeatherApp(){

    const[weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feels_like: 26.02,
        humidity: 79,
        temp: 26.02,
        temp_max: 26.02,
        temp_min: 26.02,
        weather: "overcast clouds"
    })
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div className="weatherapp">
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}