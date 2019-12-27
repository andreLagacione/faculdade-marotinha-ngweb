import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class NotaModel extends BaseResourceModel {
	idMateria?: number;
	notaBimestre1?: number;
	notaBimestre2?: number;
	notaBimestre3?: number;
	notaBimestre4?: number;
	idBoletim?: number | string;

	constructor() {
		super();
	}
}
