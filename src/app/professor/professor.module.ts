import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// module
import { SharedModule } from '../shared/shared.module';

// components
import { ProfessorListComponent } from './component/professor-list/professor-list.component';

@NgModule({
	declarations: [ProfessorListComponent],
	imports: [
		CommonModule,
		SharedModule
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfessorModule { }
