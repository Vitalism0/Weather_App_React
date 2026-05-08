import { useEffect, useState } from "react";
import WeatherServices from "../../services/weatherSwervices";
import Input from "../Input/Input";
import css from "./App.module.css";

export default function App() {
  const [query, setQuery] = useState("");
  useEffect(() => {
    if (!query) return;
    const response = async () => {
      const data = await WeatherServices(query);
      console.log(data);
    };
    response();
  }, [query]);

  return (
    <>
      <Input onSearch={setQuery} />
    </>
  );
}
