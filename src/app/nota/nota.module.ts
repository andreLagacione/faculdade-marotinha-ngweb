import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// component
import { CreateComponent } from './component/create/create.component';

// module
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
	  CreateComponent
  ],
  imports: [
	  CommonModule,
	  SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NotaModule { }
