import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';

// model
import { MateriaModel } from '../models/materia.model';

@Injectable({
	providedIn: 'root'
})
export class MateriaService extends BaseResourceService<MateriaModel> {

	constructor(public injector: Injector) {
		super('materia', injector);
	}
}
