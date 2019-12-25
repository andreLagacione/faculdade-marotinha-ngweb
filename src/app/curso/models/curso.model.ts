// models
import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class CursoModel extends BaseResourceModel {
	name?: string;
	materias?: (string | number)[];

	constructor() {
		super();
	}
}
