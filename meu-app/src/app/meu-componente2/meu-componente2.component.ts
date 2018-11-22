import { ProjetcsService } from './../services/projetcs.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlunosService } from 'src/app/services/alunos.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-meu-componente2',
  templateUrl: './meu-componente2.component.html',
  styleUrls: ['./meu-componente2.component.sass']
})
export class MeuComponente2Component implements OnInit, OnDestroy {
  
  searchFilter = '';
  projects = [];
  isAlive: boolean = true;

  constructor(private projectsService: ProjetcsService) { }

  ngOnInit() {
    this.projectsService.projects
    .pipe(
      takeWhile(() => this.isAlive)
    )
    .subscribe(projects => {
      this.projects = projects;
    });
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  getProjects() {
    this.projectsService.getProjects(this.searchFilter);
  }

}
