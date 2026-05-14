import clearDay from "@bybas/weather-icons/production/fill/all/clear-day.svg";
import clearNight from "@bybas/weather-icons/production/fill/all/clear-night.svg";
import partlyCloudyDay from "@bybas/weather-icons/production/fill/all/partly-cloudy-day.svg";
import partlyCloudyNight from "@bybas/weather-icons/production/fill/all/partly-cloudy-night.svg";
import cloudy from "@bybas/weather-icons/production/fill/all/cloudy.svg";
import overcast from "@bybas/weather-icons/production/fill/all/overcast.svg";
import fog from "@bybas/weather-icons/production/fill/all/fog.svg";
import mist from "@bybas/weather-icons/production/fill/all/mist.svg";
import rain from "@bybas/weather-icons/production/fill/all/rain.svg";
import drizzle from "@bybas/weather-icons/production/fill/all/drizzle.svg";
import snow from "@bybas/weather-icons/production/fill/all/snow.svg";
import sleet from "@bybas/weather-icons/production/fill/all/sleet.svg";
import thunderstorms from "@bybas/weather-icons/production/fill/all/thunderstorms.svg";

interface GetWeatherIconProps {
  code: number;
  isDay?: number;
  size?: number;
}

const iconMap: Record<number, string> = {
  1000: clearDay, // Sunny
  1003: partlyCloudyDay, // Partly cloudy
  1006: cloudy, // Cloudy
  1009: overcast, // Overcast
  1030: mist, // Mist
  1135: fog, // Fog
  1147: fog, // Freezing fog
  1063: rain, // Patchy rain
  1150: drizzle,
  1153: drizzle,
  1168: drizzle,
  1171: drizzle,
  1180: drizzle,
  1183: drizzle,
  1186: rain,
  1189: rain,
  1192: rain,
  1195: rain,
  1240: rain,
  1243: rain,
  1246: rain,
  1066: snow,
  1210: snow,
  1213: snow,
  1216: snow,
  1219: snow,
  1222: snow,
  1225: snow,
  1237: sleet,
  1255: snow,
  1258: snow,
  1261: sleet,
  1264: sleet,
  1273: thunderstorms,
  1276: thunderstorms,
  1087: thunderstorms, // Thundery outbreaks
};

export default function GetWeatherIcon({
  code,
  isDay = 1,
  size = 64,
}: GetWeatherIconProps) {
  let src = iconMap[code] ?? clearDay;

  // нічні варіанти для сонця та часткової хмарності
  if (!isDay) {
    if (code === 1000) src = clearNight;
    if (code === 1003) src = partlyCloudyNight;
  }

  return <img src={src} alt="" width={size} height={size} />;
}
