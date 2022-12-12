import { gql } from '@apollo/client';

export const GET_CITY_WEATHER = gql(`
  query GetCityWeather($lat: Float!, $lon: Float!) {
    weather(lat: $lat, lon: $lon) {
      id
      base
      name
      coord {
        lat
        lon
      }
      main {
        temp
        feels_like
        pressure
        humidity
        temp_max
        temp_min
      }
      weather {
        id
        description
        main
        icon
      }
      wind {
        speed
      }
    }
    forecast(lat: $lat, lon: $lon) {
      list {
        dt
        weather {
          id
          description
          main
          icon
        }
        main {
          temp
        }
      }
    }
  }
`);
