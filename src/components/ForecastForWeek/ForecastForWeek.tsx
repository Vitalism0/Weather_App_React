import type { ForecastDay } from "../../types/weather";
import css from "./ForecastForWeek.module.css";
import GetWeatherIcon from "../../utils/GetWeatherIcon";

interface ForecastForWeekProps {
  days: ForecastDay[];
}

export default function ForecastForWeek({ days }: ForecastForWeekProps) {
  return (
    <div className={css.forecastForWeek}>
      <h2 className={css.title}>3-Day Forecast</h2>
      {days.map((day) => (
        <div className={css.row} key={day.date}>
          <span className={css.date}>{day.date}</span>
          <GetWeatherIcon code={day.day.condition.code} size={80} />
          <span className={css.temp}>
            {Math.round(day.day.mintemp_c)}° / {Math.round(day.day.maxtemp_c)}°
          </span>
        </div>
      ))}
    </div>
  );
}
