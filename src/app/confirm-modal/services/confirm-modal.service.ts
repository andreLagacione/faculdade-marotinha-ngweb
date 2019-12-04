import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class ConfirmModalService {
	public control$: EventEmitter<object> = new EventEmitter();
	public confirmEvent$: EventEmitter<string> = new EventEmitter();

	constructor() { }

	public control(config: object) {
		this.control$.emit(config);
	}

	public confirmEvent(processName: string) {
		this.confirmEvent$.emit(processName);
	}
}
