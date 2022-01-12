import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Repository, RepositoryResponse, User, UserResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private httpService: HttpClient
  ) { }

  users(term: string): Observable<User[]> {
    const url = `https://api.github.com/search/users?q=${term}`;

    return this.httpService.get<UserResponse>(url).pipe(
      map(response => response.items)
    );
  }

  repositories(term: string): Observable<Repository[]> {
    const url = `https://api.github.com/search/repositories?q=${term}`;

    return this.httpService.get<RepositoryResponse>(url).pipe(
      map(response => response.items)
    );
  }
}
