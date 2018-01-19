import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { UsersComponent } from './users.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    UsersComponent,
    UserProfileComponent,
    SignInComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, FlexLayoutModule]
})

export class UsersModule { }
