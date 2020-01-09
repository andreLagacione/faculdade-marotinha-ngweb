import { Component, Output, EventEmitter } from '@angular/core';

// models
import { MenuModel } from './models/sidebar-model';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
	@Output() toggleMenuEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

	public menuFixed = true;
	public isShort = false;
	public menuList: MenuModel[] = [{
		name: 'Alunos',
		icon: 'user-graduate',
		uri: '/alunos'
	}, {
		name: 'Boletins',
		icon: 'clipboard',
		uri: '/boletins'
	}, {
		name: 'Cursos',
		icon: 'book-reader',
		uri: '/cursos'
	}, {
		name: 'Materias',
		icon: 'book',
		uri: '/materias'
	}, {
		name: 'Professores',
		icon: 'chalkboard-teacher',
		uri: '/professores'
	}, {
		name: 'Turmas',
		icon: 'users',
		uri: '/turmas'
	}];

	constructor() { }

	public controlFixMenu() {
		this.menuFixed = !this.menuFixed;
		this.toggleMenuEvent.emit(this.menuFixed);
	}

	public mouseEnterEvent() {
		if (!this.menuFixed) {
			this.isShort = false;
		}
	}

	public mouseLeaveEvent() {
		if (!this.menuFixed) {
			this.isShort = true;
		}
	}

}
