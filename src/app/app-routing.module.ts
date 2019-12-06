import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { ListComponent } from './aluno/component/list/list.component';
import { CreateComponent } from './aluno/component/create/create.component';

const routes: Routes = [{
		path: '',
		redirectTo: 'alunos',
		pathMatch: 'full'
	}, {
		path: 'alunos',
		component: ListComponent
	}, {
		path: 'alunos/cadastrar',
		component: CreateComponent
	}, {
		path: 'alunos/editar/:id',
		component: CreateComponent
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
