import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroSeguroComponent } from './componentes/cadastro-seguro/cadastro-seguro.component';
import { EditarSegurosComponent } from './componentes/editar-seguros/editar-seguros.component';
import { ListarSegurosComponent } from './componentes/listar-seguros/listar-seguros.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cadastrar' },
  { path: 'cadastrar', component: CadastroSeguroComponent },
  { path: 'editar', component: EditarSegurosComponent },
  { path: 'listar', component: ListarSegurosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
