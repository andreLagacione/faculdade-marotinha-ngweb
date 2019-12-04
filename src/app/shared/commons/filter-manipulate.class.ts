export class FilterManipulate {
	public static optionsWithValue(filterOptions: object[]): object {
		const options = {};

		Object.keys(filterOptions).forEach(opcao => {
			if (filterOptions[opcao] instanceof Array && filterOptions[opcao].length) {
				options[opcao] = filterOptions[opcao];
			} else if (
				filterOptions[opcao] !== null &&
				filterOptions[opcao] !== undefined &&
				filterOptions[opcao] !== '' &&
				!(filterOptions[opcao] instanceof Array)
			) {
				options[opcao] = filterOptions[opcao];
			}
		});

		return options;
	}
}
