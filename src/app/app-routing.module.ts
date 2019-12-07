import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { ListComponent } from './aluno/component/list/list.component';
import { CreateComponent } from './aluno/component/create/create.component';
import { CursoListComponent } from './curso/component/curso-list/curso-list.component';
import { CursoCreateComponent } from './curso/component/curso-create/curso-create.component';

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
	}, {
		path: 'cursos',
		component: CursoListComponent
	}, {
		path: 'cursos/cadastrar',
		component: CursoCreateComponent
	}, {
		path: 'cursos/editar/:id',
		component: CursoCreateComponent
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
