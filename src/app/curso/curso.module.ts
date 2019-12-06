import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { SharedModule } from '../shared/shared.module';

// components
import { CursoListComponent } from './component/curso-list/curso-list.component';

@NgModule({
	declarations: [
		CursoListComponent,
	],
	imports: [
		CommonModule,
		SharedModule
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CursoModule { }
