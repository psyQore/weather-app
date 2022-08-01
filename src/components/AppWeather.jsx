import Form from "./Form";
import Result from "./Result";
import useWeather from "../hooks/useWeather";
import Spinner from "./Spinner";

const AppWeather = () => {
  const { result, loading, noResult } = useWeather();

  return (
    <>
      <main className="dos-columnas">
        <Form />

        {loading ? (
          <Spinner />
        ) : result?.name ? (
          <Result />
        ) : noResult ? (
          <p>{noResult}</p>
        ) : (
          <p>El clima se va a mostrar aquí</p>
        )}
      </main>
    </>
  );
};

export default AppWeather;
