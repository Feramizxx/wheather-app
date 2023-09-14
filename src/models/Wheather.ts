export interface WeatherData {
  location: Location;
  current: CurrentConditions;
  forecast: Forecast;
}

export interface Location {
  name: string;
  country: string;
}

export interface CurrentConditions {
  temp_c: number;
  wind_kph: number;
  humidity: number;
  cloud: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
  pressure_in:number
}

export interface Forecast {
  forecastday: DailyForecast[];
}

export interface DailyForecast {
  date: string;
  hour: [];
}
