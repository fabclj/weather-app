import { FC, useContext, useRef } from 'react';
import AsyncSelect from 'react-select/async';
import { SelectInstance } from 'react-select';
import debounce from 'debounce-promise';
import styles from './search.module.css';
import { ReactComponent as LocationIcon } from '../../common/assets/icons/location-icon.svg';
import { ReactComponent as SearchIcon } from '../../common/assets/icons/search-icon.svg';
import { AppContext } from '../../common/appContext';
import { AppContextType, ICity, ISelect } from '../../common/types';
import { geo_api, weather_api } from '../../common/api';

const Search: FC = () => {
  const refSel = useRef<SelectInstance>(null);
  const {
    saveCurrentCity,
    saveCurrentWeather,
    saveForecast,
    setFetchingWeather,
  } = useContext(AppContext) as AppContextType;

  const handleCitySelect = (searchData: any): void => {
    console.log(searchData);
    if (searchData) {
      saveCurrentCity(searchData.data);
      fetchWeather(searchData.data.latitude, searchData.data.longitude);
    }
  };

  const handleGeoLocation = () => {
    if (navigator.geolocation) {
      setFetchingWeather(true);
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          saveCurrentCity(null);
          refSel?.current?.clearValue();
          return fetchWeather(
            position.coords.latitude,
            position.coords.longitude
          );
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
          units: 'metric',
        },
      })
      .then(function (response) {
        saveCurrentWeather(response.data);
      });

    await weather_api
      .get('/forecast', {
        params: {
          lat: latitude,
          lon: longitude,
          units: 'metric',
        },
      })
      .then(function (response) {
        saveForecast(response.data);
      });
    setFetchingWeather(false);
  };

  const fetchCities = debounce(
    (inputValue: string) =>
      new Promise<ISelect[]>((resolve) => {
        if (inputValue === '') {
          resolve([]);
        } else {
          geo_api
            .get('/cities', {
              params: {
                minPopulation: 100000,
                sort: '-population',
                namePrefix: inputValue,
                limit: '10',
                types: 'CITY',
              },
            })
            .then(function (response) {
              resolve(mapCity(response.data.data));
            });
        }
      }),
    1000
  );

  const mapCity = (data: ICity[]): ISelect[] => {
    const cities = data.map((city: ICity) => {
      return {
        value: city.id,
        label: `${city.name}, ${city.country}`,
        data: city,
      };
    });
    return cities;
  };

  return (
    <div className={styles.wrapper}>
      <AsyncSelect
        ref={refSel}
        defaultOptions
        isClearable
        loadOptions={fetchCities}
        onChange={handleCitySelect}
        placeholder="Search City..."
        noOptionsMessage={(string) => {
          return 'Please type the a valid city name';
        }}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderRadius: '26px',
            height: '3.25rem',
            boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
            border: 'none',
            padding: '0px 30px 0px 46px',
          }),
          placeholder: (baseStyles, state) => ({
            ...baseStyles,
            color: '#7b98b2',
          }),
          input: (baseStyles, state) => ({
            ...baseStyles,
            color: '#396bae',
          }),
          singleValue: (baseStyles, state) => ({
            ...baseStyles,
            color: '#396bae',
          }),
          menu: (baseStyles, state) => ({
            ...baseStyles,
            color: '#396bae',
          }),
          dropdownIndicator: (baseStyles, state) => ({
            visibility: 'hidden',
          }),
        }}
      />
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
