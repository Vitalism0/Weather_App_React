import css from "./AirConditions.module.css";
import { FaTemperatureHalf } from "react-icons/fa6";
import { FaWind } from "react-icons/fa";
import { IoWater } from "react-icons/io5";
import { FaSun } from "react-icons/fa6";

interface AirConditionsProps {
  realFeel: number;
  wind: number;
  chanceOfRain: number;
  uvIndex: number;
}

export default function AirConditions({
  realFeel,
  wind,
  chanceOfRain,
  uvIndex,
}: AirConditionsProps) {
  return (
    <div className={css.card}>
      <h2 className={css.mainTitle}>Air conditions</h2>
      <div className={css.container}>
        <div className={css.condition}>
          <div className={css.titleContainer}>
            <FaTemperatureHalf size={32} className={css.icon} />
            <h3 className={css.title}>Real Feel</h3>
          </div>
          <p className={css.text}>{Math.round(realFeel)}°</p>
        </div>
        <div className={css.condition}>
          <div className={css.titleContainer}>
            <FaWind size={32} className={css.icon} />
            <h3 className={css.title}>Wind</h3>
          </div>
          <p className={css.text}>{Math.round(wind)} km/h</p>
        </div>

        <div className={css.condition}>
          <div className={css.titleContainer}>
            <IoWater size={32} className={css.icon} />
            <h3 className={css.title}>Chance of rain</h3>
          </div>
          <p className={css.text}>{Math.round(chanceOfRain)}%</p>
        </div>
        <div className={css.condition}>
          <div className={css.titleContainer}>
            <FaSun size={32} className={css.icon} />
            <h3 className={css.title}>UV Index</h3>
          </div>
          <p className={css.text}>{Math.round(uvIndex)}</p>
        </div>
      </div>
    </div>
  );
}
