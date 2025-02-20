import { product } from './../../interface/product.interface';
import { Component, OnInit } from '@angular/core';
import { ProformaService } from '../../servers/proforma.service';
import { marca } from '../../interface/marca.interface';
import { medida } from '../../interface/medida.interface';
import { componenteforSearch } from '../../interface/componente.interface';

@Component({  selector: 'app-proforma-page',
  standalone: false,
  templateUrl: './proforma-page.component.html',

})
export class ProformaPageComponent  implements OnInit{

  constructor(private serve: ProformaService) {

  }
  ngOnInit(): void {
   // te encargas de inicializar los get
   this.getTodo()
  }

  public products: product[] = []
  public marcas: marca[] = []
  public medidas: medida[] = []
  public componente !:componenteforSearch;

  getProducts(): product[] {
    this.serve.getProducts().subscribe(
      products => {
        this.products = products
      }
    )
    return this.products
  }

  getMarcas(): marca[] {
    this.serve.getMarcas().subscribe(
      marcas => {
          this.marcas=marcas
      }
    )
   return this.marcas
  }
  getMedida(): medida[] {
    this.serve.getMedida().subscribe(
      medidas => {
          this.medidas=medidas
      }
    )
    return  this.medidas
  }

  getTodo():void{
    this.componente ={
      medidas:this.getMedida(),
      marcas:this.getMarcas(),
      productos:this.getProducts()
    }
  }




}
