import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PropertyComponent } from './property/property.component';
import { TemplateComponent } from './shared/template/template.component';

const routes: Routes = [
  /*{ path: 'ingreso', component: IngresoComponent},
  { path: 'informacion/:cliente', component: InformacionBasicaComponent},*/
  { path: 'property', component:PropertyComponent},
  { path: '**', pathMatch: 'full', component :NopagefoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
