import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContadorModule } from './contador/contador-module';

const routes: Routes = [
  {
    path: "",
    component: ContadorModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
