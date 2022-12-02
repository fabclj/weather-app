import React, { FC, useContext } from 'react';
import { AppContext } from '../../common/appContext';
import { AppContextType } from '../../common/types';
import styles from './header.module.css';

const Header: FC = () => {
  const { currentWeather } = useContext(AppContext) as AppContextType;

  const titleStyle = `${styles.title} ${
    currentWeather ? styles.withResults : null
  }`;

  return (
    <div className={styles.wrapper}>
      <h1 className={titleStyle}>Weather App</h1>
    </div>
  );
};

export default Header;
