import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

interface GitHubResponse {
  incomplete_results: boolean,
  items: any[],
  total_count: number
}

@Injectable({
  providedIn: 'root'
})
export class ProjetcsService {
  
  projects: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) { }

  getProjects(searchFilter) {
    
    if (searchFilter) {

      const params = new HttpParams().set('q', searchFilter);
      const url = `https://api.github.com/search/repositories`;

      this.http.get<GitHubResponse>(url, {params})
        .subscribe(res => {
          this.projects.next(res.items);
      });
    }
  }
}
