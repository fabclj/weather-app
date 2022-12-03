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
  const [forecast, setForecast] = useState<IForecastResponse[] | null>(null);
  const [currentCity, setCurrentCity] = useState<ICity | null>(null);
  const [fetchingWeather, setFetchingWeather] = useState<boolean>(false);
  const [currentWeather, setCurrentWeather] = useState<IWeatherResponse | null>(
    null
  );

  return (
    <AppContext.Provider
      value={{
        currentCity,
        setCurrentCity,
        currentWeather,
        setCurrentWeather,
        forecast,
        setForecast,
        fetchingWeather,
        setFetchingWeather,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
