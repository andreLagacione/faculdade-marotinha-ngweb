import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';

// services
import { ControlElementsService } from './control-elements.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
	constructor(
		private controlElementsService: ControlElementsService
	) { }

	public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(request)
			.pipe(
				tap(
					() => this.controlElementsService.loaderControl(true)
				),
				finalize(
					() => this.controlElementsService.loaderControl(false)
				)
			);
	}
}
