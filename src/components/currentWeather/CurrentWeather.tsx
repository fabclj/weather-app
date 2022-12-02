import React, { FC, useContext } from 'react';
import { AppContext } from '../../common/appContext';
import * as Icons from '../../common/assets/icons/details';
import { AppContextType, IWeatherResponse } from '../../common/types';
import WeatherIcon from '../WeatherIcon';
import styles from './currentWeather.module.css';

const CurrentWeather: FC = () => {
  const { currentWeather, currentCity } = useContext(
    AppContext
  ) as AppContextType;

  if (!currentWeather) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainTitle}>
        <span>Current Weather</span>
      </div>
      <div className={styles.cityBox}>
        <div className={styles.info}>
          <h2>{currentCity?.name || currentWeather.name}</h2>
          <div className={styles.temp}>
            <WeatherIcon
              big
              code={currentWeather.weather[0].id}
              icon={currentWeather.weather[0].icon}
            />
            <span>{Math.round(currentWeather.main.temp)}°</span>
          </div>
          <p>{currentWeather.weather[0].main}</p>
        </div>

        <div className={styles.details}>
          <div className={styles.feelsLike}>
            Feels like {Math.round(currentWeather.main.temp)}°
          </div>

          <div className={styles.minMax}>
            <div>
              <Icons.HighIcon />
              {Math.round(currentWeather.main.temp_max)}°
            </div>
            <div>
              <Icons.LowIcon />
              {Math.round(currentWeather.main.temp_min)}°
            </div>
          </div>

          <div className={styles.paramsRow}>
            <div>
              <Icons.HumidityIcon /> Humidity
            </div>
            <span>{currentWeather.main.humidity}%</span>
          </div>

          <div className={styles.paramsRow}>
            <div>
              <Icons.WindIcon /> Wind
            </div>
            <span>{currentWeather.wind.speed} m/s</span>
          </div>

          <div className={styles.paramsRow}>
            <div>
              <Icons.PressureIcon /> Pressure
            </div>
            <span>{currentWeather.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
