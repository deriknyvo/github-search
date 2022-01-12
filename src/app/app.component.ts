import { Component, HostBinding } from '@angular/core';
import { Filter } from './interfaces';
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
  private filters: Filter[] = [];
  public results = [];

  constructor(private searchService: SearchService) { }

  toogleTheme(value: string) {
    this.className = value;
  }

  toggleFilters(filters: Filter[]) {
    this.filters = filters;
  }

  search(word: string) {
    this.word = word;

    this.searchService.users(this.word).subscribe(response => {
      console.log(response);
    });
  }
}
