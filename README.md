# Weather App

A learning project — a weather dashboard built with React and TypeScript. The UI is inspired by modern weather apps: a left navigation rail, a city search bar, a main panel with the current temperature and conditions, an hourly forecast for today, an air-conditions panel, and a multi-day forecast on the right.

## What I practiced

This project was built around three focus areas:

### Props

Splitting the UI into small, focused components (`SideBar`, `MainWindow`, `TodaysForecast`, `AirConditions`, `ForecastForWeek`, `Input`) and passing data between them through props:

- Typing props with TypeScript `interface` definitions.
- Destructuring props directly in the function signature: `function Component({ prop1, prop2 }: Props)`.
- Passing arrays and objects down the tree (e.g. `Hour[]` into `TodaysForecast`, `ForecastDay[]` into `ForecastForWeek`).
- Building a reusable `GetWeatherIcon` component that takes a weather condition code and renders the matching icon.

### Working with a REST API

Integration with [WeatherAPI.com](https://www.weatherapi.com/) — a public REST API for current weather and forecasts:

- HTTP requests made with `axios`, using a pre-configured `baseURL`.
- Sending query parameters (`q`, `days`, `key`).
- Storing the API key in an environment variable (`VITE_WEATHER_KEY`) via a `.env` file.
- Modeling the API response with TypeScript interfaces (`WeatherResponse`, `CurrentWeather`, `ForecastDay`, `Hour`, `Day`) so the compiler understands the data shape.

### TanStack Query

Using `useQuery` to manage asynchronous state instead of hand-rolling `useEffect` + `useState`:

- Automatic request caching by `queryKey`.
- Built-in `isLoading`, `error`, and `data` states — no custom flags.
- `enabled` flag to defer the request until the user actually types a city.
- Type narrowing with `{data && (...)}` for safe access to response fields.

## Tech stack

- **React 19** + **TypeScript**
- **Vite** — build tool and dev server
- **TanStack Query** — server state management
- **Axios** — HTTP client
- **CSS Modules** — scoped, collision-free styles
- **@bybas/weather-icons** — colorful SVG weather icons
- **react-icons** — UI icons

## Project structure
src/
├── components/
│   ├── App/              main orchestrator component
│   ├── SideBar/          left navigation rail
│   ├── Input/            city search field
│   ├── MainWindow/       current weather (city, temperature, icon)
│   ├── TodaysForecast/   hourly forecast for today
│   ├── AirConditions/    air-conditions panel
│   └── ForecastForWeek/  multi-day forecast
├── services/
│   └── weatherService.tsx  axios request to WeatherAPI
├── types/
│   └── weather.ts        interfaces for the API response
├── utils/
│   └── GetWeatherIcon.tsx  maps weather codes to icons
└── main.tsx              entry point, QueryClientProvider

## Getting started

1. Install dependencies:
```bash
   npm install
```
2. Create a `.env` file in the project root and add your key from [weatherapi.com](https://www.weatherapi.com/):
VITE_WEATHER_KEY=your_key_here
3. Start the dev server:
```bash
   npm run dev
```
