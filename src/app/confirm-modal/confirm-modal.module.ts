import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { ButtonsModule } from '../buttons/buttons.module';

// plugins
import { ModalModule } from 'ngx-bootstrap/modal';

// components
import { ConfirmModalComponent } from './confirm-modal.component';

// services
import { ConfirmModalService } from './services/confirm-modal.service';

@NgModule({
	imports: [
		CommonModule,
		ButtonsModule,
		ModalModule.forRoot()
	],
	declarations: [
		ConfirmModalComponent
	],
	exports: [
		ConfirmModalComponent
	],
	providers: [
		ConfirmModalService
	]
})
export class ConfirmModalModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: ConfirmModalModule,
			providers: [
				ConfirmModalService
			]
		};
	}
}
