import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
	selector: 'app-buttons',
	templateUrl: './buttons.component.html',
	styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
	@Output() public eventClick: EventEmitter<any> = new EventEmitter();

	@Input() public icon: string;
	@Input() public text: string;
	@Input() public type: string;
	@Input() public classes: string;
	@Input() public disabled: boolean;
	@Input() public textTooltip: string;
	@Input() public linkImage: string;
	@Input() public tooltipClass: string;
	@Input() public position: string;

	public click() {
		this.eventClick.emit();
	}

}
