import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class AlunoModel extends BaseResourceModel {
	name?: string;
	age?: number;
	cpf?: string;
	phone?: number;
	turmas?: (string | number)[];

	constructor() {
		super();
	}
}
