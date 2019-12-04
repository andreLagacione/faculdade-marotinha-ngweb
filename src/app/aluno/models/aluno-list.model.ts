import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class AlunoListModel extends BaseResourceModel {
	constructor(
		name?: string,
		age?: number,
		cpf?: string,
		phone?: number
	) {
		super();
	}
}
