import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Soma } from './contador/soma/soma';
import { Diretiva } from './estrutura/diretiva/diretiva';
import { Estoque } from './produtos/estoque/estoque';

const routes: Routes = [
 { path: 'contador', component: Soma},
 { path: 'alunos', component: Diretiva },
 { path: 'estoque', component: Estoque }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
