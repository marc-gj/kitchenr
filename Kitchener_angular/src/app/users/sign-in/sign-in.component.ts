import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

	signInForm: FormGroup;

	constructor() { }

	ngOnInit() {
		this.signInForm = new FormGroup({
			'email': new FormControl(null, [Validators.required, Validators.email] ),
			'username': new FormControl(null, Validators.required),
			'password': new FormControl(null, [Validators.required])
		});
	}

	onSubmit() {
		console.log(this.signInForm.value);
	}

}
