import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListProductComponent } from './components/list-product/list-product.component';
import { SearchProductComponent } from './components/search-product/search-product.component';

@NgModule({
  declarations: [
    SearchProductComponent,
    ListProductComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchProductComponent,
    ListProductComponent
  ]
})
export class SharedModule { }
