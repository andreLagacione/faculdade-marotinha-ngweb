import { Component, EventEmitter, Input, Output, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// services
import { PaginationService } from './services/pagination.service';

@Component({
	selector: 'app-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnDestroy {
	@Input() public totalPages: number;
	@Output() public changePageEvent: EventEmitter<number> = new EventEmitter();

	private unsubscribe$: Subject<void> = new Subject<void>();
	public pages: Array<any>;
	public activePage = 1;

	constructor(
		private paginationService: PaginationService
	) {
		this.paginationService.init$
			.pipe(
				takeUntil(this.unsubscribe$)
			)
			.subscribe(
				_response => this.buildPagination(_response['number'] + 1, _response['totalPages'])
			);
	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	private buildPagination(page: number, total: number) {
		this.activePage = page;
		this.totalPages = total;
		this.pages = [];

		const numRange = 9;
		const numDivide = 4;
		let startRange = 1;

		if (page - numDivide > 0 && this.totalPages > numRange) {
			startRange = page - numDivide;
		}

		if (page >= this.totalPages - numDivide && this.totalPages > numRange) {
			startRange = this.totalPages - numRange + 1;
		}

		const endRange = this.totalPages;

		for (let intX = startRange; intX <= endRange; intX++) {

			if (this.pages.length === numRange) {
				break;
			}

			this.pages.push({
				name: intX,
				active: intX === page
			});
		}
	}

	public changePage(page: number, objPage?: object) {
		if (objPage && objPage['ativa']) {
			return false;
		}

		if (page > 0 && page <= this.totalPages) {
			this.changePageEvent.emit(page - 1);
		}
	}

}
