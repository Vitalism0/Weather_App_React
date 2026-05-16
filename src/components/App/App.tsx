import { useState } from "react";
import WeatherServices from "../../services/weatherService";
import Input from "../Input/Input";
import css from "./App.module.css";
import { useQuery } from "@tanstack/react-query";
import SideBar from "../SideBar/SideBar";
import ForecastForWeek from "../ForecastForWeek/ForecastForWeek";
import MainWindow from "../MainWindow/MainWindow";
import AirConditions from "../AirConditions/AirConditions";
import TodayForecast from "../TodaysForecast/TodaysForecast";
import { OrbitProgress } from "react-loading-indicators";

export default function App() {
  const [query, setQuery] = useState("Madrid");
  const { data, isLoading, error } = useQuery({
    queryKey: ["weather", query],
    queryFn: () => WeatherServices(query),
    enabled: !!query,
  });
  console.log(data);

  return (
    <div className={css.app}>
      <SideBar />
      <div className={css.main}>
        <Input onSearch={setQuery} />
        {data ? (
          <>
            <MainWindow
              city={data?.location.name}
              temperature={data?.current.temp_c}
              chanceOfRain={
                data?.forecast.forecastday[0].day.daily_chance_of_rain
              }
              code={data?.current.condition.code}
            />
            <TodayForecast hours={data?.forecast.forecastday[0].hour} />
          </>
        ) : isLoading ? (
          <OrbitProgress
            variant="disc"
            dense
            color="#506f81"
            size="medium"
            text=""
            textColor=""
          />
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : null}
        {data && (
          <AirConditions
            realFeel={data?.current.feelslike_c}
            wind={data?.current.wind_kph}
            chanceOfRain={
              data?.forecast.forecastday[0].day.daily_chance_of_rain
            }
            uvIndex={data?.current.uv}
          />
        )}
      </div>
      <ForecastForWeek />
    </div>
  );
}
