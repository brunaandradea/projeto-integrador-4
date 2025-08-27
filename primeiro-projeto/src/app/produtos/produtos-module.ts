import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Estoque } from './estoque/estoque';



@NgModule({
  declarations: [
    Estoque
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Estoque
  ]

})
export class ProdutosModule { }
