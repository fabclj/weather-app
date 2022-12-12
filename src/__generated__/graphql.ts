/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Coordinates = {
  __typename?: 'Coordinates';
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
};

export type ForecastItem = {
  __typename?: 'ForecastItem';
  dt: Scalars['Float'];
  main?: Maybe<Main>;
  weather: Array<Maybe<Weather>>;
  wind?: Maybe<Wind>;
};

export type ForecastResponse = {
  __typename?: 'ForecastResponse';
  list: Array<Maybe<ForecastItem>>;
};

export type Main = {
  __typename?: 'Main';
  feels_like?: Maybe<Scalars['Float']>;
  humidity?: Maybe<Scalars['Float']>;
  pressure?: Maybe<Scalars['Float']>;
  temp?: Maybe<Scalars['Float']>;
  temp_max?: Maybe<Scalars['Float']>;
  temp_min?: Maybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  forecast?: Maybe<ForecastResponse>;
  weather?: Maybe<WeatherResponse>;
};


export type QueryForecastArgs = {
  lat: Scalars['Float'];
  lon: Scalars['Float'];
};


export type QueryWeatherArgs = {
  lat: Scalars['Float'];
  lon: Scalars['Float'];
};

export type Weather = {
  __typename?: 'Weather';
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  main?: Maybe<Scalars['String']>;
};

export type WeatherResponse = {
  __typename?: 'WeatherResponse';
  base?: Maybe<Scalars['String']>;
  coord?: Maybe<Coordinates>;
  id: Scalars['String'];
  main?: Maybe<Main>;
  name?: Maybe<Scalars['String']>;
  weather: Array<Maybe<Weather>>;
  wind?: Maybe<Wind>;
};

export type Wind = {
  __typename?: 'Wind';
  speed?: Maybe<Scalars['Float']>;
};
