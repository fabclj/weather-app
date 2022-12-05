export const citiesMock = {
  data: [
    {
      id: 3453309,
      wikiDataId: 'Q64',
      type: 'CITY',
      city: 'Berlin',
      name: 'Berlin',
      country: 'Germany',
      countryCode: 'DE',
      region: 'Berlin',
      regionCode: 'BE',
      latitude: 52.516666666,
      longitude: 13.383333333,
      population: 3677472,
    },
  ],
  metadata: {
    currentOffset: 0,
    totalCount: 1,
  },
};

export const berlinMock = {
  label: 'Berlin, Germany',
  value: 3453309,
  data: citiesMock.data[0],
};

export const weatherMock = {
  coord: {
    lon: 13.3777,
    lat: 52.5163,
  },
  weather: [
    {
      id: 701,
      main: 'Mist',
      description: 'mist',
      icon: '50n',
    },
  ],
  base: 'stations',
  main: {
    temp: 2.51,
    feels_like: -1.96,
    temp_min: 1.27,
    temp_max: 3.33,
    pressure: 1008,
    humidity: 95,
  },
  visibility: 2800,
  wind: {
    speed: 5.36,
    deg: 69,
    gust: 6.71,
  },
  clouds: {
    all: 100,
  },
  dt: 1670189138,
  sys: {
    type: 2,
    id: 2009543,
    country: 'DE',
    sunrise: 1670137120,
    sunset: 1670165696,
  },
  timezone: 3600,
  id: 2822234,
  name: 'Tiergarten',
  cod: 200,
};

export const forecastMock = [
  {
    dt: 1670198400,
    main: {
      temp: 1.8,
      feels_like: -1.83,
      temp_min: 0.34,
      temp_max: 1.8,
      pressure: 1012,
      sea_level: 1012,
      grnd_level: 1014,
      humidity: 94,
      temp_kf: 1.46,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 97,
    },
    wind: {
      speed: 3.64,
      deg: 66,
      gust: 8.6,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-12-05 00:00:00',
  },
  {
    dt: 1670209200,
    main: {
      temp: 1.3,
      feels_like: -2.21,
      temp_min: 0.68,
      temp_max: 1.3,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 1013,
      humidity: 93,
      temp_kf: 0.62,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 3.33,
      deg: 71,
      gust: 8.08,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-12-05 03:00:00',
  },
  {
    dt: 1670220000,
    main: {
      temp: 1.28,
      feels_like: -1.9,
      temp_min: 1.28,
      temp_max: 1.28,
      pressure: 1018,
      sea_level: 1018,
      grnd_level: 1013,
      humidity: 95,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 2.93,
      deg: 68,
      gust: 6.59,
    },
    visibility: 10000,
    pop: 0.38,
    rain: {
      '3h': 1.3,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-12-05 06:00:00',
  },
  {
    dt: 1670230800,
    main: {
      temp: 1.98,
      feels_like: -0.93,
      temp_min: 1.98,
      temp_max: 1.98,
      pressure: 1018,
      sea_level: 1018,
      grnd_level: 1014,
      humidity: 93,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 2.77,
      deg: 63,
      gust: 5.6,
    },
    visibility: 10000,
    pop: 0.47,
    rain: {
      '3h': 0.14,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2022-12-05 09:00:00',
  },
  {
    dt: 1670241600,
    main: {
      temp: 2.53,
      feels_like: 0.78,
      temp_min: 2.53,
      temp_max: 2.53,
      pressure: 1017,
      sea_level: 1017,
      grnd_level: 1013,
      humidity: 95,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 1.76,
      deg: 69,
      gust: 3.8,
    },
    visibility: 10000,
    pop: 0.41,
    sys: {
      pod: 'd',
    },
    dt_txt: '2022-12-05 12:00:00',
  },
];
