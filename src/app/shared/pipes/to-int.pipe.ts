import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'toInt' })
export class ToIntPipe implements PipeTransform {
	transform(value: string): number {
		value = value.toString();
		return parseInt(value, 10);
	}
}
