import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { ButtonsComponent } from './buttons.component';

// plugins
import { TooltipModule } from 'ngx-bootstrap';

@NgModule({
	declarations: [
		ButtonsComponent
	],
	exports: [
		ButtonsComponent
	],
	imports: [
		CommonModule,
		TooltipModule.forRoot()
	]
})
export class ButtonsModule { }
