import { Component, OnInit, Injector, OnDestroy } from '@angular/core';
import { BaseResourceRegisterComponent } from 'src/app/shared/components/base-resource-register.component';
import { MateriaModel } from '../../models/materia.model';
import { MateriaService } from '../../services/materia.service';
import { ControlElementsService } from 'src/app/shared/services/control-elements.service';
import { takeUntil } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-materia-create',
  templateUrl: './materia-create.component.html'
})
export class MateriaCreateComponent extends BaseResourceRegisterComponent<MateriaModel> implements OnInit, OnDestroy {

  constructor(
		protected injector: Injector,
		protected materiaService: MateriaService,
		private controlElementsService: ControlElementsService
	) {
		super(injector, materiaService);

		this.resourceService.updateFormValues$
			.pipe(
				takeUntil(this.unsubscribe$)
			)
			.subscribe(
				_response => this.patchaValuesForm(_response)
			);
	}

	ngOnInit() {
		this.instaciateForm();
		this.controlElementsService.pageName('Cadastrar matéria');
		this.backRoute = '/materias';

		if (this.regiterId) {
			this.getById();
			this.controlElementsService.pageName('Editar matéria');
		}
	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	private instaciateForm() {
		this.registerForm = new FormGroup({
			name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)])
		});
	}

	public save() {
		const values = this.registerForm.value;
		const curso: MateriaModel = {
			id: this.regiterId,
			name: values.name
		};

		if (this.regiterId) {
			super.update(curso);
			return false;
		}

		super.create(curso);
	}

	private patchaValuesForm(values: object) {
		this.registerForm.patchValue({
			name: values['name']
		});

		this.registerForm.markAsDirty();
	}

	get name() {
		return this.registerForm.get('name');
	}

}
