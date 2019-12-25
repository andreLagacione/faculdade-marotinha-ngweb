import { Component, OnInit, Injector } from '@angular/core';
import { BaseResouceListComponent } from 'src/app/shared/components/base-resource-list.component';
import { BoletimModel } from '../../models/boletim.model';
import { BoletimService } from '../../services/boletim.service';
import { ControlElementsService } from 'src/app/shared/services/control-elements.service';

@Component({
  selector: 'app-boletim-list',
  templateUrl: './boletim-list.component.html'
})
export class BoletimListComponent extends BaseResouceListComponent<BoletimModel> implements OnInit {

  constructor(
		protected injector: Injector,
		protected boletimService: BoletimService,
		private controlElementsService: ControlElementsService
	) {
		super(injector, boletimService);
	}

	ngOnInit() {
		this.registerRoute = '/boletim/cadastrar';
		this.editRoute = '/boletim/editar';
		this.controlElementsService.pageName('Boletins');
		this.getAllPageable();
	}

	protected getAllPageable() {
		this.baseParamsPage = `?sort=aluno,asc&size=${this.pageSize}&page=${this.currentPage}`;
		super.getAllPageable();
	}

}
