import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

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

  users(term: string, page: number): Observable<any> {
    const url = `https://api.github.com/search/users?q=${term}&page=${page}&per_page=3`;

    return this.httpService.get(url, this.options);
  }

  repositories(term: string, page: number): Observable<any> {
    const url = `https://api.github.com/search/repositories?q=${term}&page=${page}&per_page=3`;

    return this.httpService.get(url, this.options).pipe(
      map((response: any) => response.items.map((item: any) => {
        return {
          type: 'repository',
          full_name: item.full_name,
          description: item.description,
          stars: item.stargazers_count,
          languages_url: item.languages_url,
          license: item.license,
          owner: item.owner,
          watchers_count: item.watchers_count,
          html_url: item.html_url,
          archived: false,
          favorite: false
        }
      }))
    );
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
          bio: user.bio,
          archived: false,
          favorite: false
        }
      })
    );
  }

  getUserRepos(user: string): Observable<any> {
    const url = `https://api.github.com/users/${user}/repos`;

    return this.httpService.get(url, this.options);
  }

  getRepoLanguages(url: string): Observable<any> {
    return this.httpService.get(url, this.options);
  }

  orderItemsByName(items: Array<any>) {
    return items.sort((a, b) => {
      if ((a.login || a.full_name) < (b.full_name || b.login)) {
        return -1
      }

      if ((a.login || a.full_name) > (b.full_name || b.login)) {
        return 1
      }

      return 0;
    });
  }
}
