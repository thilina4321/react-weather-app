import classes from "./weather-card.module.css";

import Sunny from "../UI/sunny";
import Rainny from "../UI/rainy";
import Cloudy from "../UI/clody";
import { useRef } from "react";

const WeatherCard = (props) => {
  const cityRef = useRef("");

  const enterCityName = (e) => {
    e.preventDefault();

    const city = cityRef.current.value;

    if (!city) {
        console.log(city);
      return;
    }

    props.onSelectCity(city);
    cityRef.current.value = ''
  };
  return (
    <section className={classes.section}>
      <h1> Welcome to weather App </h1>
      <form onSubmit={enterCityName}>
        <input placeholder="Enter City" ref={cityRef}/>
        <button type="submit"> Search </button>
      </form>
      <h3> Find the weather </h3>
      <ul className={classes.icon}>
        <li>
          <Sunny />
        </li>
        <li>
          <Cloudy />
        </li>
        <li>
          <Rainny />
        </li>
      </ul>
    </section>
  );
};

export default WeatherCard;
