import { OnInit, OnDestroy, Injector } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

// models
import { BaseResourceModel } from '../models/base-resource.model';

// services
import { ToasterService } from 'src/app/toaster/services/toaster.service';
import { BaseResourceService } from '../services/base-resource.service';
import { takeUntil } from 'rxjs/operators';

export abstract class BaseResourceRegisterComponent<T extends BaseResourceModel> implements OnInit, OnDestroy {
	protected unsubscribe$: Subject<void> = new Subject<void>();
	protected router: Router;
	public pageTitle: string;
	protected regiterId: string;
	protected backRoute: string;
	public registerForm: FormGroup;
	protected activatedRoute: ActivatedRoute;
	protected toasterService: ToasterService;

	constructor(
		protected injector: Injector,
		private resourceService: BaseResourceService<T>
	) {
		this.toasterService = injector.get(ToasterService);
		this.router = this.injector.get(Router);
		this.activatedRoute = this.injector.get(ActivatedRoute);

		this.activatedRoute.params
			.subscribe(
				_response => {
					if (_response['id']) {
						this.regiterId = _response['id'];
					}
				}
			);
	}

	ngOnInit() {
		if (this.regiterId) {
			this.getById();
		}
	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	protected create(resource: T) {
		this.resourceService.create(resource)
			.pipe(
				takeUntil(this.unsubscribe$)
			)
			.subscribe(
				_response => {
					this.toasterService.success(_response['menssage'] || 'Item created with success.');
					this.resetForm();
				},
				_error => this.toasterService.error(_error['menssage'])
			);
	}

	protected update(resource: T, uri: string = '') {
		this.resourceService.update(resource, uri)
			.pipe(
				takeUntil(this.unsubscribe$)
			)
			.subscribe(
				_response => {
					this.toasterService.success(_response['menssage'] || 'Item updated with success.');
					this.toBack();
				},
				_error => this.toasterService.error(_error['menssage'])
			);
	}

	protected getById() {
		this.resourceService.getById(this.regiterId)
			.pipe(
				takeUntil(this.unsubscribe$)
			)
			.subscribe(
				_response => this.resourceService.updateFormValues(_response),
				_error => this.toasterService.error(_error['menssage'])
			);
	}

	protected resetForm() {
		this.registerForm.reset();
	}

	public toBack() {
		this.router.navigate([this.backRoute]);
	}

	public changeCheckboxValue(formControlName: string) {
		const value = this.registerForm.value[formControlName];

		this.registerForm.patchValue({
			[formControlName]: value ? true : null
		});
	}

	public trackByFunction(index, item) {
		if (!item) {
			return null;
		}

		return item;
	}

}
