import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// modules
import { ButtonsModule } from '../buttons/buttons.module';
import { ToasterModule } from '../toaster/toaster.module';
import { PaginationModule } from '../pagination/pagination.module';
import { ConfirmModalModule } from '../confirm-modal/confirm-modal.module';
import { SidebarFilterModule } from '../sidebar-filter/sidebar-filter.module';

// pipes
import { ToIntPipe } from '../shared/pipes/to-int.pipe';
import { CpfCnpjPipe } from '../shared/pipes/cpf-cnpj.pipe';
import { FonePipe } from '../shared/pipes/telefone.pipe';

// components
import { ListComponent } from './component/list/list.component';

@NgModule({
	declarations: [
		ListComponent,
		ToIntPipe,
		CpfCnpjPipe,
		FonePipe
	],
	imports: [
		CommonModule,
		ButtonsModule,
		FormsModule,
		ReactiveFormsModule,
		ToasterModule.forRoot(),
		PaginationModule.forRoot(),
		ConfirmModalModule.forRoot(),
		SidebarFilterModule.forRoot(),
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AlunoModule { }
