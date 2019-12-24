import { Component, OnInit, Injector } from '@angular/core';

// componet
import { BaseResouceListComponent } from 'src/app/shared/components/base-resource-list.component';

// model
import { TurmaModel } from '../../models/turma.model';

// service
import { TurmaService } from '../../services/turma.service';
import { ControlElementsService } from 'src/app/shared/services/control-elements.service';

@Component({
	selector: 'app-turma-list',
	templateUrl: './turma-list.component.html'
})
export class TurmaListComponent extends BaseResouceListComponent<TurmaModel> implements OnInit {

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
		this.getAllPageable();
	}

	protected getAllPageable() {
		this.baseParamsPage = `?sort=ano,asc&size=${this.pageSize}&page=${this.currentPage}`;
		super.getAllPageable();
	}

}
