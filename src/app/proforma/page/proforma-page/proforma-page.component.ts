import { Component } from '@angular/core';
import { ProformaService } from '../../servers/proforma.service';
import { product } from '../../interface/product.interface';

@Component({
  selector: 'app-proforma-page',
  standalone: false,
  templateUrl: './proforma-page.component.html',

})
export class ProformaPageComponent {
  constructor(private serve: ProformaService) {

  }

  public products: product[] = []

    getProducts(): void {
    this.serve.getProducts().subscribe(
      products => {
     //   this.products = products
        console.log(products)
      }
    )
    console.log('hola')

  }

}
