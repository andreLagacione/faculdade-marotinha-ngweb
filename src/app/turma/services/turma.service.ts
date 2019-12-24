import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';

// model
import { TurmaModel } from '../models/turma.model';

@Injectable({
	providedIn: 'root'
})
export class TurmaService extends BaseResourceService<TurmaModel> {

	constructor(public injector: Injector) {
		super('turma', injector);
	}
}
