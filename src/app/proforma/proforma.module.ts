import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProformaPageComponent } from './page/proforma-page/proforma-page.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
   ProformaPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  exports:[
    ProformaPageComponent
  ]
})
export class ProformaModule { }
