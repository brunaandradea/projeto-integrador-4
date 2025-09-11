import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { DadosRoutingModule } from './dados-routing-module';
import { Tabela } from './tabela/tabela';


@NgModule({
  declarations: [
    Tabela
  ],
  imports: [
    CommonModule,
    DadosRoutingModule,
    MatTableModule,
    MatBottomSheetModule
  ]
})
export class DadosModule { }
