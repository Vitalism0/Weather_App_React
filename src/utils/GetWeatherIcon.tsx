interface GetWeatherIconProps {
  code: number;
  size?: number;
}

export default function GetWeatherIcon({
  code,
  size = 64,
}: GetWeatherIconProps) {
  if (code === 1000)
    return (
      <img
        src="@meteocons/svg/fill/clear-day.svg"
        alt="Clear day"
        width="64"
        height="64"
      />
    );

  // Partly cloudy
  if (code === 1003)
    return (
      <img
        src="@meteocons/svg/fill/cloudy.svg"
        alt="Сloudy"
        width="64"
        height="64"
      />
    );

  // Cloudy / Overcast
  if ([1006, 1009].includes(code))
    return (
      <img
        src="@meteocons/svg/fill/cloudy.svg"
        alt="Cloudy"
        width="64"
        height="64"
      />
    );

  // Mist / Fog
  if ([1030, 1135, 1147].includes(code))
    return (
      <img src="@meteocons/svg/fill/fog.svg" alt="Fog" width="64" height="64" />
    );

  // Rain (різні види)
  if (
    [
      1063, 1180, 1183, 1186, 1189, 1192, 1195, 1240, 1243, 1246, 1273, 1276,
    ].includes(code)
  )
    return (
      <img
        src="@meteocons/svg/fill/rain.svg"
        alt="Rain"
        width="64"
        height="64"
      />
    );

  // Snow
  if (
    [
      1066, 1210, 1213, 1216, 1219, 1222, 1225, 1237, 1255, 1258, 1261, 1264,
    ].includes(code)
  )
    return (
      <img
        src="@meteocons/svg/fill/snow.svg"
        alt="Snow"
        width="64"
        height="64"
      />
    );

  // Thunderstorm
  if ([1087].includes(code))
    return (
      <img
        src="@meteocons/svg/fill/thunderstorms.svg"
        alt="Thunderstorms"
        width="64"
        height="64"
      />
    );

  return (
    <img
      src="@meteocons/svg/fill/clear-day.svg"
      alt="Clear day"
      width="64"
      height="64"
    />
  ); // fallback
}
