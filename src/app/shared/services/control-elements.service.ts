import { Injectable, Injector, EventEmitter } from '@angular/core';

// services
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

@Injectable()
export class ControlElementsService extends BaseResourceService<BaseResourceModel> {
	public loaderControl$: EventEmitter<boolean> = new EventEmitter<boolean>();
	public pageName$: EventEmitter<string> = new EventEmitter<string>();

	constructor(
		public injector: Injector
	) {
		super('', injector);
	}

	public loaderControl(show: boolean) {
		this.loaderControl$.emit(show);
	}

	public pageName(name: string) {
		this.pageName$.emit(name);
	}
}
