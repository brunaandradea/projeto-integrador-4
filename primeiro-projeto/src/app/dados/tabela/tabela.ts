import { Component } from '@angular/core';

export interface Produto {
  nome: string;
  quantidade: number;
}

@Component({
  selector: 'app-tabela',
  standalone: false,
  templateUrl: './tabela.html',
  styleUrl: './tabela.css'
})
export class Tabela {
  displayedColumns: string[] = ['nome', 'quantidade'];
  

  dataSource: Produto[] = [
    {nome: 'Coca-Cola', quantidade: 10},
    {nome: 'Pepsi', quantidade: 5},
    {nome: 'Fanta', quantidade: 8}
  ]

}
