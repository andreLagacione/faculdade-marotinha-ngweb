import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// modules
import { ButtonsModule } from '../buttons/buttons.module';
import { ToasterModule } from '../toaster/toaster.module';
import { PaginationModule } from '../pagination/pagination.module';
import { ConfirmModalModule } from '../confirm-modal/confirm-modal.module';
import { SidebarFilterModule } from '../sidebar-filter/sidebar-filter.module';
import { NgSelectModule } from '@ng-select/ng-select';

// pipes
import { ToIntPipe } from '../shared/pipes/to-int.pipe';
import { CpfCnpjPipe } from '../shared/pipes/cpf-cnpj.pipe';
import { FonePipe } from '../shared/pipes/telefone.pipe';

@NgModule({
	declarations: [
		ToIntPipe,
		CpfCnpjPipe,
		FonePipe,
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		ButtonsModule,
		ToasterModule.forRoot(),
		PaginationModule.forRoot(),
		ConfirmModalModule.forRoot(),
		SidebarFilterModule.forRoot(),
		NgSelectModule,
	],
	exports: [
		ToIntPipe,
		CpfCnpjPipe,
		FonePipe,
		FormsModule,
		ReactiveFormsModule,
		ButtonsModule,
		ToasterModule,
		PaginationModule,
		ConfirmModalModule,
		SidebarFilterModule,
		NgSelectModule,
	]
})
export class SharedModule { }
