import React, { FC } from 'react';
import Header from '../components/header/Header';
import Search from '../components/search/Search';
import CurrentWeather from '../components/currentWeather/CurrentWeather';
import Forecast from '../components/forecast/Forecast';

const Home: FC = () => {
  return (
    <>
      <Header />
      <Search />
      <CurrentWeather />
      <Forecast />
    </>
  );
};

export default Home;
