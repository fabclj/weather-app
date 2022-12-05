import * as Icons from '../common/assets/icons/weather';

import { IWeatherIconProps } from '../common/types';

const WeatherIcon: React.FC<IWeatherIconProps> = (props) => {
  const { code, icon, big } = props;
  let Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  switch (code) {
    // Thunderstorm
    case 200:
    case 201:
    case 202:
    case 230:
    case 231:
    case 232:
      Icon =
        icon === '11d'
          ? Icons.ThunderstormsDayRain
          : Icons.ThunderstormsNightRain;
      break;
    case 210:
    case 211:
    case 212:
    case 221:
      Icon = icon === '11d' ? Icons.ThunderstormsDay : Icons.ThunderstormsNight;
      break;

    // Drizzle
    case 300:
    case 301:
    case 302:
    case 310:
    case 311:
    case 312:
    case 313:
    case 314:
    case 321:
      Icon = Icons.Drizzle;
      break;

    // Rain
    case 500:
    case 501:
    case 520:
    case 521:
    case 522:
    case 531:
      Icon = Icons.Rain;
      break;
    case 502:
    case 503:
    case 504:
      Icon = Icons.Rain; //ExtremeRain;
      break;
    case 511:
      Icon = Icons.Hail;
      break;

    // Snow
    case 600:
    case 601:
    case 602:
    case 615:
    case 616:
    case 620:
    case 621:
    case 622:
      Icon = Icons.Snow;
      break;
    case 611:
    case 612:
    case 613:
      Icon = Icons.Sleet;
      break;

    // Atmosphere
    case 701:
      Icon = Icons.Mist;
      break;
    case 711:
      Icon = Icons.Smoke;
      break;
    case 721:
      Icon = icon === '50d' ? Icons.HazeDay : Icons.HazeNight;
      break;
    case 731:
      Icon = Icons.DustWind;
      break;
    case 751:
    case 762:
      Icon = Icons.Dust;
      break;
    case 761:
      Icon = icon === '50d' ? Icons.DustDay : Icons.DustNight;
      break;
    case 741:
      Icon = icon === '50d' ? Icons.FogDay : Icons.FogNight;
      break;
    case 771:
      Icon = Icons.Wind;
      break;
    case 781:
      Icon = Icons.Tornado;
      break;

    // Clear
    case 800:
      Icon = icon === '01d' ? Icons.SunnyDay : Icons.SunnyNight;
      break;

    // Cloud
    case 801:
      Icon = icon === '02d' ? Icons.PartlyCloudyDay : Icons.PartlyCloudyNight;
      break;
    case 802:
      Icon = Icons.Cloudy;
      break;
    case 803:
    case 804:
      Icon = icon === '04d' ? Icons.OvercastDay : Icons.OvercastNight;
      break;

    default:
      Icon = Icons.SunnyDay;
  }
  return big ? <Icon width="120" height="120" /> : <Icon />;
};

export default WeatherIcon;
