import useWeather from "../hooks/useWeather";
import Spinner from "./Spinner";

const Result = () => {
  const { result } = useWeather();
  const { name, main } = result;

  return (
    <div className="contenedor weather">
      <h2>El Clima de {name} es: </h2>
      <p>
        {parseInt(main.temp)} <span>&#x2103;</span>
      </p>
      <div className="temp_min_max">
        <p>
          Mín: {main.temp_min} <span>&#x2103;</span>
        </p>
        <p>
          Máx: {main.temp_max} <span>&#x2103;</span>
        </p>
      </div>
    </div>
  );
};

export default Result;
