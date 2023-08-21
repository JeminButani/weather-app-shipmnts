import React, {useState} from 'react'
import SearchBar from './SearchBar'
import WeatherCard from './WeatherCard';

const Home = () => {
    const [searchValue, setSearchValue] = useState("Gandhinagar");
  const [data, setData] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=8eab502f7d0f1b3248181bc0b17522f1`;
      const res = await fetch(url);
      const weatherData = await res.json();
      const { temp, humidity, pressure } = weatherData.main;
      const { main: weathermood } = weatherData.weather[0];
      const { name } = weatherData;
      const { speed } = weatherData.wind;
      const { country, sunset } = weatherData.sys;
      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };
      setData(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
        <div className=' m-auto  flex flex-col items-center justify-center h-[20%] w-full  '>
        <div className="wrap w-[50%]">
        <div className="bg-white  flex justify-between rounded-md">
          <input
            type="search"
            placeholder="Enter the city name...."
            id="search"
            autoFocus
            className="w-full px-4 py-2"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className=" bg-blue-500 px-4 py-2  text-white "
            id="srchbtn"
            type="Submit"
            onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>
        </div>
      <div className=' m-auto mt-10 flex flex-col items-center justify-center h-[60%] w-1/2 rounded-lg '>
        <WeatherCard tempInfo={data} />
      </div>
    </>
  )
}

export default Home
