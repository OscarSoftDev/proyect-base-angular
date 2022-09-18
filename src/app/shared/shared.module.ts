import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TemplateComponent } from './template/template.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    //AppComponent,
    SidebarComponent,
    NavbarComponent,
    TemplateComponent,
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
  ],
  exports:[
    SidebarComponent,
    NavbarComponent,
    TemplateComponent,
  ],
  providers: [],
  //bootstrap: [AppComponent]
  bootstrap: [TemplateComponent]
})
export class SharedModule { }
