import { Component, OnInit, Injector } from '@angular/core';

// services
import { ControlElementsService } from 'src/app/shared/services/control-elements.service';
import { AlunoService } from '../../services/aluno.service';

// component
import { BaseResouceListComponent } from 'src/app/shared/components/base-resource-list.component';

// model
import { AlunoModel } from '../../models/aluno.model';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html'
})
export class ListComponent extends BaseResouceListComponent<AlunoModel> implements OnInit {

	constructor(
		protected injector: Injector,
		protected alunoService: AlunoService,
		private controlElementsService: ControlElementsService
	) {
		super(injector, alunoService);
	}

	ngOnInit() {
		this.registerRoute = '/alunos/cadastrar';
		this.editRoute = '/alunos/editar';
		this.controlElementsService.pageName('Alunos');
		this.getAllPageable();
	}

	protected getAllPageable() {
		this.baseParamsPage = `?sort=name,asc&size=${this.pageSize}&page=${this.currentPage}`;
		super.getAllPageable();
	}

}
