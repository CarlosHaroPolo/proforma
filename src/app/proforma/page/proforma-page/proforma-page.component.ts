import { product } from './../../interface/product.interface';
import { Component, OnInit } from '@angular/core';
import { ProformaService } from '../../servers/proforma.service';
import { marca } from '../../interface/marca.interface';
import { medida } from '../../interface/medida.interface';

@Component({
  selector: 'app-proforma-page',
  standalone: false,
  templateUrl: './proforma-page.component.html',

})
export class ProformaPageComponent  implements OnInit{
  constructor(private serve: ProformaService) {

  }
  ngOnInit(): void {
   // te encargas de inicializar los get
   this.getProducts();
   this.getMedida();
   this.getMarcas();

  }

  public products: product[] = []
  public marcas: marca[] = []
  public medidas: medida[] = []

  getProducts(): void {
    this.serve.getProducts().subscribe(
      products => {
        this.products = products
      }
    )
  }

  getMarcas(): void {
    this.serve.getMarcas().subscribe(
      marcas => {
          this.marcas=marcas
      }
    )
  }
  getMedida(): void {
    this.serve.getMedida().subscribe(
      medidas => {
          this.medidas=medidas
      }
    )
  }

  searchProduct(marcaSelect:string,medidaSelect:string,searchInput:string):void{
   // aca te tienes que identificar de los dos indicadores
   let resultado = this.products;
   if (marcaSelect !== "0") {
     resultado = resultado.filter((product) => product.Marca === marcaSelect);
   }
   if (medidaSelect !== "0") {
     resultado = resultado.filter((product) => product.medida === medidaSelect);
   }
   if (searchInput !== '') {
     resultado = resultado.filter(product => product.name.includes(searchInput));
   }
   console.log(resultado)
  }


}
