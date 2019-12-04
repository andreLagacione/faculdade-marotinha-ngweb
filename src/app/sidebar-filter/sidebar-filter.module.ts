import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// modulos
import { ButtonsModule } from '../buttons/buttons.module';

// components
import { SidebarFilterComponent } from './sidebar-filter.component';

// services
import { ToasterService } from 'src/app/toaster/services/toaster.service';
import { SidebarFilterService } from './services/sidebar-filter.service';

@NgModule({
	imports: [
		CommonModule,
		ButtonsModule,
		FormsModule,
		ReactiveFormsModule,
	],
	declarations: [
		SidebarFilterComponent
	],
	providers: [
		ToasterService,
		SidebarFilterService
	],
	exports: [
		SidebarFilterComponent
	]
})
export class SidebarFilterModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: SidebarFilterModule,
			providers: [
				SidebarFilterService
			]
		};
	}
}
