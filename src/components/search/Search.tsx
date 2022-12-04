import { FC, useRef } from 'react';
import { SingleValue, SelectInstance } from 'react-select';
import SearchInput from './SearchInput';
import { ReactComponent as LocationIcon } from '../../common/assets/icons/location-icon.svg';
import { ReactComponent as SearchIcon } from '../../common/assets/icons/search-icon.svg';
import { useAppContext } from '../../common/appContext';
import { ISelect } from '../../common/types';
import { weather_api } from '../../common/api';
import styles from './search.module.css';

const Search: FC = () => {
  const refSel = useRef<SelectInstance | null>(null);
  const {
    setCurrentCity,
    setCurrentWeather,
    setForecast,
    setFetchingWeather,
  } = useAppContext();

  const handleCitySelect = (searchData: SingleValue<ISelect>) => {
    if (searchData) {
      setCurrentCity(searchData.data);
      fetchWeather(searchData.data.latitude, searchData.data.longitude);
    }
  };

  const handleGeoLocation = () => {
    if (navigator.geolocation) {
      setFetchingWeather(true);
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          setCurrentCity(null);
          refSel?.current?.clearValue();
          return fetchWeather(
            position.coords.latitude,
            position.coords.longitude
          );
        },
        (error: GeolocationPositionError) => {
          setFetchingWeather(false);
        }
      );
    } else {
      setFetchingWeather(false);
      alert('Geolocation is not supported by your browser.');
    }
  };

  const fetchWeather = async (latitude: number, longitude: number) => {
    setFetchingWeather(true);
    await weather_api
      .get('/weather', {
        params: {
          lat: latitude,
          lon: longitude,
        },
      })
      .then(function (response) {
        setCurrentWeather(response.data);
      });

    await weather_api
      .get('/forecast', {
        params: {
          lat: latitude,
          lon: longitude,
        },
      })
      .then(function (response) {
        setForecast(response.data.list);
      });
    setFetchingWeather(false);
  };

  return (
    <div className={styles.wrapper}>
      <SearchInput refSel={refSel} handleCitySelect={handleCitySelect} />

      <div className={styles.localize} onClick={handleGeoLocation}>
        <LocationIcon />
      </div>
      <div className={styles.search}>
        <SearchIcon />
      </div>
    </div>
  );
};

export default Search;
