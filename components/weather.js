import { useCallback, useEffect, useState } from "react";
import ResultCard from "./result-card";
import WeatherCard from "./weather-card";

import classes from "./weather.module.css";

const Weather = () => {
  const [city, setcity] = useState("Colombo");
  const [error, seterror] = useState("");
  const [celsius, setcelsius] = useState(0);
  const [weather, setweather] = useState({});
  const [speed, setspeed] = useState(0);
  const [loading, setloading] = useState(false)

  useEffect(() => {
      setloading(true)
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}
      &appid=5db59f1bb0d6e4217a0e045a40049082
      `,{
        
      }
    )
      .then((res) => {
        setloading(false)

        if (!res.ok) {
          seterror("Please check the city name");
          return;
        }
        seterror("");
        return res.json();
      })
      .then((resData) => {
          if(resData == undefined){
              seterror("please check the city name")
              return
          }
        if (!error) {
          setcelsius((+resData.main.temp - 273.15).toFixed(2));
          setweather({
            main: resData.weather[0].main,
            description: resData.weather[0].description,
          });
          setspeed(resData.wind.speed);
          
        }
      });

  }, [city]);

  const onSelectCity = useCallback((city) => {
    setcity(city);
  }, []);

  return (
    <div className={classes.main}>
      <div className={classes.div}>
        <div className={classes.input}>
          <WeatherCard onSelectCity={onSelectCity} />
        </div>
        <div className={classes.result}>
          <ResultCard
            error={error}
            city={city}
            celsius={celsius}
            weather={weather}
            speed={speed}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default Weather;
