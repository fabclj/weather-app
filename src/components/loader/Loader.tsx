import { FC, useContext } from 'react';
import { AppContext } from '../../common/appContext';
import { AppContextType } from '../../common/types';
import styles from './loader.module.css';

export const Loader: FC = () => {
  const { currentWeather } = useContext(AppContext) as AppContextType;

  const loaderStyle = `${styles.loader} ${
    currentWeather ? styles.withResults : null
  }`;

  return (
    <div>
      <div className={loaderStyle}>
        <div className={styles.bounce1}></div>
        <div className={styles.bounce2}></div>
      </div>
    </div>
  );
};

export default Loader;
