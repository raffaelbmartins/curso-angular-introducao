import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AlunosService } from 'src/app/services/alunos.service';

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

  alunos = [];

  searchFilter = '';
  projects = null;
  loading = false;

  constructor(
    private alunosService: AlunosService,
    private http: HttpClient
  ) {
    this.alunos = this.alunosService.getAlunos();
  }

  ngOnInit() {
  }

  getProjects() {
    
    this.loading = true;
    this.projects = null;

    if (this.searchFilter) {
      const url = `https://api.github.com/search/repositories?q=${this.searchFilter}`;
      this.http.get(url)
        .subscribe(res => {
          this.projects = res['items'];
        },err => {},() => this.loading = false);
    }
  }

}
