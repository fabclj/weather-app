import axios from 'axios';

export const geo_api = axios.create({
  baseURL: process.env.REACT_APP_GEOSEARCH_BASE_URL,
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_TOKEN,
    'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST,
  },
});

export const weather_api = axios.create({
  baseURL: process.env.REACT_APP_WEATHER_BASE_URL,
  params: {
    appid: process.env.REACT_APP_WEATHER_TOKEN,
  },
});
