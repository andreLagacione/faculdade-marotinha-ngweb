import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class SidebarFilterService {
	public filterControl$: EventEmitter<boolean> = new EventEmitter();
	public filter$: EventEmitter<boolean> = new EventEmitter();
	public close$: EventEmitter<boolean> = new EventEmitter();

	constructor() { }

	public filterControl(open: boolean) {
		this.filterControl$.emit(open);
	}

	public filter(filter: boolean) {
		this.filter$.emit(filter);
	}

	public close(close: boolean) {
		this.close$.emit(close);
	}
}
