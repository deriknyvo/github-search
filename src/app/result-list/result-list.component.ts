import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogRepositoryComponent } from '../dialog-repository/dialog-repository.component';
import { DialogUserComponent } from '../dialog-user/dialog-user.component';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultListComponent {

  @Input() listResults!: Array<any>
  @Output() favoriteItem = new EventEmitter();
  @Output() unfavoriteItem = new EventEmitter();
  @Output() archiveItem = new EventEmitter();
  @Output() unarchiveItem = new EventEmitter();

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

  favorite(event: any, item: any) {
    event.stopPropagation();
    this.favoriteItem.emit(item);
  }

  unfavorite(event: any, item: any) {
    event.stopPropagation();
    this.unfavoriteItem.emit(item);
  }

  archive(event: any, item: any) {
    event.stopPropagation();
    this.archiveItem.emit(item);
  }

  unarchive(event: any, item: any) {
    event.stopPropagation();
    this.unarchiveItem.emit(item);
  }
}
