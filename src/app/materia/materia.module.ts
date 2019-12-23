import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MateriaCreateComponent } from './component/materia-create/materia-create.component';
import { MateriaListComponent } from './component/materia-list/materia-list.component';



@NgModule({
	declarations: [MateriaCreateComponent, MateriaListComponent],
	imports: [
		CommonModule
	]
})
export class MateriaModule { }
