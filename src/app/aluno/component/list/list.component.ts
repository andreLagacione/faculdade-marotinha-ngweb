import { Component, OnInit, Injector } from '@angular/core';

// services
import { ControlElementsService } from 'src/app/shared/services/control-elements.service';
import { BaseResouceListComponent } from 'src/app/shared/components/base-resource-list.component';
import { AlunoListModel } from '../../models/aluno-list.model';
import { AlunoService } from '../../services/aluno.service';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseResouceListComponent<AlunoListModel> implements OnInit {

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

}
