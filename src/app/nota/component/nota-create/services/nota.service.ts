import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';

// model
import { NotaModel } from '../models/nota.model';

@Injectable({
	providedIn: 'root'
})
export class NotaService extends BaseResourceService<NotaModel> {

	constructor(public injector: Injector) {
		super('nota', injector);
	}
}
