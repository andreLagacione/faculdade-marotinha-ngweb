// models
import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class BoletimModel extends BaseResourceModel {
	ano?: number;
	nomeAluno?: string;
	nomeProfessor?: string;
	nomeTurma?: string;
	idProfessor?: number;
	idAluno?: number;
	idTurma?: number;
	notas?: number[];

	constructor() {
		super();
	}
}
