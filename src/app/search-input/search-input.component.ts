import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Filter } from '../interfaces';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchInputComponent implements OnInit {
  
  @Output() searchWord = new EventEmitter();
  @Output() filtersToSearch = new EventEmitter();
  public word = new FormControl();

  constructor() { }

  ngOnInit(): void { }

  search() {
    this.searchWord.emit(this.word.value);
  }

  filtersControl(filters: Filter[]) {
    this.filtersToSearch.emit(filters);
  }

}
