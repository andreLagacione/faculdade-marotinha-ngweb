import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'fone' })
export class FonePipe implements PipeTransform {
	transform(value: string): string {
		value = value.toString();
		if (value.length < 11) {
			return value.replace(/(\d{2})(\d{4})(\d{4})/g, '(\$1) \$2\-\$3');
		} else {
			return value.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/g, '(\$1) \$2 \$3\-$4');
		}
	}
}
