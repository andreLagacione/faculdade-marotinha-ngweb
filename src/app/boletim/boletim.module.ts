import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// module
import { SharedModule } from '../shared/shared.module';

// components
import { BoletimCreateComponent } from './component/boletim-create/boletim-create.component';
import { BoletimListComponent } from './component/boletim-list/boletim-list.component';

@NgModule({
  declarations: [
	BoletimCreateComponent,
	BoletimListComponent
  ],
  imports: [
	CommonModule,
	SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BoletimModule { }
