import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../auth/auth.actions';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  private signInForm: FormGroup;
  public state: Observable<any>;

  constructor(private store: Store<fromApp.AppState>) {
    this.state = store.select('auth');
   }
  ngOnInit() {
    this.signInForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    const email: string = this.signInForm.value.email;
    const password: string = this.signInForm.value.password;
    this.store.dispatch(new fromAuth.TrySignIn({email: email, password: password}));
  }
}
