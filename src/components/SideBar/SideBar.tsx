import css from "./SideBar.module.css";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { SiAccuweather } from "react-icons/si";
import { RiMenuSearchLine } from "react-icons/ri";
import { FiMap } from "react-icons/fi";
import { VscSettings } from "react-icons/vsc";
export default function SideBar() {
  return (
    <div className={css.sideBar}>
      <SiAccuweather className={css.logo} />

      <div className={css.iconButtons}>
        <button className={css.navItem}>
          <TiWeatherPartlySunny className={css.iconButton} />
          <span>Weather</span>
        </button>
        <button className={css.navItem}>
          <RiMenuSearchLine className={css.iconButton} />
          <span>Search</span>
        </button>
        <button className={css.navItem}>
          <FiMap className={css.iconButton} />
          <span>Map</span>
        </button>
        <button className={css.navItem}>
          <VscSettings className={css.iconButton} />
          <span>Settings</span>
        </button>
      </div>
    </div>
  );
}
