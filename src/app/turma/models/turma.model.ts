// models
import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class TurmaModel extends BaseResourceModel {
	ano?: number;
	curso?: string;
	professor?: string;
	totalAlunos?: number;
	periodo?: string;

	constructor() {
		super();
	}
}
