import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SidenavComponent } from './sidenav/sidenav.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	@ViewChild(SidenavComponent) sidenav: SidenavComponent;

	toggleSidenav() {
		this.sidenav.toggle();
	}

}
