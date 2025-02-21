import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { componenteforSearch } from '../../../proforma/interface/componente.interface';
import { medida } from '../../../proforma/interface/medida.interface';
import { marca } from '../../../proforma/interface/marca.interface';
import { product } from '../../../proforma/interface/product.interface';


@Component({
  selector: 'shared-search-product',
  standalone: false,
  templateUrl: './search-product.component.html',
})


export class SearchProductComponent {


 @Output()
 aSelectedProduct:EventEmitter<product> = new EventEmitter();
  @Input()
  componentes!: componenteforSearch

  recibirProductSelect(selectProduct:product){
  this.aSelectedProduct.emit(selectProduct)
  }

}
