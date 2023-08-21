import React, { useState, useEffect } from "react";
import "./styles.css"

const WeatherCard = ({ tempInfo }) => {
  const [weatherState, setWeatherState] = useState("");
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
  } = tempInfo;

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatherState("wi-cloud");
          break;
        case "Haze":
          setWeatherState("wi-dust");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Mist":
          setWeatherState("wi-dust");
          break;
        case "Snow":
          setWeatherState("wi-snow");
          break;
        case "Smoke":
          setWeatherState("wi-smoke");
          break;
        case "Rain":
          setWeatherState("wi-rain");
          break;
        case "Windy":
          setWeatherState("wi-strong-wind");
          break;
        case "Thunderstorm":
          setWeatherState("wi-thunderstorm");
          break;
        case "Fog":
          setWeatherState("wi-fog");
          break;

        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);

  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <>
      <article className="w-full h-full flex flex-col bg-white">
        <div className="  h-[30%] mx-auto">
          <i className={`wi ${weatherState} text-8xl mx-auto`}></i>
        </div>

        <div className="flex h-[30%]  w-full mt-4 bg-red-50">
          {" "}
          <div className="text-5xl p-2 w-[30%] mx-auto my-auto">
            <span className="wi wi-thermometer">{temp}&deg;</span>
          </div>
          <div className="flex flex-col justify-between w-[40%]  p-2 mx-auto my-auto">
            <div className=" text-3xl">{weathermood}</div>
            <div className="text-3xl">
              {name}, {country}
            </div>
          </div>
          <div className="date">{new Date().toLocaleString()}</div>
        </div>
        <div className="flex">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr} <br />
                Sunset
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br />
                humidity
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br />
                Pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default WeatherCard;
