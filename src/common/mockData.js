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
	{
		dt: 1670252400,
		main: {
			temp: 2.61,
			feels_like: 2.61,
			temp_min: 2.61,
			temp_max: 2.61,
			pressure: 1017,
			sea_level: 1017,
			grnd_level: 1012,
			humidity: 98,
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
			speed: 0.55,
			deg: 134,
			gust: 1.18,
		},
		visibility: 10000,
		pop: 0.57,
		rain: {
			'3h': 0.31,
		},
		sys: {
			pod: 'n',
		},
		dt_txt: '2022-12-05 15:00:00',
	},
	{
		dt: 1670263200,
		main: {
			temp: 2.4,
			feels_like: -0.29,
			temp_min: 2.4,
			temp_max: 2.4,
			pressure: 1017,
			sea_level: 1017,
			grnd_level: 1013,
			humidity: 98,
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
			speed: 2.62,
			deg: 220,
			gust: 4.72,
		},
		visibility: 7919,
		pop: 0.69,
		rain: {
			'3h': 0.41,
		},
		sys: {
			pod: 'n',
		},
		dt_txt: '2022-12-05 18:00:00',
	},
	{
		dt: 1670274000,
		main: {
			temp: 1.99,
			feels_like: -0.94,
			temp_min: 1.99,
			temp_max: 1.99,
			pressure: 1018,
			sea_level: 1018,
			grnd_level: 1013,
			humidity: 98,
			temp_kf: 0,
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
			speed: 2.8,
			deg: 231,
			gust: 5.51,
		},
		visibility: 66,
		pop: 0.06,
		sys: {
			pod: 'n',
		},
		dt_txt: '2022-12-05 21:00:00',
	},
	{
		dt: 1670284800,
		main: {
			temp: 1.71,
			feels_like: -1.37,
			temp_min: 1.71,
			temp_max: 1.71,
			pressure: 1017,
			sea_level: 1017,
			grnd_level: 1012,
			humidity: 98,
			temp_kf: 0,
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
			speed: 2.91,
			deg: 250,
			gust: 6.33,
		},
		visibility: 25,
		pop: 0.1,
		sys: {
			pod: 'n',
		},
		dt_txt: '2022-12-06 00:00:00',
	},
	{
		dt: 1670295600,
		main: {
			temp: 1.42,
			feels_like: -1.47,
			temp_min: 1.42,
			temp_max: 1.42,
			pressure: 1016,
			sea_level: 1016,
			grnd_level: 1012,
			humidity: 99,
			temp_kf: 0,
		},
		weather: [
			{
				id: 600,
				main: 'Snow',
				description: 'light snow',
				icon: '13n',
			},
		],
		clouds: {
			all: 100,
		},
		wind: {
			speed: 2.64,
			deg: 253,
			gust: 5.85,
		},
		visibility: 22,
		pop: 0.69,
		snow: {
			'3h': 0.48,
		},
		sys: {
			pod: 'n',
		},
		dt_txt: '2022-12-06 03:00:00',
	},
	{
		dt: 1670306400,
		main: {
			temp: 1.12,
			feels_like: -1.55,
			temp_min: 1.12,
			temp_max: 1.12,
			pressure: 1016,
			sea_level: 1016,
			grnd_level: 1011,
			humidity: 99,
			temp_kf: 0,
		},
		weather: [
			{
				id: 600,
				main: 'Snow',
				description: 'light snow',
				icon: '13n',
			},
		],
		clouds: {
			all: 100,
		},
		wind: {
			speed: 2.36,
			deg: 262,
			gust: 4.81,
		},
		visibility: 21,
		pop: 0.92,
		snow: {
			'3h': 1.31,
		},
		sys: {
			pod: 'n',
		},
		dt_txt: '2022-12-06 06:00:00',
	},
	{
		dt: 1670317200,
		main: {
			temp: 1.65,
			feels_like: -1.05,
			temp_min: 1.65,
			temp_max: 1.65,
			pressure: 1016,
			sea_level: 1016,
			grnd_level: 1011,
			humidity: 98,
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
			speed: 2.48,
			deg: 276,
			gust: 6.48,
		},
		visibility: 44,
		pop: 1,
		rain: {
			'3h': 0.6,
		},
		sys: {
			pod: 'd',
		},
		dt_txt: '2022-12-06 09:00:00',
	},
	{
		dt: 1670328000,
		main: {
			temp: 2.96,
			feels_like: -0.41,
			temp_min: 2.96,
			temp_max: 2.96,
			pressure: 1015,
			sea_level: 1015,
			grnd_level: 1011,
			humidity: 94,
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
			speed: 3.64,
			deg: 293,
			gust: 7.47,
		},
		visibility: 10000,
		pop: 1,
		rain: {
			'3h': 0.32,
		},
		sys: {
			pod: 'd',
		},
		dt_txt: '2022-12-06 12:00:00',
	},
	{
		dt: 1670338800,
		main: {
			temp: 2.33,
			feels_like: -1.08,
			temp_min: 2.33,
			temp_max: 2.33,
			pressure: 1015,
			sea_level: 1015,
			grnd_level: 1011,
			humidity: 93,
			temp_kf: 0,
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
			speed: 3.49,
			deg: 278,
			gust: 7.42,
		},
		visibility: 10000,
		pop: 0,
		sys: {
			pod: 'n',
		},
		dt_txt: '2022-12-06 15:00:00',
	},
	{
		dt: 1670349600,
		main: {
			temp: 0.45,
			feels_like: -3.07,
			temp_min: 0.45,
			temp_max: 0.45,
			pressure: 1015,
			sea_level: 1015,
			grnd_level: 1010,
			humidity: 96,
			temp_kf: 0,
		},
		weather: [
			{
				id: 803,
				main: 'Clouds',
				description: 'broken clouds',
				icon: '04n',
			},
		],
		clouds: {
			all: 83,
		},
		wind: {
			speed: 3.13,
			deg: 260,
			gust: 7.85,
		},
		visibility: 10000,
		pop: 0,
		sys: {
			pod: 'n',
		},
		dt_txt: '2022-12-06 18:00:00',
	},
	{
		dt: 1670360400,
		main: {
			temp: 1.31,
			feels_like: -2.07,
			temp_min: 1.31,
			temp_max: 1.31,
			pressure: 1014,
			sea_level: 1014,
			grnd_level: 1010,
			humidity: 97,
			temp_kf: 0,
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
			all: 93,
		},
		wind: {
			speed: 3.17,
			deg: 239,
			gust: 7.1,
		},
		visibility: 56,
		pop: 0.21,
		sys: {
			pod: 'n',
		},
		dt_txt: '2022-12-06 21:00:00',
	},
	{
		dt: 1670371200,
		main: {
			temp: 1.95,
			feels_like: -1.82,
			temp_min: 1.95,
			temp_max: 1.95,
			pressure: 1012,
			sea_level: 1012,
			grnd_level: 1008,
			humidity: 97,
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
			all: 96,
		},
		wind: {
			speed: 3.9,
			deg: 225,
			gust: 10.16,
		},
		visibility: 217,
		pop: 0.37,
		rain: {
			'3h': 0.41,
		},
		sys: {
			pod: 'n',
		},
		dt_txt: '2022-12-07 00:00:00',
	},
	{
		dt: 1670382000,
		main: {
			temp: 2.23,
			feels_like: -2.2,
			temp_min: 2.23,
			temp_max: 2.23,
			pressure: 1011,
			sea_level: 1011,
			grnd_level: 1006,
			humidity: 94,
			temp_kf: 0,
		},
		weather: [
			{
				id: 600,
				main: 'Snow',
				description: 'light snow',
				icon: '13n',
			},
		],
		clouds: {
			all: 100,
		},
		wind: {
			speed: 5.14,
			deg: 243,
			gust: 10.58,
		},
		visibility: 4339,
		pop: 0.41,
		snow: {
			'3h': 0.62,
		},
		sys: {
			pod: 'n',
		},
		dt_txt: '2022-12-07 03:00:00',
	},
	{
		dt: 1670392800,
		main: {
			temp: 1.43,
			feels_like: -3.59,
			temp_min: 1.43,
			temp_max: 1.43,
			pressure: 1010,
			sea_level: 1010,
			grnd_level: 1006,
			humidity: 85,
			temp_kf: 0,
		},
		weather: [
			{
				id: 600,
				main: 'Snow',
				description: 'light snow',
				icon: '13n',
			},
		],
		clouds: {
			all: 100,
		},
		wind: {
			speed: 5.9,
			deg: 273,
			gust: 10.12,
		},
		visibility: 10000,
		pop: 0.41,
		snow: {
			'3h': 0.36,
		},
		sys: {
			pod: 'n',
		},
		dt_txt: '2022-12-07 06:00:00',
	},
	{
		dt: 1670403600,
		main: {
			temp: 1.23,
			feels_like: -3.69,
			temp_min: 1.23,
			temp_max: 1.23,
			pressure: 1011,
			sea_level: 1011,
			grnd_level: 1007,
			humidity: 80,
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
			speed: 5.59,
			deg: 273,
			gust: 10.17,
		},
		visibility: 10000,
		pop: 0,
		sys: {
			pod: 'd',
		},
		dt_txt: '2022-12-07 09:00:00',
	},
	{
		dt: 1670414400,
		main: {
			temp: 2.07,
			feels_like: -2.47,
			temp_min: 2.07,
			temp_max: 2.07,
			pressure: 1011,
			sea_level: 1011,
			grnd_level: 1006,
			humidity: 88,
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
			all: 86,
		},
		wind: {
			speed: 5.28,
			deg: 260,
			gust: 10.88,
		},
		visibility: 5253,
		pop: 0,
		sys: {
			pod: 'd',
		},
		dt_txt: '2022-12-07 12:00:00',
	},
	{
		dt: 1670425200,
		main: {
			temp: 2.4,
			feels_like: -2.32,
			temp_min: 2.4,
			temp_max: 2.4,
			pressure: 1011,
			sea_level: 1011,
			grnd_level: 1006,
			humidity: 79,
			temp_kf: 0,
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
			speed: 5.81,
			deg: 268,
			gust: 10.15,
		},
		visibility: 10000,
		pop: 0.01,
		sys: {
			pod: 'n',
		},
		dt_txt: '2022-12-07 15:00:00',
	},
	{
		dt: 1670436000,
		main: {
			temp: 2.17,
			feels_like: -2.18,
			temp_min: 2.17,
			temp_max: 2.17,
			pressure: 1011,
			sea_level: 1011,
			grnd_level: 1006,
			humidity: 86,
			temp_kf: 0,
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
			speed: 4.95,
			deg: 260,
			gust: 9.43,
		},
		visibility: 10000,
		pop: 0,
		sys: {
			pod: 'n',
		},
		dt_txt: '2022-12-07 18:00:00',
	},
	{
		dt: 1670446800,
		main: {
			temp: 2.54,
			feels_like: -1.7,
			temp_min: 2.54,
			temp_max: 2.54,
			pressure: 1011,
			sea_level: 1011,
			grnd_level: 1006,
			humidity: 86,
			temp_kf: 0,
		},
		weather: [
			{
				id: 600,
				main: 'Snow',
				description: 'light snow',
				icon: '13n',
			},
		],
		clouds: {
			all: 100,
		},
		wind: {
			speed: 4.92,
			deg: 258,
			gust: 9.38,
		},
		visibility: 10000,
		pop: 0.32,
		snow: {
			'3h': 0.23,
		},
		sys: {
			pod: 'n',
		},
		dt_txt: '2022-12-07 21:00:00',
	},
	{
		dt: 1670457600,
		main: {
			temp: 1,
			feels_like: -2.62,
			temp_min: 1,
			temp_max: 1,
			pressure: 1011,
			sea_level: 1011,
			grnd_level: 1006,
			humidity: 83,
			temp_kf: 0,
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
			speed: 3.39,
			deg: 267,
			gust: 8.48,
		},
		visibility: 10000,
		pop: 0,
		sys: {
			pod: 'n',
		},
		dt_txt: '2022-12-08 00:00:00',
	},
	{
		dt: 1670468400,
		main: {
			temp: 0.98,
			feels_like: -2.65,
			temp_min: 0.98,
			temp_max: 0.98,
			pressure: 1010,
			sea_level: 1010,
			grnd_level: 1005,
			humidity: 91,
			temp_kf: 0,
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
			speed: 3.4,
			deg: 220,
			gust: 10.18,
		},
		visibility: 10000,
		pop: 0,
		sys: {
			pod: 'n',
		},
		dt_txt: '2022-12-08 03:00:00',
	},
	{
		dt: 1670479200,
		main: {
			temp: 0.96,
			feels_like: -3.41,
			temp_min: 0.96,
			temp_max: 0.96,
			pressure: 1009,
			sea_level: 1009,
			grnd_level: 1004,
			humidity: 88,
			temp_kf: 0,
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
			speed: 4.47,
			deg: 212,
			gust: 11.7,
		},
		visibility: 10000,
		pop: 0,
		sys: {
			pod: 'n',
		},
		dt_txt: '2022-12-08 06:00:00',
	},
	{
		dt: 1670490000,
		main: {
			temp: 1.37,
			feels_like: -3.29,
			temp_min: 1.37,
			temp_max: 1.37,
			pressure: 1008,
			sea_level: 1008,
			grnd_level: 1004,
			humidity: 85,
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
			all: 95,
		},
		wind: {
			speed: 5.16,
			deg: 212,
			gust: 11.9,
		},
		visibility: 10000,
		pop: 0,
		sys: {
			pod: 'd',
		},
		dt_txt: '2022-12-08 09:00:00',
	},
	{
		dt: 1670500800,
		main: {
			temp: 2.65,
			feels_like: -1.71,
			temp_min: 2.65,
			temp_max: 2.65,
			pressure: 1007,
			sea_level: 1007,
			grnd_level: 1003,
			humidity: 80,
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
			all: 97,
		},
		wind: {
			speed: 5.2,
			deg: 218,
			gust: 10.94,
		},
		visibility: 10000,
		pop: 0,
		sys: {
			pod: 'd',
		},
		dt_txt: '2022-12-08 12:00:00',
	},
	{
		dt: 1670511600,
		main: {
			temp: 2.54,
			feels_like: -1.94,
			temp_min: 2.54,
			temp_max: 2.54,
			pressure: 1008,
			sea_level: 1008,
			grnd_level: 1003,
			humidity: 85,
			temp_kf: 0,
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
			speed: 5.4,
			deg: 227,
			gust: 10.56,
		},
		visibility: 10000,
		pop: 0.13,
		sys: {
			pod: 'n',
		},
		dt_txt: '2022-12-08 15:00:00',
	},
	{
		dt: 1670522400,
		main: {
			temp: 1.49,
			feels_like: -1.97,
			temp_min: 1.49,
			temp_max: 1.49,
			pressure: 1008,
			sea_level: 1008,
			grnd_level: 1004,
			humidity: 97,
			temp_kf: 0,
		},
		weather: [
			{
				id: 600,
				main: 'Snow',
				description: 'light snow',
				icon: '13n',
			},
		],
		clouds: {
			all: 100,
		},
		wind: {
			speed: 3.32,
			deg: 242,
			gust: 8.34,
		},
		visibility: 955,
		pop: 0.32,
		snow: {
			'3h': 0.39,
		},
		sys: {
			pod: 'n',
		},
		dt_txt: '2022-12-08 18:00:00',
	},
	{
		dt: 1670533200,
		main: {
			temp: 1.37,
			feels_like: -0.19,
			temp_min: 1.37,
			temp_max: 1.37,
			pressure: 1010,
			sea_level: 1010,
			grnd_level: 1005,
			humidity: 96,
			temp_kf: 0,
		},
		weather: [
			{
				id: 600,
				main: 'Snow',
				description: 'light snow',
				icon: '13n',
			},
		],
		clouds: {
			all: 100,
		},
		wind: {
			speed: 1.5,
			deg: 287,
			gust: 3.35,
		},
		visibility: 1542,
		pop: 0.24,
		snow: {
			'3h': 0.29,
		},
		sys: {
			pod: 'n',
		},
		dt_txt: '2022-12-08 21:00:00',
	},
	{
		dt: 1670544000,
		main: {
			temp: 1.18,
			feels_like: 1.18,
			temp_min: 1.18,
			temp_max: 1.18,
			pressure: 1010,
			sea_level: 1010,
			grnd_level: 1006,
			humidity: 86,
			temp_kf: 0,
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
			speed: 0.44,
			deg: 294,
			gust: 0.61,
		},
		visibility: 10000,
		pop: 0,
		sys: {
			pod: 'n',
		},
		dt_txt: '2022-12-09 00:00:00',
	},
	{
		dt: 1670554800,
		main: {
			temp: 0.8,
			feels_like: 0.8,
			temp_min: 0.8,
			temp_max: 0.8,
			pressure: 1010,
			sea_level: 1010,
			grnd_level: 1005,
			humidity: 89,
			temp_kf: 0,
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
			speed: 1.25,
			deg: 146,
			gust: 2.11,
		},
		visibility: 10000,
		pop: 0,
		sys: {
			pod: 'n',
		},
		dt_txt: '2022-12-09 03:00:00',
	},
	{
		dt: 1670565600,
		main: {
			temp: 0.8,
			feels_like: -1.6,
			temp_min: 0.8,
			temp_max: 0.8,
			pressure: 1010,
			sea_level: 1010,
			grnd_level: 1005,
			humidity: 93,
			temp_kf: 0,
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
			speed: 2.06,
			deg: 162,
			gust: 3.86,
		},
		visibility: 10000,
		pop: 0,
		sys: {
			pod: 'n',
		},
		dt_txt: '2022-12-09 06:00:00',
	},
	{
		dt: 1670576400,
		main: {
			temp: 0.74,
			feels_like: -2.2,
			temp_min: 0.74,
			temp_max: 0.74,
			pressure: 1010,
			sea_level: 1010,
			grnd_level: 1006,
			humidity: 86,
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
			all: 98,
		},
		wind: {
			speed: 2.55,
			deg: 159,
			gust: 4.01,
		},
		visibility: 10000,
		pop: 0,
		sys: {
			pod: 'd',
		},
		dt_txt: '2022-12-09 09:00:00',
	},
	{
		dt: 1670587200,
		main: {
			temp: 2.02,
			feels_like: 0.03,
			temp_min: 2.02,
			temp_max: 2.02,
			pressure: 1009,
			sea_level: 1009,
			grnd_level: 1004,
			humidity: 76,
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
			all: 88,
		},
		wind: {
			speed: 1.89,
			deg: 144,
			gust: 2.64,
		},
		visibility: 10000,
		pop: 0,
		sys: {
			pod: 'd',
		},
		dt_txt: '2022-12-09 12:00:00',
	},
	{
		dt: 1670598000,
		main: {
			temp: 1.12,
			feels_like: -0.89,
			temp_min: 1.12,
			temp_max: 1.12,
			pressure: 1009,
			sea_level: 1009,
			grnd_level: 1004,
			humidity: 82,
			temp_kf: 0,
		},
		weather: [
			{
				id: 803,
				main: 'Clouds',
				description: 'broken clouds',
				icon: '04n',
			},
		],
		clouds: {
			all: 75,
		},
		wind: {
			speed: 1.79,
			deg: 106,
			gust: 3.15,
		},
		visibility: 10000,
		pop: 0,
		sys: {
			pod: 'n',
		},
		dt_txt: '2022-12-09 15:00:00',
	},
	{
		dt: 1670608800,
		main: {
			temp: -0.36,
			feels_like: -2.61,
			temp_min: -0.36,
			temp_max: -0.36,
			pressure: 1009,
			sea_level: 1009,
			grnd_level: 1004,
			humidity: 85,
			temp_kf: 0,
		},
		weather: [
			{
				id: 803,
				main: 'Clouds',
				description: 'broken clouds',
				icon: '04n',
			},
		],
		clouds: {
			all: 53,
		},
		wind: {
			speed: 1.8,
			deg: 104,
			gust: 3.05,
		},
		visibility: 10000,
		pop: 0,
		sys: {
			pod: 'n',
		},
		dt_txt: '2022-12-09 18:00:00',
	},
	{
		dt: 1670619600,
		main: {
			temp: -1,
			feels_like: -2.98,
			temp_min: -1,
			temp_max: -1,
			pressure: 1009,
			sea_level: 1009,
			grnd_level: 1004,
			humidity: 86,
			temp_kf: 0,
		},
		weather: [
			{
				id: 801,
				main: 'Clouds',
				description: 'few clouds',
				icon: '02n',
			},
		],
		clouds: {
			all: 12,
		},
		wind: {
			speed: 1.55,
			deg: 85,
			gust: 1.83,
		},
		visibility: 10000,
		pop: 0,
		sys: {
			pod: 'n',
		},
		dt_txt: '2022-12-09 21:00:00',
	},
];
