import { Component, OnInit, Injector } from '@angular/core';
import { BaseResouceListComponent } from 'src/app/shared/components/base-resource-list.component';
import { CursoModel } from '../../models/curso.model';
import { CursoService } from '../../services/curso.service';
import { ControlElementsService } from 'src/app/shared/services/control-elements.service';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html'
})
export class CursoListComponent extends BaseResouceListComponent<CursoModel> implements OnInit {

  constructor(
		protected injector: Injector,
		protected cursoService: CursoService,
		private controlElementsService: ControlElementsService
	) {
		super(injector, cursoService);
	}

	ngOnInit() {
		this.registerRoute = '/cursos/cadastrar';
		this.editRoute = '/cursos/editar';
		this.controlElementsService.pageName('Cursos');
		this.getAllPageable();
	}

	protected getAllPageable() {
		this.baseParamsPage = `?sort=name,asc&size=${this.pageSize}&page=${this.currentPage}`;
		super.getAllPageable();
	}

}
