import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  public repos: any[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.searchService.getUserRepos(this.data.login).subscribe(response => {
      this.repos = response;
    })
  }

  getRepos(url: string) {

  }

}
