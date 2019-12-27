import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';

// model
import { NotaModel } from '../models/nota.model';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class NotaService extends BaseResourceService<NotaModel> {

	constructor(public injector: Injector) {
		super('nota', injector);
	}

	public delete(id: number): Observable<any> {
		return this.http
			.delete(`${this.url}/nota/${id}`, super.httpJsonAuth())
			.pipe(
				map(this.extractData),
				catchError(this.mapsError)
			);
	}

	public getNota(id: number): Observable<any> {
		return this.http
			.get(`${this.url}/nota/${id}`, this.httpJsonAuth())
			.pipe(
				map(this.extractData),
				catchError(this.mapsError)
			);
	}
}
