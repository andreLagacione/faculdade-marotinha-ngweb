import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// component
import { NotaCreateComponent } from './component/nota-create/nota-create.component';

// module
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
	  NotaCreateComponent
  ],
  imports: [
	  CommonModule,
	  SharedModule
  ],
  exports: [
	  NotaCreateComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NotaModule { }
