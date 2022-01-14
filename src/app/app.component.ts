import { Component, HostBinding } from '@angular/core';
import { Repository, User } from './interfaces';
import { SearchService } from './services/search.service';

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

  search(word: string) {
    this.word = word;
    this.isLoading = true;
    this.isShowResult = false;

    this.searchService.all(this.word).subscribe(response => {

      const data = response.map(item => {
        const followers = this.searchService.getUserFollowers(item.followers_url);
      })

      this.results = response;
      this.isLoading = false;
      this.isShowResult = true;
    });
  }
}
