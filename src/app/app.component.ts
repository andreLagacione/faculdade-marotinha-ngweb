import { Component, OnDestroy } from '@angular/core';

// services
import { ControlElementsService } from './shared/services/control-elements.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
	private unsubscribe$: Subject<void> = new Subject<void>();
	public toggleMenu = false;
	public showLoader = false;

	constructor(
		private controlElementsService: ControlElementsService
	) {
		this.controlElementsService.loaderControl$
			.pipe(
				takeUntil(this.unsubscribe$)
			)
			.subscribe(
				_response => {
					setTimeout(() => {
						this.showLoader = _response;
					});
				}
			);
	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}
}
