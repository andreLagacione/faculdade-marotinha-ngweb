// models
import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class ProfessorModel extends BaseResourceModel {
	name?: string;
	age?: number;
	cpf?: string;
	phone?: number;
	materias?: (string | number)[];

	constructor() {
		super();
	}
}
