import fetchMock from 'jest-fetch-mock';
import { render, fireEvent, cleanup, waitFor } from '@testing-library/react';
import { geo_api, weather_api } from '../common/api';
import SearchInput from '../components/search/SearchInput';
import CurrentWeather from '../components/currentWeather/CurrentWeather';
import Forecast from '../components/forecast/Forecast';
import { AppContext } from '../common/appContext';
import {
	weatherMock,
	citiesMock,
	forecastMock,
	berlinMock,
} from '../common/mockData';

fetchMock.enableMocks();

describe('Test search API and Input Component behaviour', () => {
	const searchTerm = 'berl';

	beforeEach(() => {
		fetchMock.resetMocks();
	});

	afterEach(cleanup);

	it('returns correct cities data from Geo Search API', async () => {
		fetch.mockResponseOnce(JSON.stringify(citiesMock));
		const geoApiResponse = await geo_api
			.get('/cities', {
				params: {
					namePrefix: searchTerm,
				},
			})
			.then(function (response) {
				return response.data;
			});
		expect(geoApiResponse).toEqual(citiesMock);
	});

	it('should render SearchInput without errors', async () => {
		const mockedOnChange = jest.fn();
		const { getByText } = render(<SearchInput />);

		const placeholder = getByText('Search City...');

		expect(placeholder).toBeTruthy();
	});

	it('should call onChange when Berlin option is selected on API response', async () => {
		const mockedOnChange = jest.fn();
		const { getByText, queryByRole } = render(
			<SearchInput handleCitySelect={mockedOnChange} />
		);

		const mySelectComponent = queryByRole('combobox');

		expect(mySelectComponent).toBeDefined();
		expect(mySelectComponent).not.toBeNull();
		expect(mockedOnChange).toHaveBeenCalledTimes(0);

		fireEvent.change(mySelectComponent, { target: { value: searchTerm } });
		await waitFor(
			() => {
				expect(getByText(berlinMock.label)).toBeInTheDocument();
			},
			{ timeout: 2000 } // because debounce promise
		);
		fireEvent.click(getByText(berlinMock.label));

		expect(mockedOnChange).toHaveBeenCalledTimes(1);
		expect(mockedOnChange).toHaveBeenCalledWith(berlinMock, {
			action: 'select-option',
			name: undefined,
			option: undefined,
		});
	});

	it('should call onChange when Berlin option is selected on default options', async () => {
		const mockedOnChange = jest.fn();
		const { getByText, queryByRole } = render(
			<SearchInput
				handleCitySelect={mockedOnChange}
				defaultOptions={[berlinMock]}
			/>
		);

		const mySelectComponent = queryByRole('combobox');

		expect(mySelectComponent).toBeDefined();
		expect(mySelectComponent).not.toBeNull();
		expect(mockedOnChange).toHaveBeenCalledTimes(0);

		fireEvent.keyDown(mySelectComponent, { key: 'ArrowDown' });
		await waitFor(() => {
			expect(getByText(berlinMock.label)).toBeInTheDocument();
		});
		fireEvent.click(getByText(berlinMock.label));

		expect(mockedOnChange).toHaveBeenCalledTimes(1);
		expect(mockedOnChange).toHaveBeenCalledWith(berlinMock, {
			action: 'select-option',
			name: undefined,
			option: undefined,
		});
	});
});

test('should render CurrentWeather Widget', () => {
	const contextValueMocked = {
		currentWeather: weatherMock,
		currentCity: berlinMock.data,
	};

	const { getByText } = render(
		<AppContext.Provider value={contextValueMocked}>
			<CurrentWeather />
		</AppContext.Provider>
	);

	expect(getByText('Current Weather')).toBeInTheDocument();
});

test('should render Forecast Widget', () => {
	const contextValueMocked = {
		forecast: forecastMock,
	};

	const { getByText } = render(
		<AppContext.Provider value={contextValueMocked}>
			<Forecast />
		</AppContext.Provider>
	);

	expect(getByText('Forecast')).toBeInTheDocument();
});
