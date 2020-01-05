import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-sidebar',
  templateUrl: './test-sidebar.component.html',
  styleUrls: ['./test-sidebar.component.css']
})
export class TestSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  private _opened: boolean = false;

  private _toggleSidebar() {
    this._opened = !this._opened;
  }
  title = 'sidebar';
}
