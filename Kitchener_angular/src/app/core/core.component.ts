import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
	selector: 'app-core',
	templateUrl: './core.component.html',
	styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {

	@ViewChild(SidenavComponent) sidenav: SidenavComponent;

	constructor() { }

	ngOnInit() {
	}

	toggleSidenav() {
		this.sidenav.toggle();
	}

}
