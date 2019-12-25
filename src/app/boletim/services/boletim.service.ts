import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';

// model
import { BoletimModel } from '../models/boletim.model';

@Injectable({
	providedIn: 'root'
})
export class BoletimService extends BaseResourceService<BoletimModel> {

	constructor(public injector: Injector) {
		super('boletim', injector);
	}
}
