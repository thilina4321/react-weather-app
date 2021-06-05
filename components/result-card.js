import Image from "next/image";
import { useEffect, useState } from "react";
import classes from "./result-card.module.css";

const ResultCard = (props) => {


    const {city, celsius, weather, speed, error, loading} = props

    if(error){
        return <section className={classes.section}>
            <h1> {error} </h1>
        </section>
    }

    if(loading){
        return <section className={classes.section}> Loading... </section>
    }
  
  return (
    <section className={classes.section}>
    <h1> {city} </h1>
      <h1>{celsius} Celsius</h1>
      <h1> Weather </h1>
      <p> {weather.main} </p>
      <p> {weather.description} </p>
      <h1> Wind Speed</h1>
      <p> {speed} KMPH</p>
    </section>
  );
};

export default ResultCard;
