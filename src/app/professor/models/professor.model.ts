// models
import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';
import { MateriaModel } from 'src/app/materia/models/materia.model';
import { CursoModel } from 'src/app/curso/models/curso.model';

export class ProfessorModel extends BaseResourceModel {
	name?: string;
	age?: number;
	cpf?: string;
	phone?: number;
	materiasLecionadas?: MateriaModel[];
	cursosLecionados?: CursoModel[];

	constructor() {
		super();
	}
}
