import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';
import { CursoModel } from 'src/app/curso/models/curso.model';

export class AlunoModel extends BaseResourceModel {
	name?: string;
	age?: number;
	cpf?: string;
	phone?: number;
	cursos?: CursoModel[];

	constructor() {
		super();
	}
}
