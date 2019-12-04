import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { ListComponent } from './aluno/component/list/list.component';

const routes: Routes = [{
		path: '',
		redirectTo: 'alunos',
		pathMatch: 'full'
	}, {
		path: 'alunos',
		component: ListComponent
	},


	{
		path: '**',
		component: ListComponent
	}];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
