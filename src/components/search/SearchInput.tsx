import { FC } from 'react';
import AsyncSelect from 'react-select/async';
import debounce from 'debounce-promise';
import { ICity, ISelect, SearchInputProps } from '../../common/types';
import { geo_api } from '../../common/api';

const SearchInput: FC<SearchInputProps> = (props) => {
	const { refSel, handleCitySelect } = props;

	const fetchCities = debounce(
		(inputValue: string) =>
			new Promise<ISelect[]>((resolve) => {
				if (inputValue === '') {
					resolve([]);
				} else {
					geo_api
						.get('/cities', {
							params: {
								namePrefix: inputValue,
							},
						})
						.then(function (response) {
							resolve(mapCity(response.data.data));
						});
				}
			}),
		1000
	);

	const mapCity = (data: ICity[]): ISelect[] => {
		const cities = data.map((city: ICity) => {
			return {
				value: city.id,
				label: `${city.name}, ${city.country}`,
				data: city,
			};
		});
		return cities;
	};

	return (
		<AsyncSelect
			ref={refSel}
			defaultOptions
			isClearable
			loadOptions={fetchCities}
			onChange={handleCitySelect}
			placeholder="Search City..."
			noOptionsMessage={(string) => {
				return 'Please type a valid city name';
			}}
			styles={{
				control: (baseStyles, state) => ({
					...baseStyles,
					borderRadius: '26px',
					height: '3.25rem',
					boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
					border: 'none',
					padding: '0px 30px 0px 46px',
					backgroundColor: 'rgba(255, 255, 255, 0.9)',
				}),
				placeholder: (baseStyles, state) => ({
					...baseStyles,
					color: '#7b98b2',
				}),
				input: (baseStyles, state) => ({
					...baseStyles,
					color: '#396bae',
				}),
				singleValue: (baseStyles, state) => ({
					...baseStyles,
					color: '#396bae',
				}),
				menu: (baseStyles, state) => ({
					...baseStyles,
					color: '#396bae',
				}),
				dropdownIndicator: (baseStyles, state) => ({
					visibility: 'hidden',
				}),
			}}
		/>
	);
};

export default SearchInput;
