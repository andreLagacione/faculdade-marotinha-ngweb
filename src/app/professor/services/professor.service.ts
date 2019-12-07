import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';

// model
import { ProfessorModel } from '../models/professor.model';

@Injectable({
	providedIn: 'root'
})
export class ProfessorService extends BaseResourceService<ProfessorModel> {

	constructor(public injector: Injector) {
		super('professor', injector);
	}
}
