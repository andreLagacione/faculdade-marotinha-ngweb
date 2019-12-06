import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class CursoModel extends BaseResourceModel {
	constructor(
		name?: string,
		materias?: object[]
	) {
		super();
	}
}
