import { CadastrarFilmeComponent } from './componentes/views/filme/cadastrar-filme/cadastrar-filme.component';
import { ListarFilmeComponent } from './componentes/views/filme/listar-filme/listar-filme.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: ListarFilmeComponent,
  },
  {
    path: "filme/listar",
    component: ListarFilmeComponent,
  },
  {
    path: "filme/cadastrar",
    component: CadastrarFilmeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
