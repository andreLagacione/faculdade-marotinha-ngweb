import { Injectable } from '@angular/core';

// services
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ToasterService {
	constructor(
		private toastr: ToastrService,
	) { }

	public success(message: string) {
		this.toastr.success(message, 'Success!');
	}

	public error(message: string) {
		this.toastr.error(message || 'Something is wrong, try again later, please :D.', 'Error!');
	}

	public warning(message: string) {
		this.toastr.warning(message, 'Warning!');
	}

	public info(message: string, title: string) {
		this.toastr.info(message, title);
	}
}
