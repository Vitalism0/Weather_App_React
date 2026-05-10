interface MainWindowProps {
  city: string;
  temperature: number;
  chanceOfRain: number;
  icon: string;
}

export default function MainWindow({
  city,
  temperature,
  chanceOfRain,
  icon,
}: MainWindowProps) {
  return (
    <>
      <p>{city}</p>
      <p>{chanceOfRain}% chance of rain</p>
      <div>{temperature}°C</div>
      <img src={icon} alt="weather icon" />
    </>
  );
}
