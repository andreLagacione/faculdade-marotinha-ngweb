import { Component, OnInit } from '@angular/core';

// services
import { ControlElementsService } from 'src/app/shared/services/control-elements.service';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

	constructor(
		private controlElementsService: ControlElementsService
	) { }

	ngOnInit() {
		this.controlElementsService.pageName('Alunos');
	}

}
