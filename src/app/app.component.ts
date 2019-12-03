import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

// services
import { ControlElementsService } from './shared/services/control-elements.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private unsubscribe$: Subject<void> = new Subject<void>();
	public toggleMenu = false;
	public showLoader = false;

  constructor(
    private titleService: Title,
    private controlElementsService: ControlElementsService
  ) {
    this.controlElementsService.loaderControl$
			.pipe(
				takeUntil(this.unsubscribe$)
			)
			.subscribe(
				_response => this.showLoader = _response
			);
  }

  ngOnInit() {
    this.titleService.setTitle('Home | Faculdade Marotinha');
  }

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}
}