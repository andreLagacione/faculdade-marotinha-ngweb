import { Component, OnInit, Injector } from '@angular/core';
import { BaseResouceListComponent } from 'src/app/shared/components/base-resource-list.component';
import { AlunoModel } from '../../models/aluno.model';
import { BaseResourceRegisterComponent } from 'src/app/shared/components/base-resource-register.component';
import { AlunoService } from '../../services/aluno.service';
import { ControlElementsService } from 'src/app/shared/services/control-elements.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CursoModel } from 'src/app/curso/models/curso.model';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.scss']
})
export class CreateComponent extends BaseResourceRegisterComponent<AlunoModel> implements OnInit {
	public cursosList: Observable<CursoModel[]>;
	public selectedCursos: CursoModel[] = [];

	constructor(
		protected injector: Injector,
		protected alunoService: AlunoService,
		private controlElementsService: ControlElementsService
	) {
		super(injector, alunoService);
	}

	ngOnInit() {
		this.instaciateForm();
		this.getCursos();
		this.controlElementsService.pageName('Cadastrar aluno');
		this.backRoute = '/alunos';

		if (this.regiterId) {
			this.controlElementsService.pageName('Editar aluno');
		}
	}

	private instaciateForm() {
		this.registerForm = new FormGroup({
			name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
			age: new FormControl('', [Validators.required, Validators.min(15), Validators.maxLength(150)]),
			cpf: new FormControl('', [Validators.required]),
			phone: new FormControl('', [Validators.required])
		});
	}

	private getCursos() {
		this.cursosList = this.alunoService.getGenericList('curso/lista');
	}

	public selectedCursosEvent(curso: CursoModel) {
		this.selectedCursos.push({
			id: curso.id
		});
	}

	public save() {
		const values = this.registerForm.value;
		const curso: AlunoModel = {
			name: values.name,
			age: values.age,
			cpf: values.cpf,
			phone: values.phone,
			cursos: this.selectedCursos
		};

		super.create(curso);
	}



	get name() {
		return this.registerForm.get('name');
	}

	get age() {
		return this.registerForm.get('age');
	}

	get cpf() {
		return this.registerForm.get('cpf');
	}

	get phone() {
		return this.registerForm.get('phone');
	}

}
