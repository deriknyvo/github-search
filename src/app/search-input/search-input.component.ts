import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchInputComponent {
  
  @ViewChild(MatInput) input!: MatInput;
  @Output() searchWord = new EventEmitter();
  @Output() filters = new EventEmitter();

  public word = new FormControl();

  ngAfterViewInit() {
    setTimeout(() => this.input.focus(), 0);
  }

  search() {
    this.searchWord.emit(this.word.value);
  }

  clear() {
    this.word.setValue('');
    this.searchWord.emit(this.word.value);
  }
}