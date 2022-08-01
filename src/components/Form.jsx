import { useState } from "react";
import useWeather from "../hooks/useWeather";

const Form = () => {
  const [alert, setAlert] = useState("");

  const { search, searchData, consultWeather } = useWeather();
  const { city, country } = search;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(search).includes("")) {
      setAlert("Todos los campos son obligatorios");
      return;
    }

    setAlert("")
    consultWeather(search);
  };

  return (
    <div className="contenedor">
      {alert && <p>{alert}</p>}
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="city">Ciudad</label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={searchData}
            value={city}
          />
        </div>
        <div className="campo">
          <label htmlFor="city">Pais</label>
          <select
            id="country"
            name="country"
            onChange={searchData}
            value={country}
          >
            <option value="">-- Seleccione tu país --</option>
            <option value="CL">Chile</option>
            <option value="US">Estados Unidos</option>
            <option value="AR">Argentina</option>
            <option value="MX">Mexico</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Peru</option>
          </select>
        </div>
        <input type="submit" value="Consultar Clima" />
      </form>
    </div>
  );
};

export default Form;
