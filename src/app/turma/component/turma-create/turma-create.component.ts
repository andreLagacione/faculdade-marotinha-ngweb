import { Component, OnInit, Injector, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';

// component
import { BaseResourceRegisterComponent } from 'src/app/shared/components/base-resource-register.component';

// models
import { TurmaModel } from '../../models/turma.model';
import { ProfessorModel } from 'src/app/professor/models/professor.model';
import { CursoModel } from 'src/app/curso/models/curso.model';
import { AlunoModel } from 'src/app/aluno/models/aluno.model';

// service
import { TurmaService } from '../../services/turma.service';
import { ControlElementsService } from 'src/app/shared/services/control-elements.service';

@Component({
	selector: 'app-turma-create',
	templateUrl: './turma-create.component.html'
})
export class TurmaCreateComponent extends BaseResourceRegisterComponent<TurmaModel> implements OnInit, OnDestroy {
	public anoLista: number[] = [];
	public cursosList: Observable<CursoModel[]>;
	public professorList: Observable<ProfessorModel[]>;
	public alunoList: Observable<AlunoModel[]>;
	public selectedAlunos: AlunoModel[] = [];
	public periodoList = ['manhã', 'tarde', 'noite'];

	constructor(
		protected injector: Injector,
		protected turmaService: TurmaService,
		private controlElementsService: ControlElementsService
	) {
		super(injector, turmaService);

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
				_response => this.selectedAlunos = []
			);
	}

	ngOnInit() {
		this.buildAnoLista();
		this.instaciateForm();
		this.getCursos();
		this.getProfessores();
		this.getAlunos();
		this.controlElementsService.pageName('Cadastrar turma');
		this.backRoute = '/turmas';

		if (this.regiterId) {
			this.getById();
			this.controlElementsService.pageName('Editar turma');
		}
	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	private buildAnoLista() {
		const anoAtual = new Date().getFullYear();
		const anoAtualMaisDez = anoAtual + 10;

		for (let i = 2019; i <= anoAtualMaisDez; i++) {
			this.anoLista.push(i);
		}
	}

	private instaciateForm() {
		this.registerForm = new FormGroup({
			ano: new FormControl('', [Validators.required]),
			curso: new FormControl('', [Validators.required]),
			professor: new FormControl('', [Validators.required]),
			periodo: new FormControl('', [Validators.required])
		});
	}

	private getCursos() {
		this.cursosList = this.turmaService.getGenericList('curso/combo-list');
	}

	private getProfessores() {
		this.professorList = this.turmaService.getGenericList('professor/combo-list');
	}

	private getAlunos() {
		this.alunoList = this.turmaService.getGenericList('aluno/combo-list');
	}

	public selectedItemEvent(aluno: AlunoModel) {
		this.selectedAlunos.push(aluno);
	}

	public save() {
		const values = this.registerForm.value;
		const turma: TurmaModel = {
			id: this.regiterId,
			ano: values.ano,
			curso: values.curso,
			professor: values.professor,
			alunos: this.selectedAlunos.map(value => value.id),
			periodo: values.periodo,
		};

		if (this.regiterId) {
			super.update(turma);
			return false;
		}

		super.create(turma);
	}

	private patchaValuesForm(values: object) {
		this.selectedAlunos = values['alunos'];
		this.registerForm.patchValue({
			ano: values['ano'],
			curso: values['curso'].id,
			professor: values['professor'].id,
			alunos: this.selectedAlunos,
			periodo: values['periodo'],
		});

		this.registerForm.markAsDirty();
	}

	get ano() {
		return this.registerForm.get('ano');
	}

	get curso() {
		return this.registerForm.get('curso');
	}

	get professor() {
		return this.registerForm.get('professor');
	}

	get periodo() {
		return this.registerForm.get('periodo');
	}

}
