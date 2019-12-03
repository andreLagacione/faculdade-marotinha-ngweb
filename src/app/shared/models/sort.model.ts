// models
import { BaseResourceModel } from './base-resource.model';

export class SortModel extends BaseResourceModel {
	constructor(
		public unsorted?: boolean,
		public sorted?: boolean,
	) {
		super();
	}
}
