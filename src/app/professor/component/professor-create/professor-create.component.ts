import { Component, OnInit, OnDestroy, Injector } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// models
import { ProfessorModel } from '../../models/professor.model';
import { CursoModel } from 'src/app/curso/models/curso.model';
import { MateriaModel } from 'src/app/materia/models/materia.model';

// component
import { BaseResourceRegisterComponent } from 'src/app/shared/components/base-resource-register.component';

// service
import { ProfessorService } from '../../services/professor.service';
import { ControlElementsService } from 'src/app/shared/services/control-elements.service';

@Component({
	selector: 'app-professor-create',
	templateUrl: './professor-create.component.html'
})
export class ProfessorCreateComponent extends BaseResourceRegisterComponent<ProfessorModel> implements OnInit, OnDestroy {

	public cursosList: Observable<CursoModel[]>;
	public selectedCursos: CursoModel[] = [];
	public materiasList: Observable<MateriaModel[]>;
	public selectedMaterias: MateriaModel[] = [];

	/**
	 * validar antes de enviar pro back
	 */

	constructor(
		protected injector: Injector,
		protected professorService: ProfessorService,
		private controlElementsService: ControlElementsService
	) {
		super(injector, professorService);

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
				_response => {
					this.selectedCursos = [];
					this.selectedMaterias = [];
				}
			);
	}

	ngOnInit() {
		this.instaciateForm();
		this.getCursos();
		this.getMaterias();
		this.controlElementsService.pageName('Cadastrar professor');
		this.backRoute = '/professores';

		if (this.regiterId) {
			this.getById();
			this.controlElementsService.pageName('Editar professor');
		}
	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	private instaciateForm() {
		this.registerForm = new FormGroup({
			name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
			age: new FormControl('', [Validators.required, Validators.min(15), Validators.max(150)]),
			cpf: new FormControl('', [Validators.required]),
			phone: new FormControl('', [Validators.required])
		});
	}

	private getCursos() {
		this.cursosList = this.professorService.getGenericList('curso/lista');
	}

	private getMaterias() {
		this.materiasList = this.professorService.getGenericList('materia/lista');
	}

	public selectedCursosEvent(curso: CursoModel) {
		this.selectedCursos.push({
			id: curso.id
		});
	}

	public selectedMateriasEvent(materia: MateriaModel) {
		this.selectedMaterias.push({
			id: materia.id
		});
	}

	public save() {
		const values = this.registerForm.value;
		const curso: ProfessorModel = {
			id: this.regiterId,
			name: values.name,
			age: values.age,
			cpf: values.cpf,
			phone: values.phone,
			materiasLecionadas: this.selectedMaterias,
			cursosLecionados: this.selectedCursos
		};

		if (this.regiterId) {
			super.update(curso);
			return false;
		}

		super.create(curso);
	}

	private patchaValuesForm(values: object) {
		this.selectedCursos = values['cursos'];
		this.selectedMaterias = values['materias'];
		this.registerForm.patchValue({
			name: values['name'],
			age: values['age'],
			cpf: values['cpf'],
			phone: values['phone']
		});

		this.registerForm.markAsDirty();
	}

	get name() {
		return this.registerForm.get('name');
	}

	get age() {
		return this.registerForm.get('age');
	}

	get cpf() {
		return this.registerForm.get('cpf');
	}

	get phone() {
		return this.registerForm.get('phone');
	}

}
