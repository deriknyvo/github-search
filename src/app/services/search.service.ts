import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

interface UserResponse {
  items: User[]
}

interface User {
  avatar_url: string,
  followers_url: string,
  repos_url: string
}

interface RepositoryResponse {
  items: Repository[]
}

interface Repository {
  full_name: string,
  language: string,
  languages_url: string,
}

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
