import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DishesComponent } from './dishes.component';

@NgModule({
  declarations: [
    DishesComponent
  ],
  imports: [CommonModule, MaterialModule, FlexLayoutModule]
})

export class DishesModule { }
