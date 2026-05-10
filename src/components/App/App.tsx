import { useState } from "react";
import WeatherServices from "../../services/weatherService";
import Input from "../Input/Input";
import css from "./App.module.css";
import { useQuery } from "@tanstack/react-query";
import SideBar from "../SideBar/SideBar";
import ForecastForWeak from "../ForecastForWeak/ForecastForWeak";
import MainWindow from "../MainWindow/MainWindow";
import AirConditions from "../AirConditions/AirConditions";

export default function App() {
  const [query, setQuery] = useState("");
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
        <MainWindow data={data} isLoading={isLoading} error={error} />
        <AirConditions />
      </div>
      <ForecastForWeak />
    </div>
  );
}
