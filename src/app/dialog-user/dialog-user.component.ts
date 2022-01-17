import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogUserComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
}
