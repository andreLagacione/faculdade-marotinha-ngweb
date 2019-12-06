import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { registerLocaleData, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localePt from '@angular/common/locales/pt';

// modules
import { AlunoModule } from './aluno/aluno.module';
import { CursoModule } from './curso/curso.module';
import { MateriaModule } from './materia/materia.module';

// routes
import { AppRoutingModule } from './app-routing.module';

// services
import { ControlElementsService } from './shared/services/control-elements.service';
import { ErrorInterceptor } from './shared/services/http-request-interceptor';

// components
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TopComponent } from './layout/top/top.component';

registerLocaleData(localePt);

@NgModule({
	declarations: [
		AppComponent,
		SidebarComponent,
		TopComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		AlunoModule,
		CursoModule,
		MateriaModule
	],
	providers: [
		Title,
		ControlElementsService,
		{
			provide: localePt,
			useValue: 'pt-BR'
		},
		{
			provide: LocationStrategy,
			useClass: HashLocationStrategy
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ErrorInterceptor,
			multi: true
		}
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	bootstrap: [AppComponent]
})
export class AppModule { }
