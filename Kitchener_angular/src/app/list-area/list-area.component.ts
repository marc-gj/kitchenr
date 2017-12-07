import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-list-area',
	templateUrl: './list-area.component.html',
	styleUrls: ['./list-area.component.css']
})
export class ListAreaComponent implements OnInit {

	private item = {
		type: 'recipe'
	};

	constructor() { }

	ngOnInit() {
	}

}
