import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { SharedModule } from '../shared/shared.module';

// components
import { CursoListComponent } from './component/curso-list/curso-list.component';
import { CursoCreateComponent } from './component/curso-create/curso-create.component';

@NgModule({
	declarations: [
		CursoListComponent,
		CursoCreateComponent,
	],
	imports: [
		CommonModule,
		SharedModule
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CursoModule { }
