import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

// models
import { MateriaModel } from 'src/app/materia/models/materia.model';

export class CursoModel extends BaseResourceModel {
	name?: string;
	materias?: MateriaModel[];

	constructor() {
		super();
	}
}
