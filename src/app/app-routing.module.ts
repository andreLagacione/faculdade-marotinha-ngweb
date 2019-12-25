import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { ListComponent } from './aluno/component/list/list.component';
import { CreateComponent } from './aluno/component/create/create.component';
import { CursoListComponent } from './curso/component/curso-list/curso-list.component';
import { CursoCreateComponent } from './curso/component/curso-create/curso-create.component';
import { ProfessorListComponent } from './professor/component/professor-list/professor-list.component';
import { ProfessorCreateComponent } from './professor/component/professor-create/professor-create.component';
import { MateriaListComponent } from './materia/component/materia-list/materia-list.component';
import { MateriaCreateComponent } from './materia/component/materia-create/materia-create.component';
import { TurmaListComponent } from './turma/component/turma-list/turma-list.component';
import { TurmaCreateComponent } from './turma/component/turma-create/turma-create.component';
import { BoletimListComponent } from './boletim/component/boletim-list/boletim-list.component';
import { BoletimCreateComponent } from './boletim/component/boletim-create/boletim-create.component';

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
	}, {
		path: 'professores',
		component: ProfessorListComponent
	}, {
		path: 'professores/cadastrar',
		component: ProfessorCreateComponent
	}, {
		path: 'professores/editar/:id',
		component: ProfessorCreateComponent
	}, {
		path: 'materias',
		component: MateriaListComponent
	}, {
		path: 'materias/cadastrar',
		component: MateriaCreateComponent
	}, {
		path: 'materias/editar/:id',
		component: MateriaCreateComponent
	}, {
		path: 'turmas',
		component: TurmaListComponent
	}, {
		path: 'turmas/cadastrar',
		component: TurmaCreateComponent
	}, {
		path: 'turmas/editar/:id',
		component: TurmaCreateComponent
	}, {
		path: 'boletins',
		component: BoletimListComponent
	}, {
		path: 'boletins/cadastrar',
		component: BoletimCreateComponent
	}, {
		path: 'boletins/editar/:id',
		component: BoletimCreateComponent
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
