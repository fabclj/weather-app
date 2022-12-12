const { gql, makeExecutableSchema } = require('apollo-server');

const typeDefs = gql`
  type Coordinates {
    lon: Float
    lat: Float
  }
  type Weather {
    id: Int!
    main: String
    description: String
    icon: String
  }
  type Main {
    temp: Float
    feels_like: Float
    pressure: Float
    humidity: Float
    temp_max: Float
    temp_min: Float
  }
  type Wind {
    speed: Float
  }
  type WeatherResponse {
    id: String!
    name: String
    base: String
    coord: Coordinates
    main: Main
    weather: [Weather]!
    wind: Wind
  }
  type ForecastItem {
    dt: Float!
    main: Main
    weather: [Weather]!
    wind: Wind
  }
  type ForecastResponse {
    list: [ForecastItem]!
  }
  type Query {
    weather(lat: Float!, lon: Float!): WeatherResponse
    forecast(lat: Float!, lon: Float!): ForecastResponse
  }
`;

const resolvers = {
  Query: {
    weather(_, { lat, lon }, { dataSources }) {
      return dataSources.weatherAPI.weather(lat, lon);
    },
    forecast(_, { lat, lon }, { dataSources }) {
      return dataSources.weatherAPI.forecast(lat, lon);
    },
  },
};

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
});
