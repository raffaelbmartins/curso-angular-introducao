import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-componente2',
  templateUrl: './meu-componente2.component.html',
  styleUrls: ['./meu-componente2.component.sass']
})
export class MeuComponente2Component implements OnInit {

  nome = 'Akira';

  aluno = {
    dados: {
      nome: 'Maria José'
    }
  }
  
  myList : number[] = [1,2,3,4,5];

  myValue = 1;

  isVisible : boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
