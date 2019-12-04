import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class PaginationService {
	public init$: EventEmitter<object> = new EventEmitter();

	constructor() { }

	public init(init: object) {
		this.init$.emit(init);
	}
}
