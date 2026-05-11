export interface WeatherCondition {
  text: string;
  icon: string;
  code: number;
}
export interface CurrentWeather {
  temp_c: number;
  wind_kph: number;
  condition: WeatherCondition;
  chance_of_rain: number;
}
export interface Location {
  name: string;
  country: string;
}
export interface WeatherResponse {
  location: Location;
  current: CurrentWeather;
}
