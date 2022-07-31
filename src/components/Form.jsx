import React from "react";

const Form = () => {
  return (
    <div className="contenedor">
      <form>
        <div className="campo">
          <label htmlFor="city">Ciudad</label>
          <input type="text" id="city" />
        </div>
        <div className="campo">
          <label htmlFor="city">Pais</label>
          <select id="country" name="country">
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
