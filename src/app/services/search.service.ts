import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatestWith, map, Observable } from 'rxjs';
import { Repository, RepositoryRequest, User, UserRequest } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private options;

  constructor(
    private httpService: HttpClient
  ) {
    this.options = {
      headers: new HttpHeaders({
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': 'token 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'
      })
    }
  }

  private users(term: string): Observable<User[]> {
    const url = `https://api.github.com/search/users?q=${term}&per_page=50`;

    return this.httpService.get<UserRequest>(url, this.options).pipe(
      map(response => response.items.map(item => {
        return {
          type: 'user',
          avatar_url: item.avatar_url,
          full_name: item.login,
          followers_url: item.followers_url,
          repos_url: item.repos_url,
        }
      })),
    );
  }

  private repositories(term: string): Observable<Repository[]> {
    const url = `https://api.github.com/search/repositories?q=${term}&per_page=50`;

    return this.httpService.get<RepositoryRequest>(url, this.options).pipe(
      map(response => response.items.map(item => {
        return {
          type: 'repository',
          full_name: item.full_name,
          stars: item.stargazers_count,
          language: item.language,
          languages_url: item.languages_url
        }
      }))
    );
  }

  private orderItemsByName(items: Array<User | Repository>) {
    return items.sort((a, b) => {
      if (a.full_name < b.full_name) {
        return -1
      }

      if (a.full_name > b.full_name) {
        return 1
      }

      return 0;
    });
  }

  all(term: string): Observable<Array<User | Repository>> {
    const users$ = this.users(term);
    const repositories$ = this.repositories(term);

    return users$.pipe(
      combineLatestWith(repositories$),
      map(([users, repositories]) => this.orderItemsByName([...users, ...repositories]))
    );
  }

  usersTest(term: string): Observable<any> {
    const url = `https://api.github.com/search/users?q=${term}&per_page=3`;

    return this.httpService.get(url, this.options);
  }

  getUser(login: string): Observable<any> {
    const url = `https://api.github.com/users/${login}`;

    return this.httpService.get(url, this.options).pipe(
      map((user: any) => {
        return {
          type: 'user',
          avatar_url: user.avatar_url,
          name: user.name,
          login: user.login,
          followers: user.followers,
          following: user.following,
          repos_url: user.repos_url,
          bio: user.bio
        }
      })
    );
  }

  getUserRepos(user: string): Observable<any> {
    const url = `https://api.github.com/users/${user}/repos`;

    return this.httpService.get(url, this.options);
  }
}
