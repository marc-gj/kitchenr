import { Component, OnInit, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MdSidenav;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.sidenav.toggle();
  }

}
