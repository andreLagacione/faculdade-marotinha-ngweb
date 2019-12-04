import { Component, EventEmitter, HostListener, Input, OnDestroy, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// services
import { SidebarFilterService } from './services/sidebar-filter.service';

@Component({
	selector: 'app-sidebar-filter',
	templateUrl: './sidebar-filter.component.html',
	styleUrls: ['./sidebar-filter.component.scss'],
	animations: [
		trigger('openCloseFiltro', [
			state('open', style({
				right: 0,
				opacity: 1
			})),
			state('close', style({
				right: '-50%',
				opacity: 0
			})),
			transition('open <=> close', [
				animate('.3s')
			])
		]),
		trigger('showHiddenBackdrop', [
			state('show', style({
				display: 'block'
			})),
			state('hidden', style({
				display: 'none'
			}))
		])
	]
})
export class SidebarFilterComponent implements OnDestroy {
	@Input() public titulo: string;
	@Output() public eventClear: EventEmitter<boolean> = new EventEmitter();

	private unsubscribe$: Subject<void> = new Subject<void>();
	public isOpen = false;

	constructor(
		private sidebarFilterService: SidebarFilterService
	) {
		this.sidebarFilterService.filterControl$
			.pipe(
				takeUntil(this.unsubscribe$)
			)
			.subscribe(
				_response => this.isOpen = _response
			);

		this.sidebarFilterService.close$
			.pipe(
				takeUntil(this.unsubscribe$)
			)
			.subscribe(
				() => this.close()
			);
	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	@HostListener('document:keydown', ['$event'])
	escPress(event: KeyboardEvent) {
		if (event.keyCode === 27) {
			this.close();
		}
	}

	public close() {
		this.isOpen = false;
	}

	public filter() {
		this.sidebarFilterService.filter(true);
	}

	public clear() {
		this.eventClear.emit(true);
	}

	public checkPressEnterButton(event: KeyboardEvent) {
		if (event.keyCode === 13) {
			if (event.target !== document.querySelectorAll('textarea')[0]) {
				this.filter();
				event.preventDefault();
			}
		}
	}

}
