import { FC } from 'react';
import { useAppContext } from '../../common/appContext';
import WeatherIcon from '../WeatherIcon';
import { format, isToday } from 'date-fns';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './forecast.module.css';

const Forecast: FC = () => {
  const { forecast } = useAppContext();

  if (!forecast) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainTitle}>
        <span>Forecast</span>
      </div>
      <div className={styles.slides}>
        <Swiper slidesPerView="auto" spaceBetween={0} freeMode>
          {forecast.map((item: any, i: number) => {
            const date = new Date(item.dt * 1000);
            const day = isToday(date) ? 'Today' : format(date, 'EEEE');
            const time = format(date, 'p');
            return (
              <SwiperSlide style={{ width: '135px' }} key={i}>
                <div className={styles.slide}>
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
