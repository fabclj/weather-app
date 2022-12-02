import React, { FC, useState, createContext } from 'react';
import { AppContextType, IWeatherResponse, IProviderProps } from './types';

export const AppContext = createContext<AppContextType | null>(null);

const AppProvider: FC<IProviderProps> = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState<any>(null);
  const [forecast, setForecast] = useState<any>(null);
  const [currentCity, saveCurrentCity] = useState<any>(null);
  const [fetchingWeather, setFetchingWeather] = useState<boolean>(false);

  const saveCurrentWeather = (weather: any) => {
    setCurrentWeather(weather);
  };

  const saveForecast = (forecast: any) => {
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
