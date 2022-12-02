import { ReactNode } from 'react';

export interface IWeatherResponse {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lon: number; lat: number };
  dt: number;
  id: number;
  name: string;
  sys: {
    type: number;
    sunset: number;
    sunrise: number;
    id: number;
    country: string;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
    id: number;
  }>;
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    temp_max: number;
    temp_min: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
}

export interface IForecastResponse {
  clouds: { all: number };
  dt: number;
  dt_txt: string;
  pop: number;
  sys: {
    pod: string;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
    id: number;
  }>;
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    temp_max: number;
    temp_min: number;
    temp_kf: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
}

export interface IProviderProps {
  children: ReactNode;
}

export interface AppContextType {
  currentCity: any;
  currentWeather: any;
  forecast: any;
  fetchingWeather: boolean;
  saveForecast: (data: any) => void;
  saveCurrentWeather: (data: any) => void;
  saveCurrentCity: (data: any) => void;
  setFetchingWeather: (data: boolean) => void;
}

export interface IWeatherIconProps {
  code: number;
  icon?: string;
  big?: boolean;
}

export interface ICity {
  city: string;
  country: string;
  countryCode: string;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  population: number;
  region: string;
  regionCode: string;
  type: string;
  wikiDataId: string;
}

export interface ISelect {
  data: ICity;
  value: number;
  label: string;
}
