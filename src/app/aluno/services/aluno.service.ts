import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { AlunoListModel } from '../models/aluno-list.model';

@Injectable({
	providedIn: 'root'
})
export class AlunoService extends BaseResourceService<AlunoListModel> {

	constructor(public injector: Injector) {
		super('aluno', injector);
	}
}
