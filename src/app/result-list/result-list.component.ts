import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogRepositoryComponent } from '../dialog-repository/dialog-repository.component';
import { DialogUserComponent } from '../dialog-user/dialog-user.component';
import { User, Repository } from '../interfaces';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultListComponent {

  @Input() listResults!: Array<any>;

  constructor(private dialog: MatDialog) {}

  openDialog(item: any) {
    const dialogs: any = {
      'user': DialogUserComponent,
      'repository': DialogRepositoryComponent
    }

    this.dialog.open(dialogs[item.type], {
      maxHeight: '600px',
      maxWidth: '1152px',
      data: item,
      panelClass: 'custom-dialog-container',
      autoFocus: false
    });
  }
}
