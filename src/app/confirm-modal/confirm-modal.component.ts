import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

// pulgins
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

// services
import { ConfirmModalService } from './services/confirm-modal.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-confirm-modal',
	templateUrl: './confirm-modal.component.html'
})
export class ConfirmModalComponent implements OnDestroy {
	@ViewChild('modalConfirm', { static: false }) private modalRefElement: ElementRef;

	private unsubscribe$: Subject<void> = new Subject<void>();
	public modalRef: BsModalRef;
	public title: string;
	public message: string;
	private processName: string;
	public processing = false;

	constructor(
		private confirmModalService: ConfirmModalService,
		private modalService: BsModalService
	) {
		this.confirmModalService.control$
			.pipe(
				takeUntil(this.unsubscribe$)
			)
			.subscribe(
				_response => {
					if (_response['open']) {
						this.modalRef = this.modalService.show(this.modalRefElement);
						this.title = _response['title'];
						this.message = _response['text'];
						this.processName = _response['processName'];
					} else {
						this.close();
					}
				}
			);
	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	public confirm() {
		this.processing = true;
		this.confirmModalService.confirmEvent(this.processName);
	}

	public close() {
		this.processing = false;
		this.modalRef.hide();
	}

}
