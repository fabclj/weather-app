import React, { FC, useContext } from 'react';
import { AppContext } from '../../common/appContext';
import { AppContextType, IWeatherResponse } from '../../common/types';
import WeatherIcon from '../WeatherIcon';
import { format, isToday } from 'date-fns';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './forecast.module.css';

const Forecast: FC = () => {
  const { forecast } = useContext(AppContext) as AppContextType;

  if (!forecast) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainTitle}>
        <span>Forecast</span>
      </div>
      <div className={styles.slides}>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={0}
          className="mySwiper"
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {forecast.list.map((item: any, i: number) => {
            const date = new Date(item.dt * 1000);
            const day = isToday(date) ? 'Today' : format(date, 'EEEE');
            const time = format(date, 'p');
            return (
              <SwiperSlide style={{ width: '135px' }}>
                <div key={i} className={styles.slide}>
                  <div className={styles.date}>
                    {day}
                    <br />
                    {time}
                  </div>
                  <WeatherIcon
                    code={item.weather[0].id}
                    icon={item.weather[0].icon}
                  />
                  <p>{item.weather[0].main}</p>
                  <span>{Math.round(item.main.temp)}°</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Forecast;
