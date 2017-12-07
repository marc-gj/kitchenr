import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MaterialModule } from './material.module';

@NgModule({
	declarations: [
		UsersComponent,
		UserProfileComponent,
		SignInComponent
	],
	imports: [CommonModule, MaterialModule]
})

export class UsersModule {}
