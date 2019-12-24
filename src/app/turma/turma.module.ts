import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// module
import { SharedModule } from '../shared/shared.module';

// components
import { TurmaCreateComponent } from './component/turma-create/turma-create.component';
import { TurmaListComponent } from './component/turma-list/turma-list.component';

@NgModule({
	declarations: [
		TurmaCreateComponent,
		TurmaListComponent
	],
	imports: [
		CommonModule,
		SharedModule
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TurmaModule { }
