import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { User, Repository } from '../interfaces';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultListComponent implements OnInit{

  @Input() listResults!: Array<any>;

  ngOnInit(): void {
    
  }

  ngOnChanges(change: any) {
    console.log(change);
  }
}
