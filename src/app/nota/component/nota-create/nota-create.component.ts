import { Component, OnInit, Injector } from '@angular/core';
import { BaseResourceRegisterComponent } from 'src/app/shared/components/base-resource-register.component';
import { NotaModel } from './models/nota.model';
import { NotaService } from './services/nota.service';
import { Observable } from 'rxjs';
import { MateriaModel } from 'src/app/materia/models/materia.model';
import { ControlElementsService } from 'src/app/shared/services/control-elements.service';
import { takeUntil } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-nota-create',
  templateUrl: './nota-create.component.html',
  styleUrls: ['./nota-create.component.scss']
})
export class NotaCreateComponent extends BaseResourceRegisterComponent<NotaModel> implements OnInit {
  public materiaList: Observable<MateriaModel[]>;
  private idBoletim: number;
  private idNotaEdit: number;

	constructor(
		protected injector: Injector,
		protected notaService: NotaService
	) {
		super(injector, notaService);
	}

	ngOnInit() {
		this.instaciateForm();
		this.getMaterias();
	}

	private instaciateForm() {
		this.registerForm = new FormGroup({
			materia: new FormControl(''),
			bimestre1: new FormControl(''),
			bimestre2: new FormControl(''),
			bimestre3: new FormControl(''),
			bimestre4: new FormControl('')
		});
	}

	private getMaterias() {
		this.materiaList = this.notaService.getGenericList('materia/combo-list');
	}

	public save() {
		const values = this.registerForm.value;
		const nota: NotaModel = {
			id: this.regiterId,
		  idMateria: values.materia,
		  notaBimestre1: values.bimestre1,
		  notaBimestre2: values.bimestre2,
		  notaBimestre3: values.bimestre3,
		  notaBimestre4: values.bimestre4,
		  idBoletim: this.idBoletim
		};

		if (this.regiterId) {
			super.update(nota);
			return false;
		}

		super.create(nota);
	}

	private patchaValuesForm(values: object) {
		this.registerForm.patchValue({
			materia: values['idMateria'],
		  bimestre1: values['notaBimestre1'],
		  bimestre2: values['notaBimestre2'],
		  bimestre3: values['notaBimestre3'],
		  bimestre4: values['notaBimestre4']
		});

		this.registerForm.markAsDirty();
	}

}
