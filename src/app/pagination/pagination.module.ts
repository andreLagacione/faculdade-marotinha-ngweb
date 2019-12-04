import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { PaginationComponent } from './pagination.component';

// services
import { PaginationService } from './services/pagination.service';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		PaginationComponent
	],
	exports: [
		PaginationComponent
	],
	providers: [
		PaginationService
	]
})
export class PaginationModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: PaginationModule,
			providers: [
				PaginationService
			]
		};
	}
}
