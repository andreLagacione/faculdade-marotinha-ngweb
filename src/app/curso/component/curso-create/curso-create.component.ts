import { Component, OnInit, OnDestroy, Injector } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// models
import { CursoModel } from '../../models/curso.model';
import { MateriaModel } from 'src/app/materia/models/materia.model';

// component
import { BaseResourceRegisterComponent } from 'src/app/shared/components/base-resource-register.component';

// service
import { CursoService } from '../../services/curso.service';
import { ControlElementsService } from 'src/app/shared/services/control-elements.service';

@Component({
	selector: 'app-curso-create',
	templateUrl: './curso-create.component.html'
})
export class CursoCreateComponent extends BaseResourceRegisterComponent<CursoModel> implements OnInit, OnDestroy {
	public materiasList: Observable<MateriaModel[]>;
	public selectedMaterias: MateriaModel[] = [];

	constructor(
		protected injector: Injector,
		protected cursoService: CursoService,
		private controlElementsService: ControlElementsService
	) {
		super(injector, cursoService);

		this.resourceService.updateFormValues$
			.pipe(
				takeUntil(this.unsubscribe$)
			)
			.subscribe(
				_response => this.patchaValuesForm(_response)
			);

		this.resourceService.clearVariables$
			.pipe(
				takeUntil(this.unsubscribe$)
			)
			.subscribe(
				_response => this.selectedMaterias = []
			);
	}

	ngOnInit() {
		this.instaciateForm();
		this.getMaterias();
		this.controlElementsService.pageName('Cadastrar curso');
		this.backRoute = '/cursos';

		if (this.regiterId) {
			this.getById();
			this.controlElementsService.pageName('Editar curso');
		}
	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	private instaciateForm() {
		this.registerForm = new FormGroup({
			name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)])
		});
	}

	private getMaterias() {
		this.materiasList = this.cursoService.getGenericList('materia/combo-list');
	}

	public selectedMateriasEvent(materia: MateriaModel) {
		this.selectedMaterias.push({
			id: materia.id
		});
	}

	public save() {
		const values = this.registerForm.value;
		const curso: CursoModel = {
			id: this.regiterId,
			name: values.name,
			materias: this.selectedMaterias.map(value => value.id)
		};

		if (this.regiterId) {
			super.update(curso);
			return false;
		}

		super.create(curso);
	}

	private patchaValuesForm(values: object) {
		this.selectedMaterias = values['materias'];
		this.registerForm.patchValue({
			name: values['nome']
		});

		this.registerForm.markAsDirty();
	}

	get name() {
		return this.registerForm.get('name');
	}

}
