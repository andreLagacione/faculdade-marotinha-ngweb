import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { ControlElementsService } from 'src/app/shared/services/control-elements.service';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-top',
	templateUrl: './top.component.html',
	styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit, OnDestroy {
	private unsubscribe$: Subject<void> = new Subject<void>();
	public nomePagina: string;

	constructor(
		private titleService: Title,
		private controlElementsService: ControlElementsService
	) {
		this.controlElementsService.pageName$
			.pipe(
				takeUntil(this.unsubscribe$)
			)
			.subscribe(
				_response => this.nomePagina = _response
			);
	}

	ngOnInit() {
		this.titleService.setTitle('Alunos | Faculdade Marotinha');
	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

}
