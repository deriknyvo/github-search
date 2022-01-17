import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-repository',
  templateUrl: './dialog-repository.component.html',
  styleUrls: ['./dialog-repository.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogRepositoryComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
}
