import { FC, useRef } from 'react';
import { useQuery } from '@apollo/client';
import { SingleValue, SelectInstance, ActionMeta } from 'react-select';
import SearchInput from './SearchInput';
import { ReactComponent as LocationIcon } from '../../common/assets/icons/location-icon.svg';
import { ReactComponent as SearchIcon } from '../../common/assets/icons/search-icon.svg';
import { useAppContext } from '../../common/appContext';
import { GET_CITY_WEATHER } from '../../common/gql';
import { ISelect } from '../../common/types';
import styles from './search.module.css';

const Search: FC = () => {
  const refSel = useRef<SelectInstance | null>(null);
  const {
    setCurrentCity,
    setCurrentWeather,
    setForecast,
    setFetchingWeather,
  } = useAppContext();

  const { refetch } = useQuery(GET_CITY_WEATHER, {
    skip: true,
    onCompleted: (data) => {
      setCurrentWeather(data.weather);
      setForecast(data.forecast.list);
    },
  });

  const handleCitySelect = (
    searchData: SingleValue<ISelect>,
    actionMeta: ActionMeta<ISelect>
  ) => {
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
    await refetch({ lat: latitude, lon: longitude });
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
