import { Component, HostBinding } from '@angular/core';
import { concat, concatMap, firstValueFrom, map, mergeAll, mergeMap, of, switchMap, tap, toArray } from 'rxjs';
import { Repository, User } from './interfaces';
import { SearchService } from './services/search.service';
import { LanguageColorsService } from './services/language-colors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  @HostBinding('class') className = '';

  public isLoading: boolean = false;
  public isShowResult: boolean = false;
  private word: string = '';
  public results: Array<User | Repository> = [];
  private storageResults: Array<User | Repository> = [];

  constructor(
    private searchService: SearchService,
    private langService: LanguageColorsService
  ) { }

  toogleTheme(value: string) {
    this.className = value;
  }

  getUserLanguages(repos: any[]) {
    const valuesFiltered = repos.filter(repo => repo.language);
    const valuesMapped = valuesFiltered.map(repo => repo.language);
    const uniques = valuesMapped.filter((value: any, pos: any, self: any) => self.indexOf(value) == pos);
    const languages = uniques.map((language: any) => this.langService.getLanguageStyle(language));

    return languages;
  }

  search(word: string) {
    this.word = word;
    this.isLoading = true;
    this.isShowResult = false;

    this.users().then(users => {
      this.repositories().then(repositories => {
        const arrConcat = [].concat(...users, ...repositories);

        this.results = this.searchService.orderItemsByName(arrConcat);
        this.storageResults = this.results;
        this.isLoading = false;
        this.isShowResult = true;
      });
    });
  }

  async users() {
    const users = await firstValueFrom(this.searchService.usersTemp(this.word));
    const usersMapped = [];

    for (let index = 0; index < users.items.length; index++) {
      const element = users.items[index];
      const userMapped = await firstValueFrom(this.searchService.getUser(element.login));
      const userRepos = await firstValueFrom(this.searchService.getUserRepos(element.login));
      const userLanguages = this.getUserLanguages(userRepos);

      userMapped.languages = userLanguages;

      userMapped.repos = userRepos.map((repo: any) => {
        return {
          full_name: repo.full_name,
          description: repo.description,
          html_url: repo.html_url,
          stargazers_count: repo.stargazers_count,
          language: this.langService.getLanguageStyle(repo.language),
          forks_count: repo.forks_count,
        }
      })

      usersMapped.push(userMapped);
    }

    return usersMapped;
  }

  async repositories() {
    const repositories = await firstValueFrom(this.searchService.repositoriesTemp(this.word));

    for (let index = 0; index < repositories.length; index++) {
      const element = repositories[index];
      const languages = await firstValueFrom(this.searchService.getRepoLanguages(element.languages_url));
      const style = Object.keys(languages).map(key => this.langService.getLanguageStyle(key));

      element.languages = style;
    }

    return repositories;
  }

  filter(values: any[]) {
    this.isLoading = true;
    this.isShowResult = false;

    const isAllTrue = values.every(value => value.selected);
    const isAllFalse = values.every(value => !value.selected);

    if (isAllTrue || isAllFalse) {
      this.results = this.storageResults;
    } else {
      const filterSelected = values.filter(value => value.selected);
      this.results = this.storageResults.filter(item => item.type == filterSelected[0].id);
    }

    this.isLoading = false;
    this.isShowResult = true;
  }
}
