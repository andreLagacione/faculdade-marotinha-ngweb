import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';

// model
import { CursoModel } from '../models/curso.model';

@Injectable({
	providedIn: 'root'
})
export class CursoService extends BaseResourceService<CursoModel> {

	constructor(public injector: Injector) {
		super('curso', injector);
	}
}
