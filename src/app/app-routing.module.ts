import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProformaPageComponent } from './proforma/page/proforma-page/proforma-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProformaPageComponent, 
  },
 {
    path:'**',
    redirectTo:''
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
