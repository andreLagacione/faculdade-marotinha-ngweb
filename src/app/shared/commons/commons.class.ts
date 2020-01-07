export class Commons {

	public static generateYears(): number[] {
		const currentYear = new Date().getFullYear();
		const currentYearMoreTen = currentYear + 10;
		const yearsList: number[] = [];


		for (let i = 2019; i <= currentYearMoreTen; i++) {
			yearsList.push(i);
		}

		return yearsList;
	}

}
