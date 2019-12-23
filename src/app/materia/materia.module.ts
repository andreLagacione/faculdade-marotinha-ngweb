import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { SharedModule } from '../shared/shared.module';

// components
import { MateriaCreateComponent } from './component/materia-create/materia-create.component';
import { MateriaListComponent } from './component/materia-list/materia-list.component';

@NgModule({
	declarations: [
		MateriaCreateComponent,
		MateriaListComponent
	],
	imports: [
		CommonModule,
		SharedModule
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MateriaModule { }
