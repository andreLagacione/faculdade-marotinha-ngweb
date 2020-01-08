import { Component, OnInit, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

// componet
import { BaseResouceListComponent } from 'src/app/shared/components/base-resource-list.component';

// classes
import { Commons } from 'src/app/shared/commons/commons.class';

// model
import { TurmaModel } from '../../models/turma.model';
import { CursoModel } from 'src/app/curso/models/curso.model';
import { ProfessorModel } from 'src/app/professor/models/professor.model';

// service
import { TurmaService } from '../../services/turma.service';
import { ControlElementsService } from 'src/app/shared/services/control-elements.service';

@Component({
	selector: 'app-turma-list',
	templateUrl: './turma-list.component.html'
})
export class TurmaListComponent extends BaseResouceListComponent<TurmaModel> implements OnInit {
	public yearsList: number[] = [];
	public cursoList: Observable<CursoModel[]>;
	public professorList: Observable<ProfessorModel[]>;
	public periodoList = ['Manhã', 'Tarde', 'Noite'];

	constructor(
		protected injector: Injector,
		protected turmaService: TurmaService,
		private controlElementsService: ControlElementsService
	) {
		super(injector, turmaService);
	}

	ngOnInit() {
		this.registerRoute = '/turmas/cadastrar';
		this.editRoute = '/turmas/editar';
		this.controlElementsService.pageName('Turmas');
		this.instanciateFilterForm();
		this.getAllPageable();
		this.getYearsList();
		this.getCursoList();
		this.getProfessorList();
	}

	private instanciateFilterForm() {
		this.sidebarFormFilter = new FormGroup({
			ano: new FormControl(''),
			idCurso: new FormControl(''),
			idProfessor: new FormControl(''),
			periodo: new FormControl(''),
		});
	}

	protected getAllPageable() {
		this.baseParamsPage = `?sort=ano,asc&size=${this.pageSize}&page=${this.currentPage}`;
		super.getAllPageable();
	}

	private getYearsList() {
		this.yearsList = Commons.generateYears();
	}

	private getCursoList() {
		this.cursoList = this.turmaService.getGenericList('curso/combo-list');
	}

	private getProfessorList() {
		this.professorList = this.turmaService.getGenericList('professor/combo-list');
	}

}
