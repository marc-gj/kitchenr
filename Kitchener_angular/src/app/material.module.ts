import { NgModule } from '@angular/core';

import {
	MatSidenavModule,
	MatToolbarModule,
	MatIconModule,
	MatAutocompleteModule,
	MatSelectModule,
	MatGridListModule,
	MatCardModule,
	MatInputModule,
	MatListModule,
	MatButtonModule
	} from '@angular/material';

@NgModule({
	imports: [
		MatSidenavModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatListModule,
		MatInputModule,
		MatCardModule,
		MatGridListModule,
		MatSelectModule,
		MatAutocompleteModule
	],
	exports: [
		MatSidenavModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatListModule,
		MatInputModule,
		MatCardModule,
		MatGridListModule,
		MatSelectModule,
		MatAutocompleteModule
	]
})

export class MaterialModule {}
