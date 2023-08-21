import React, { useState, useEffect } from "react";
import "./styles.css";

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

        <div className="flex h-[40%]  w-full mt-4 bg-red-100">
          {" "}
          <div className="text-5xl p-2 w-[30%] mx-auto my-auto">
            <span className="wi wi-thermometer">{temp}&deg;</span>
          </div>
          <div className="flex flex-col justify-between w-[40%]  p-2 mx-auto my-auto">
            <div className=" text-3xl font-bold">{weathermood}</div>
            <div className="text-3xl">
              {name}, {country}
            </div>
          </div>
          <div className="flex flex-col justify-between w-[30%]  p-2 bg-blue-500">
            <div className="py-auto text-4xl text-white mx-auto my-auto">
              {" "}
              {new Date().toLocaleString().split(",")[0]}
              <div className="py-1 text-white text-4xl mx-auto">
              {new Date().toLocaleString().split(",")[1]}
            </div>
            </div>
           
          </div>
        </div>
        <div className="flex h-[30%]  w-full mt-4  justify-evenly">
          <div className="flex gap-4 w-[25%]  p-2 mx-auto my-auto">
            <p>
              <i className={"wi wi-sunset text-2xl mx-auto mt-5 text-orange-400"}></i>
            </p>
            <p className="text-2xl mx-auto">
              {timeStr} <br />
              Sunset
            </p>
          </div>
          <div className="flex gap-4 w-[25%]  p-2 mx-auto my-auto">
            <p>
              <i className={"wi wi-humidity text-2xl mx-auto mt-5 text-blue-500"}></i>
            </p>
            <p className="text-2xl mx-auto">
              {humidity} <br />
              humidity
            </p>
          </div>
          <div className="flex gap-4 w-[25%]  p-2 mx-auto my-auto">
            <p>
              <i className={"wi wi-rain text-2xl mx-auto mt-5 text-blue-400"}></i>
            </p>
            <p className="text-2xl mx-auto">
              {pressure} <br />
              Pressure
            </p>
          </div>
          <div className="flex gap-4  w-[25%]  p-2 mx-auto my-auto">
            <p>
              <i className={"wi wi-strong-wind text-2xl mx-auto mt-5 text-gray-500"}></i>
            </p>
            <p className="text-2xl mx-auto">
              {speed} <br />
              Speed
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default WeatherCard;
