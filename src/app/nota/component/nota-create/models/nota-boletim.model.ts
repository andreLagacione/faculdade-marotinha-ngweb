// models
import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class NotaBoletimModel extends BaseResourceModel {
	id?: number;
	nomeMateria?: string;
	notaBimestre1?: number;
	notaBimestre2?: number;
	notaBimestre3?: number;
	notaBimestre4?: number;
	mediaFinal?: number;

	constructor() {
		super();
	}
}
