import { Component, HostBinding } from '@angular/core';
import { concatMap, firstValueFrom, map, mergeAll, mergeMap, of, switchMap, tap, toArray } from 'rxjs';
import { Repository, User } from './interfaces';
import { SearchService } from './services/search.service';
import { languageColors } from './languages';

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

  constructor(private searchService: SearchService) { }

  toogleTheme(value: string) {
    this.className = value;
  }

  getUserLanguages(repos: any[]) {
    const valuesFiltered = repos.filter(repo => repo.language);
    const valuesMapped = valuesFiltered.map(repo => repo.language);
    const uniques = valuesMapped.filter((value: any, pos: any, self: any) => self.indexOf(value) == pos);

    const languages = uniques.map((language: any) => {
      let value = language.replace(' ', '');
      value = value.toLowerCase();
      const metadata = languageColors[value];

      return {
        label: language,
        styles: metadata
      }
    })

    return languages;
  }

  async search(word: string) {
    this.word = word;
    this.isLoading = true;
    this.isShowResult = false;

    const users = await firstValueFrom(this.searchService.usersTest(this.word));
    const usersMapped = [];

    for (let index = 0; index < users.items.length; index++) {
      const element = users.items[index];
      const userMapped = await firstValueFrom(this.searchService.getUser(element.login));
      const userRepos = await firstValueFrom(this.searchService.getUserRepos(element.login));
      const userLanguages = this.getUserLanguages(userRepos);
      userMapped.languages = userLanguages;

      usersMapped.push(userMapped);
    }

    this.results = usersMapped;
    this.isLoading = false;
    this.isShowResult = true;
  }

  // this.searchService.usersTest(this.word).pipe(
  //   switchMap(response => response.items),
  //   concatMap((item: any) => {
  //     return this.searchService.getUser(item.login)
  //   }),
  // ).subscribe(response => console.log(response));

  // this.searchService.usersTest(this.word).subscribe(response => {
  //   const items = response.items.map((item: any) => {

  //     this.searchService.getUserFollowers(item.followers_url).subscribe(response => {
  //       return {
  //         type: 'user',
  //         avatar_url: item.avatar_url,
  //         full_name: item.login,
  //         followers: response.length,
  //         repos_url: item.repos_url
  //       }
  //     })
  //   });

  //   console.log(items);
  // });

  // this.searchService.usersTest(this.word)
  // .pipe(
  //   map(response => response.items.map((item: any) => {
  //     return {
  //       type: 'user',
  //       avatar_url: item.avatar_url,
  //       full_name: item.login,
  //       followers_url: item.followers_url,
  //       repos_url: item.repos_url,
  //     }
  //   }))
  // ).subscribe(response => {
  //   console.log(response);
  // });

  // this.isLoading = true;
  // this.isShowResult = false;

  // this.searchService.all(this.word).subscribe(response => {

  //   const data = response.map(item => {
  //     const followers = this.searchService.getUserFollowers(item.followers_url);
  //   })

  //   this.results = response;
  //   this.isLoading = false;
  //   this.isShowResult = true;
  // });
}
