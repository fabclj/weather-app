import { ReactNode } from 'react';

export interface IWeatherResponse {
  weather: Array<{
    main: string;
    description: string;
  }>;
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
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
