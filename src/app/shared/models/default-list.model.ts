// models
import { PageableModel } from './pageable.model';
import { SortModel } from './sort.model';
import { BaseResourceModel } from './base-resource.model';

export class DefaultListModel<T> extends BaseResourceModel {
	constructor(
		public content?: T[],
		public first?: boolean,
		public last?: boolean,
		public number?: number,
		public numberOfElements?: number,
		public pageable?: PageableModel,
		public size?: number,
		public sort?: SortModel,
		public totalElements?: number,
		public totalPages?: number
	) {
		super();
	}
}
