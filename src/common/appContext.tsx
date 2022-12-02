import { FC, useState, createContext } from 'react';
import {
  AppContextType,
  IWeatherResponse,
  IForecastResponse,
  IProviderProps,
  ICity,
} from './types';

export const AppContext = createContext<AppContextType | null>(null);

const AppProvider: FC<IProviderProps> = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState<IWeatherResponse | null>(
    null
  );
  const [forecast, setForecast] = useState<IForecastResponse | null>(null);
  const [currentCity, saveCurrentCity] = useState<ICity | null>(null);
  const [fetchingWeather, setFetchingWeather] = useState<boolean>(false);

  const saveCurrentWeather = (weather: IWeatherResponse) => {
    setCurrentWeather(weather);
  };

  const saveForecast = (forecast: IForecastResponse) => {
    setForecast(forecast);
  };

  return (
    <AppContext.Provider
      value={{
        currentCity,
        saveCurrentCity,
        currentWeather,
        saveCurrentWeather,
        forecast,
        saveForecast,
        fetchingWeather,
        setFetchingWeather,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
