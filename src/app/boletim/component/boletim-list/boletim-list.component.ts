import { Component, OnInit, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

// component
import { BaseResouceListComponent } from 'src/app/shared/components/base-resource-list.component';

// model
import { BoletimModel } from '../../models/boletim.model';
import { AlunoModel } from 'src/app/aluno/models/aluno.model';
import { TurmaModel } from 'src/app/turma/models/turma.model';

// clasess
import { environment } from 'src/environments/environment';
import { Commons } from 'src/app/shared/commons/commons.class';

// service
import { BoletimService } from '../../services/boletim.service';
import { ControlElementsService } from 'src/app/shared/services/control-elements.service';
import { ProfessorModel } from 'src/app/professor/models/professor.model';

@Component({
	selector: 'app-boletim-list',
	templateUrl: './boletim-list.component.html'
})
export class BoletimListComponent extends BaseResouceListComponent<BoletimModel> implements OnInit {
	public yearsList: number[] = [];
	public alunoList: Observable<AlunoModel[]>;
	public professorList: Observable<ProfessorModel[]>;
	public turmaList: Observable<TurmaModel[]>;

	constructor(
		protected injector: Injector,
		protected boletimService: BoletimService,
		private controlElementsService: ControlElementsService
	) {
		super(injector, boletimService);
	}

	ngOnInit() {
		this.registerRoute = '/boletins/cadastrar';
		this.editRoute = '/boletins/editar';
		this.controlElementsService.pageName('Boletins');
		this.instanciateFilterForm();
		this.getAllPageable();
		this.getYearsList();
		this.getAlunoList();
		this.getProfessorList();
		this.getTurmaList();
	}

	private instanciateFilterForm() {
		this.sidebarFormFilter = new FormGroup({
			ano: new FormControl(''),
			idAluno: new FormControl(''),
			idProfessor: new FormControl(''),
			idTurma: new FormControl(''),
		});
	}

	protected getAllPageable() {
		this.baseParamsPage = `?sort=aluno,asc&size=${this.pageSize}&page=${this.currentPage}`;
		super.getAllPageable();
	}

	public printBoletim(idBoletim: number) {
		window.open(`${environment.url}/boletim/gerar/${idBoletim}`);
	}

	private getYearsList() {
		this.yearsList = Commons.generateYears();
	}

	private getAlunoList() {
		this.alunoList = this.boletimService.getGenericList('aluno/combo-list');
	}

	private getProfessorList() {
		this.professorList = this.boletimService.getGenericList('professor/combo-list');
	}

	private getTurmaList() {
		this.turmaList = this.boletimService.getGenericList('turma/combo-list');
	}

}
