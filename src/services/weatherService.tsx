import axios from "axios";
import type { WeatherResponse } from "../types/weather";

const weatherApi = axios.create({ baseURL: "https://api.weatherapi.com/v1" });

export default async function WeatherServices(
  query: string,
): Promise<WeatherResponse> {
  const { data } = await weatherApi.get<WeatherResponse>("/forecast.json", {
    params: {
      q: query,
      days: 7,
      key: import.meta.env.VITE_WEATHER_KEY,
    },
  });
  return data;
}
