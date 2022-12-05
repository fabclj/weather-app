import { FC } from 'react';
import { useAppContext } from '../../common/appContext';
import styles from './loader.module.css';

export const Loader: FC = () => {
  const { currentWeather } = useAppContext();

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
