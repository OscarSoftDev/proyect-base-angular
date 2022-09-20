import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from '../app-routing.module';
import { PropertyComponent } from './property.component';


@NgModule({
  declarations: [
    //AppComponent,
    PropertyComponent
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule

  ],
  exports:[
    PropertyComponent
  ],
  providers: [],
  //bootstrap: [AppComponent]
  bootstrap: [PropertyComponent]
})
export class PropertyModule { }
