import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor() { }

  getAlunos() {
    return [
      {nome: 'Maria Luiza'},
      {nome: 'Alisson Andrade'},
      {nome: 'Raffael Barbosa'}
    ]
  }

}
