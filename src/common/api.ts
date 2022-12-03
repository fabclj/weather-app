import axios from 'axios';

export const geo_api = axios.create({
  baseURL: process.env.REACT_APP_GEOSEARCH_BASE_URL,
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_TOKEN,
    'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST,
  },
  params: {
    minPopulation: 100000,
    sort: '-population',
    limit: '10',
    types: 'CITY',
  },
});

export const weather_api = axios.create({
  baseURL: process.env.REACT_APP_WEATHER_BASE_URL,
  params: {
    appid: process.env.REACT_APP_WEATHER_TOKEN,
    units: 'metric',
  },
});
