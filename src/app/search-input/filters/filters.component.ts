import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Filter } from 'src/app/interfaces';

const filtersMock: Filter[] = [
  {
    id: 'users',
    selected: false,
    label: 'Usuários'
  },
  {
    id: 'repositories',
    selected: false,
    label: 'Repositórios'
  }
];

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent implements OnInit {

  @Output() selectedFilters = new EventEmitter();
  public filters: Filter[] = filtersMock;

  constructor() { }

  ngOnInit(): void {
  }

  toggleFilter(filter: Filter) {
    filter.selected = !filter.selected;
    this.selectedFilters.emit(this.filters);
  }

}
