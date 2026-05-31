export interface WeatherCondition {
  text: string;
  icon: string;
  code: number;
}

export interface CurrentWeather {
  temp_c: number;
  is_day: number;
  wind_kph: number;
  humidity: number;
  feelslike_c: number;
  uv: number;
  condition: WeatherCondition;
}

export interface Location {
  name: string;
  country: string;
}

export interface Hour {
  time: string;
  temp_c: number;
  is_day: number;
  chance_of_rain: number;
  condition: WeatherCondition;
}

export interface Day {
  maxtemp_c: number;
  mintemp_c: number;
  daily_chance_of_rain: number;
  uv: number;
  condition: WeatherCondition;
}

export interface ForecastDay {
  date: string;
  day: Day;
  hour: Hour[];
}

export interface Forecast {
  forecastday: ForecastDay[];
}

export interface WeatherResponse {
  location: Location;
  current: CurrentWeather;
  forecast: Forecast;
}
