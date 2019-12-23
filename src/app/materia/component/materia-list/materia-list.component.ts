import { Component, OnInit, Injector } from '@angular/core';
import { BaseResouceListComponent } from 'src/app/shared/components/base-resource-list.component';
import { MateriaModel } from '../../models/materia.model';
import { MateriaService } from '../../services/materia.service';
import { ControlElementsService } from 'src/app/shared/services/control-elements.service';

@Component({
  selector: 'app-materia-list',
  templateUrl: './materia-list.component.html'
})
export class MateriaListComponent extends BaseResouceListComponent<MateriaModel> implements OnInit {

  constructor(
		protected injector: Injector,
		protected materiaService: MateriaService,
		private controlElementsService: ControlElementsService
	) {
		super(injector, materiaService);
	}

	ngOnInit() {
		this.registerRoute = '/materia/cadastrar';
		this.editRoute = '/materia/editar';
		this.controlElementsService.pageName('Materias');
		this.getAllPageable();
	}

	protected getAllPageable() {
		this.baseParamsPage = `?sort=name,asc&size=${this.pageSize}&page=${this.currentPage}`;
		super.getAllPageable();
	}

}
