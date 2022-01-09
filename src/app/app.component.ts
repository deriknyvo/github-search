import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  toggleControl = new FormControl(false);
  @HostBinding('class') className = '';

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'dark-theme';
      this.className = darkMode ? darkClassName : 'light-theme';
    });
}
}