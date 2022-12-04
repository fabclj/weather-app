import React, { FC } from 'react';
import { useAppContext } from '../../common/appContext';
import Loader from '../loader/Loader';
import styles from './header.module.css';

const Header: FC = () => {
  const { currentWeather, fetchingWeather } = useAppContext();

  const titleStyle = `${styles.title} ${
    currentWeather ? styles.withResults : null
  }`;

  return (
    <div className={styles.wrapper}>
      <h1 className={titleStyle}>Weather App</h1>
      {fetchingWeather && <Loader />}
    </div>
  );
};

export default Header;
