import { Component, OnInit, Injector, OnDestroy } from '@angular/core';
import { BaseResourceRegisterComponent } from 'src/app/shared/components/base-resource-register.component';
import { NotaModel } from './models/nota.model';
import { NotaService } from './services/nota.service';
import { Observable } from 'rxjs';
import { MateriaModel } from 'src/app/materia/models/materia.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BoletimService } from 'src/app/boletim/services/boletim.service';
import { NotaBoletimModel } from './models/nota-boletim.model';
import { ControlElementsService } from 'src/app/shared/services/control-elements.service';
import { takeUntil } from 'rxjs/operators';
import { ConfirmModalService } from 'src/app/confirm-modal/services/confirm-modal.service';

@Component({
	selector: 'app-nota-create',
	templateUrl: './nota-create.component.html',
	styleUrls: ['./nota-create.component.scss']
})
export class NotaCreateComponent extends BaseResourceRegisterComponent<NotaModel> implements OnInit, OnDestroy {
	public materiaList: Observable<MateriaModel[]>;
	public notasList: NotaBoletimModel[] = [];
	private idBoletim: string;
	private idNotaEdit: number;
	private idNotaRemove: number;

	constructor(
		protected injector: Injector,
		protected notaService: NotaService,
		private boletimService: BoletimService,
		protected confirmModalService: ConfirmModalService
	) {
		super(injector, notaService);

		this.resourceService.clearVariables$
			.pipe(
				takeUntil(this.unsubscribe$)
			)
			.subscribe(
				() => {
					this.getNotas();
					this.instaciateForm();
				}
			);

		this.confirmModalService.confirmEvent$
			.pipe(
				takeUntil(this.unsubscribe$)
			)
			.subscribe(
				() => this.delete()
			);
	}

	ngOnInit() {
		this.idBoletim = this.boletimService.idBoletim;
		this.instaciateForm();
		this.getNotas();
		this.getMaterias();
	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	private instaciateForm() {
		this.registerForm = new FormGroup({
			materia: new FormControl('', [Validators.required]),
			bimestre1: new FormControl('', [Validators.min(0), Validators.max(10)]),
			bimestre2: new FormControl('', [Validators.min(0), Validators.max(10)]),
			bimestre3: new FormControl('', [Validators.min(0), Validators.max(10)]),
			bimestre4: new FormControl('', [Validators.min(0), Validators.max(10)])
		});
	}

	private getNotas() {
		this.notaService.getGenericList(`nota/id-boletim/${this.idBoletim}`)
			.subscribe(
				_response => this.notasList = _response,
				_error => this.toasterService.error(_error.error.message)
			);
	}

	private getMaterias() {
		this.materiaList = this.notaService.getGenericList('materia/combo-list');
	}

	public save() {
		const values = this.registerForm.value;
		const nota: NotaModel = {
			id: this.idNotaEdit,
			idMateria: values.materia,
			notaBimestre1: values.bimestre1,
			notaBimestre2: values.bimestre2,
			notaBimestre3: values.bimestre3,
			notaBimestre4: values.bimestre4,
			idBoletim: this.idBoletim
		};

		if (this.idNotaEdit) {
			super.update(nota, true);
			return false;
		}

		super.create(nota);
	}

	private patchaValuesForm(values: object) {
		this.registerForm.patchValue({
			materia: values['idMateria'],
			bimestre1: values['notaBimestre1'],
			bimestre2: values['notaBimestre2'],
			bimestre3: values['notaBimestre3'],
			bimestre4: values['notaBimestre4']
		});

		this.registerForm.markAsDirty();
	}

	public openConfirmModal(registerId: number) {
		this.idNotaRemove = registerId;
		this.confirmModalService.control({
			title: 'Register remove',
			message: `Do you sure wish to remove this note in this boletim?`,
			open: true
		});
	}

	private closeConfirmModal() {
		this.confirmModalService.control({
			open: false
		});
	}

	protected delete() {
		this.closeConfirmModal();
		this.notaService.delete(this.idNotaRemove)
			.pipe(
				takeUntil(this.unsubscribe$)
			)
			.subscribe(
				_response => {
					this.toasterService.success(_response['message'] || 'Item removed with success.');
					this.getNotas();
				},
				_error => this.toasterService.error(_error.error.message)
			);
	}

	public editar(id: number) {
		this.idNotaEdit = id;
		this.notaService.getNota(this.idNotaEdit)
			.pipe(
				takeUntil(this.unsubscribe$)
			)
			.subscribe(
				_response => this.patchaValuesForm(_response),
				_error => this.toasterService.error(_error.error.message)
			);
	}

	public clearForm() {
		this.instaciateForm();
	}

	get materia() {
		return this.registerForm.get('materia');
	}

	get bimestre1() {
		return this.registerForm.get('bimestre1');
	}

	get bimestre2() {
		return this.registerForm.get('bimestre2');
	}

	get bimestre3() {
		return this.registerForm.get('bimestre3');
	}

	get bimestre4() {
		return this.registerForm.get('bimestre4');
	}

}
