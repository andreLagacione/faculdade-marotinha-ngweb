import { OnDestroy, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// models
import { BaseResourceModel } from '../models/base-resource.model';

// classes
import { FilterManipulate } from '../commons/filter-manipulate.class';

// services
import { ToasterService } from 'src/app/toaster/services/toaster.service';
import { SidebarFilterService } from 'src/app/sidebar-filter/services/sidebar-filter.service';
import { PaginationService } from 'src/app/pagination/services/pagination.service';
import { ConfirmModalService } from 'src/app/confirm-modal/services/confirm-modal.service';
import { BaseResourceService } from '../services/base-resource.service';
import { CheckPermissionsService } from '../services/check-permissions.service';

export abstract class BaseResouceListComponent<T extends BaseResourceModel> implements OnDestroy {
	public resourceList: T[] = [];
	protected router: Router;
	protected unsubscribe$: Subject<void> = new Subject<void>();
	protected baseParamsPage: string;
	protected registerRoute: string;
	protected editRoute: string;
	public itensPerPage = ['25', '50', '75', '100'];
	public pageSize = '25';
	public currentPage = '0';
	public totalPages: number;
	public idItemRemove: string;
	public messageNoData: string;
	public sidebarFormFilter: FormGroup;
	protected toasterService: ToasterService;
	protected sidebarFilterService: SidebarFilterService;
	protected paginationService: PaginationService;
	protected confirmModalService: ConfirmModalService;
	protected checkPermissionsService: CheckPermissionsService;

	constructor(
		protected injector: Injector,
		private resourceService: BaseResourceService<T>
	) {
		this.toasterService = injector.get(ToasterService);
		this.sidebarFilterService = injector.get(SidebarFilterService);
		this.router = injector.get(Router);
		this.paginationService = injector.get(PaginationService);
		this.confirmModalService = injector.get(ConfirmModalService);
		this.checkPermissionsService = injector.get(CheckPermissionsService);

		this.confirmModalService.confirmEvent$
			.pipe(
				takeUntil(this.unsubscribe$)
			)
			.subscribe(
				() => this.delete(this.idItemRemove)
			);

		this.sidebarFilterService.filter$
			.pipe(
				takeUntil(this.unsubscribe$)
			)
			.subscribe(
				() => this.getAllPageable()
			);
	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	protected getAll() {
		this.resourceService.getAll()
			.pipe(
				takeUntil(this.unsubscribe$)
			)
			.subscribe(
				_response => this.resourceList = _response,
				_error => this.toasterService.error(_error['message'])
			);
	}

	protected getAllPageable() {
		const params = FilterManipulate.optionsWithValue(this.sidebarFormFilter.value);

		this.resourceService.getAllPageable(this.baseParamsPage, params)
			.pipe(
				takeUntil(this.unsubscribe$)
			)
			.subscribe(
				_response => {
					this.resourceList = _response['content'];
					this.sidebarFilterService.filterControl(false);

					if (_response['content'].length) {
						this.totalPages = _response['totalPages'];
						this.paginationService.init(_response);
						this.messageNoData = '';
					} else {
						this.messageNoData = 'Not found informations to show!';
					}
				},
				_error => this.toasterService.error(_error['message'])
			);
	}

	protected delete(id: string) {
		this.closeConfirmModal();
		this.resourceService.delete(id)
			.pipe(
				takeUntil(this.unsubscribe$)
			)
			.subscribe(
				_response => {
					this.toasterService.success(_response['message'] || 'Item removed with success.');
					this.getAllPageable();
				},
				_error => this.toasterService.error(_error['message'])
			);
	}

	public openSidbarFilter() {
		this.sidebarFilterService.filterControl(true);
	}

	protected changePage(page: string) {
		this.currentPage = page;
		this.getAllPageable();
	}

	public changeItensPerPage(newSize: string) {
		this.currentPage = '0';
		this.pageSize = newSize;
		this.getAllPageable();
	}

	public create() {
		this.router.navigate([this.registerRoute]);
	}

	public editar(itemId: string) {
		this.router.navigate([this.editRoute, itemId]);
	}

	public openConfirmModal(registerId: string, registerName: string) {
		this.idItemRemove = registerId;
		this.confirmModalService.control({
			title: 'Register remove',
			message: `Do you sure wish to remove the register ${registerName}?`,
			open: true
		});
	}

	private closeConfirmModal() {
		this.confirmModalService.control({
			open: false
		});
	}

	public filterClear() {
		this.sidebarFormFilter.reset();
	}

	public trackByFunction(index, item) {
		if (!item) {
			return null;
		}

		return item;
	}

	public checkPermission(roles: string[]) {
		return this.checkPermissionsService.checkPermission(roles);
	}
}
