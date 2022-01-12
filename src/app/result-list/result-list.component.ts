import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { User, Repository } from '../interfaces';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultListComponent implements OnInit {

  @Input() listResults: User[] | Repository[] | [] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.listResults);
  }

  openDialog() {
    
  }

}
