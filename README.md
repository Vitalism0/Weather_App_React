# Weather App

Навчальний проєкт — погодний дашборд, побудований на React + TypeScript. Інтерфейс натхненний сучасними погодними додатками: ліва навігаційна панель, поле пошуку міста, головна панель з поточною температурою, погодинний прогноз на сьогодні, панель повітряних умов та прогноз на найближчі дні.

## Що практикувалось

Цей проєкт — практика трьох ключових тем:

### Props

Розбивка інтерфейсу на маленькі компоненти (`SideBar`, `MainWindow`, `TodaysForecast`, `AirConditions`, `ForecastForWeek`, `Input`) і передача даних між ними через props. Зокрема:

- Типізація пропсів через `interface` у TypeScript.
- Деструктуризація пропсів у сигнатурі функції: `function Component({ prop1, prop2 }: Props)`.
- Передача масивів та обʼєктів (наприклад, масив годин `Hour[]` у `TodaysForecast`, масив днів `ForecastDay[]` у `ForecastForWeek`).
- Передача коду погодних умов у переюзовний компонент `GetWeatherIcon` для рендеру правильної іконки.

### Робота з REST API

Інтеграція з [WeatherAPI.com](https://www.weatherapi.com/) — публічним REST API для отримання поточної погоди та прогнозу:

- HTTP-запити через `axios` з налаштованим `baseURL`.
- Передача query-параметрів (`q`, `days`, `key`).
- Зберігання API-ключа у змінній оточення `VITE_WEATHER_KEY` (файл `.env`).
- Типізація відповіді API через інтерфейси (`WeatherResponse`, `CurrentWeather`, `ForecastDay`, `Hour`, `Day` тощо) — щоб TypeScript розумів структуру даних.

### TanStack Query

Використання `useQuery` для управління асинхронним станом замість ручного `useEffect` + `useState`:

- Автоматичний кеш запитів за `queryKey`.
- Готові стани `isLoading`, `error`, `data` — без власних флагів.
- `enabled` для умовного запуску запиту (тільки коли користувач ввів місто).
- Звуження типів через `{data && (...)}` для безпечного доступу до полів відповіді.

## Стек

- **React 19** + **TypeScript**
- **Vite** — збірка та dev-сервер
- **TanStack Query** — управління серверним станом
- **Axios** — HTTP-клієнт
- **CSS Modules** — ізольовані стилі
- **@bybas/weather-icons** — кольорові SVG-іконки погоди
- **react-icons** — іконки для UI

## Структура проєкту

```
src/
├── components/
│   ├── App/              головний компонент-оркестратор
│   ├── SideBar/          ліва навігаційна панель
│   ├── Input/            поле пошуку міста
│   ├── MainWindow/       поточна погода (місто, температура, іконка)
│   ├── TodaysForecast/   погодинний прогноз на сьогодні
│   ├── AirConditions/    панель повітряних умов
│   └── ForecastForWeek/  прогноз на найближчі дні
├── services/
│   └── weatherService.tsx  axios-запит до WeatherAPI
├── types/
│   └── weather.ts        інтерфейси для відповіді API
├── utils/
│   └── GetWeatherIcon.tsx  маппінг кодів погоди на іконки
└── main.tsx              точка входу, QueryClientProvider
```

## Запуск локально

1. Клонувати репозиторій і встановити залежності:
   ```bash
   npm install
   ```
2. Створити файл `.env` у корені проєкту і додати ключ з [weatherapi.com](https://www.weatherapi.com/):
   ```
   VITE_WEATHER_KEY=твій_ключ
   ```
3. Запустити dev-сервер:
   ```bash
   npm run dev
   ```
