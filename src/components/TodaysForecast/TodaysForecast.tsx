import type { Hour } from "../../types/weather";
import GetWeatherIcon from "../../utils/GetWeatherIcon";
import css from "./TodaysForecast.module.css";

interface TodaysForecastProps {
  hours: Hour[];
}

export default function TodayForecast({ hours }: TodaysForecastProps) {
  console.log("hours:", hours);
  console.log("hours.length:", hours?.length);
  const slots = [6, 9, 12, 15, 18, 21].map((i) => hours[i]);
  return (
    <div className={css.card}>
      <h2 className={css.cardTitle}>Today's forecast</h2>
      <div className={css.slots}>
        {slots.map((hour) => (
          <div className={css.slot} key={hour.time}>
            <span className={css.time}>{hour.time}</span>
            <GetWeatherIcon
              code={hour.condition.code}
              isDay={hour.is_day}
              size={48}
            />
            <span className={css.temp}>{Math.round(hour.temp_c)}°</span>
          </div>
        ))}
      </div>
    </div>
  );
}
