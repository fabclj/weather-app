const { RequestOptions, RESTDataSource } = require('apollo-datasource-rest');

const ACCESS_KEY = 'e34e49c178d3e7d7f11e72e002b04fcf';
const API_URL = 'https://api.openweathermap.org/data/2.5/';

class WeatherAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = API_URL;
  }

  willSendRequest(request) {
    request.params.set('appid', ACCESS_KEY);
    request.params.set('units', 'metric');
  }

  async weather(lat, lon) {
    const data = await this.get('weather', { lat, lon });
    return data;
  }

  async forecast(lat, lon) {
    const data = await this.get('forecast', { lat, lon });
    return data;
  }
}

module.exports = () => ({ weatherAPI: new WeatherAPI() });
