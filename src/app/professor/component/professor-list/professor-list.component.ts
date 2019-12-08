import { Component, OnInit, Injector } from '@angular/core';

// models
import { ProfessorModel } from '../../models/professor.model';

// component
import { BaseResouceListComponent } from 'src/app/shared/components/base-resource-list.component';

// service
import { ProfessorService } from '../../services/professor.service';
import { ControlElementsService } from 'src/app/shared/services/control-elements.service';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html'
})
export class ProfessorListComponent extends BaseResouceListComponent<ProfessorModel> implements OnInit {

  constructor(
		protected injector: Injector,
		protected professorService: ProfessorService,
		private controlElementsService: ControlElementsService
	) {
		super(injector, professorService);
	}

	ngOnInit() {
		this.registerRoute = '/professores/cadastrar';
		this.editRoute = '/professores/editar';
		this.controlElementsService.pageName('Professores');
		this.getAllPageable();
	}

	protected getAllPageable() {
		this.baseParamsPage = `?sort=name,asc&size=${this.pageSize}&page=${this.currentPage}`;
		super.getAllPageable();
	}

}
