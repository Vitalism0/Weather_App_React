import css from "./MainWindow.module.css";
import GetWeatherIcon from "../../utils/GetWeatherIcon";

interface MainWindowProps {
  city: string;
  temperature: number;
  chanceOfRain: number;
  code: number;
}

export default function MainWindow({
  city,
  temperature,
  chanceOfRain,
  code,
}: MainWindowProps) {
  return (
    <div className={css.mainWindow}>
      <div className={css.container}>
        <h2 className={css.title}>{city}</h2>
        <p className={css.text}>{chanceOfRain}% chance of rain</p>
        <div className={css.temperature}>{Math.round(temperature)}°C</div>
      </div>
      <GetWeatherIcon code={code} size={300} />
    </div>
  );
}
