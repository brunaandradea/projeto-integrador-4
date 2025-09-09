import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Soma } from './contador/soma/soma';
import { Diretiva } from './estrutura/diretiva/diretiva';
import { Estoque } from './produtos/estoque/estoque';
import { ListaProdutos } from './produtos/lista-produtos/lista-produtos';
import { Material } from './teste-mat/material/material';
import { Tabela } from './dados/tabela/tabela';

const routes: Routes = [
 { path: 'contador', component: Soma},
 { path: 'alunos', component: Diretiva },
 { path: 'estoque', component: Estoque }, 
 { path: 'produtos', component: ListaProdutos },
 { path: 'teste-mat', component: Material },
 { path: 'tabela', component: Tabela },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
