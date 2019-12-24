import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// module
import { SharedModule } from '../shared/shared.module';

// components
import { ProfessorListComponent } from './component/professor-list/professor-list.component';
import { ProfessorCreateComponent } from './component/professor-create/professor-create.component';

@NgModule({
	declarations: [
		ProfessorListComponent,
		ProfessorCreateComponent
	],
	imports: [
		CommonModule,
		SharedModule
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfessorModule { }
