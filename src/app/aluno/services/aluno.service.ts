import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';

// models
import { AlunoModel } from '../models/aluno.model';

@Injectable({
	providedIn: 'root'
})
export class AlunoService extends BaseResourceService<AlunoModel> {

	constructor(public injector: Injector) {
		super('aluno', injector);
	}
}
