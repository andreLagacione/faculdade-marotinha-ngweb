import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// plugins
import { ToastrModule } from 'ngx-toastr';

// services
import { ToasterService } from './services/toaster.service';

@NgModule({
	imports: [
		CommonModule,
		ToastrModule.forRoot({
			maxOpened: 10,
			preventDuplicates: true,
			progressBar: true
		})
	],
	providers: [
		ToasterService
	]
})
export class ToasterModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: ToasterModule,
			providers: [
				ToasterService
			]
		};
	}
}
