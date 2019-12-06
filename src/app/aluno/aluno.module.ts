import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { SharedModule } from '../shared/shared.module';

// components
import { ListComponent } from './component/list/list.component';
import { CreateComponent } from './component/create/create.component';

@NgModule({
	declarations: [
		ListComponent,
		CreateComponent
	],
	imports: [
		CommonModule,
		SharedModule
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AlunoModule { }
