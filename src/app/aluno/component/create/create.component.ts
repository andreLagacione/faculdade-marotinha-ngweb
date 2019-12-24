import { Component, OnInit, Injector, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

// models
import { AlunoModel } from '../../models/aluno.model';
import { CursoModel } from 'src/app/curso/models/curso.model';

// services
import { AlunoService } from '../../services/aluno.service';
import { ControlElementsService } from 'src/app/shared/services/control-elements.service';

// components
import { BaseResourceRegisterComponent } from 'src/app/shared/components/base-resource-register.component';
import { takeUntil } from 'rxjs/operators';
import { TurmaModel } from 'src/app/turma/models/turma.model';

@Component({
	selector: 'app-create',
	templateUrl: './create.component.html'
})
export class CreateComponent extends BaseResourceRegisterComponent<AlunoModel> implements OnInit, OnDestroy {
	public turmasList: Observable<TurmaModel[]>;
	public turmasSelected: TurmaModel[] = [];

	constructor(
		protected injector: Injector,
		protected alunoService: AlunoService,
		private controlElementsService: ControlElementsService
	) {
		super(injector, alunoService);

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
				_response => this.turmasSelected = []
			);
	}

	ngOnInit() {
		this.instaciateForm();
		this.getTurmas();
		this.controlElementsService.pageName('Cadastrar aluno');
		this.backRoute = '/alunos';

		if (this.regiterId) {
			this.getById();
			this.controlElementsService.pageName('Editar aluno');
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

	private getTurmas() {
		this.turmasList = this.alunoService.getGenericList('turma/combo-list');
	}

	public selectedItemEvent(turma: TurmaModel) {
		this.turmasSelected.push({
			id: turma.id
		});
	}

	public save() {
		const values = this.registerForm.value;
		const aluno: AlunoModel = {
			id: this.regiterId,
			name: values.name,
			age: values.age,
			cpf: values.cpf,
			phone: values.phone,
			turmas: this.turmasSelected.map(value => value.id)
		};

		if (this.regiterId) {
			super.update(aluno);
			return false;
		}

		super.create(aluno);
	}

	private patchaValuesForm(values: object) {
		this.turmasSelected = values['turmas'];
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
