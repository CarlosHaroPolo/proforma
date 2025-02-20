import { Component, Input } from '@angular/core';
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



  @Input()
  componentes!: componenteforSearch


}
