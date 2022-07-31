import { useState, createContext, Children } from "react";
import axios from "axios";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [search, setSearch] = useState({
    city: "",
    country: "",
  });
  const [result, setResult] = useState({});


  const searchData = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const consultWeather = async (data) => {
    try {
      const { city, country } = data;

      const appId = import.meta.env.VITE_API_KEY;

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&limit=1&appid=${appId}&units=metric`;
      const resCoord = await axios(url);
      const { lat, lon } = resCoord.data.coord;

      const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}&units=metric`;
      const resWeather = await axios(urlWeather);

      setResult(resWeather.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        search,
        searchData,
        consultWeather,
        result
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider };

export default WeatherContext;
