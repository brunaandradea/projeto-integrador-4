import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  standalone: false,
  templateUrl: './diretiva.html',
  styleUrl: './diretiva.css'
})
export class Diretiva {
  alunos = [
    { id: 1, nome: 'Bruna', status: true },
    { id: 2, nome: 'Giovana', status: false},
    { id: 3, nome: 'Livia', status: true},
    { id: 4, nome: 'Ana', status: false}
  ];

  exibirLista = true;

  tamanhoFonte = 16;

  alternarExibicao() {
    this.exibirLista = !this.exibirLista;
  }

  aumentarFonte() {
    this.tamanhoFonte += 2;
  }

  diminuirFonte() {
    this.tamanhoFonte -= 2;
  }
}
