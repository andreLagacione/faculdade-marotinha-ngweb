import { Component, OnInit, OnDestroy, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// component
import { BaseResourceRegisterComponent } from 'src/app/shared/components/base-resource-register.component';

// clases
import { Commons } from 'src/app/shared/commons/commons.class';

// model
import { BoletimModel } from '../../models/boletim.model';
import { ProfessorModel } from 'src/app/professor/models/professor.model';
import { AlunoModel } from 'src/app/aluno/models/aluno.model';
import { TurmaModel } from 'src/app/turma/models/turma.model';

// service
import { BoletimService } from '../../services/boletim.service';
import { ControlElementsService } from 'src/app/shared/services/control-elements.service';

@Component({
	selector: 'app-boletim-create',
	templateUrl: './boletim-create.component.html'
})
export class BoletimCreateComponent extends BaseResourceRegisterComponent<BoletimModel> implements OnInit, OnDestroy {
	public professorList: Observable<ProfessorModel[]>;
	public alunoList: Observable<AlunoModel[]>;
	public turmaList: Observable<TurmaModel[]>;
	public anoList: number[] = [];

	constructor(
		protected injector: Injector,
		protected boletimService: BoletimService,
		private controlElementsService: ControlElementsService
	) {
		super(injector, boletimService);

		this.resourceService.updateFormValues$
			.pipe(
				takeUntil(this.unsubscribe$)
			)
			.subscribe(
				_response => this.patchaValuesForm(_response)
			);
	}

	ngOnInit() {
		this.instaciateForm();
		this.getProfessores();
		this.getAlunos();
		this.getTurma();
		this.getAnos();
		this.controlElementsService.pageName('Cadastrar boletim');
		this.backRoute = '/boletins';

		if (this.regiterId) {
			this.getById();
			this.controlElementsService.pageName('Editar boletim');
			this.boletimService.idBoletim = this.regiterId;
		}
	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	private instaciateForm() {
		this.registerForm = new FormGroup({
			ano: new FormControl('', [Validators.required]),
			idProfessor: new FormControl('', [Validators.required]),
			idAluno: new FormControl('', [Validators.required]),
			idTurma: new FormControl('', [Validators.required])
		});
	}

	private getProfessores() {
		this.professorList = this.boletimService.getGenericList('professor/combo-list');
	}

	private getAlunos() {
		this.alunoList = this.boletimService.getGenericList('aluno/combo-list');
	}

	private getTurma() {
		this.turmaList = this.boletimService.getGenericList('turma/combo-list');
	}

	private getAnos() {
		this.anoList = Commons.generateYears();
	}

	public save() {
		const values = this.registerForm.value;
		const boletim: BoletimModel = {
			id: this.regiterId,
			ano: values.ano,
			idProfessor: values.idProfessor,
			idAluno: values.idAluno,
			idTurma: values.idTurma,
		};

		if (this.regiterId) {
			super.update(boletim);
			return false;
		}

		super.create(boletim);
	}

	private patchaValuesForm(values: object) {
		this.registerForm.patchValue({
			ano: values['ano'],
			idProfessor: values['idProfessor'],
			idAluno: values['idAluno'],
			idTurma: values['idTurma'],
		});

		this.registerForm.markAsDirty();
	}

	get ano() {
		return this.registerForm.get('ano');
	}

	get idProfessor() {
		return this.registerForm.get('idProfessor');
	}

	get idAluno() {
		return this.registerForm.get('idAluno');
	}

	get idTurma() {
		return this.registerForm.get('idTurma');
	}

}
