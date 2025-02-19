import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListProductComponent } from './components/list-product/list-product.component';
import { SearchProductComponent } from './components/search-product/search-product.component';
import { ItemSearchComponent } from './components/search-product/item-search/item-search.component';
import { ListSearchComponent } from './components/search-product/list-search/list-search.component';

@NgModule({
  declarations: [
    SearchProductComponent,
    ListProductComponent,
    ItemSearchComponent,
    ListSearchComponent
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
