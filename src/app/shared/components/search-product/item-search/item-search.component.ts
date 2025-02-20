import { Component, Input, OnInit } from '@angular/core';
import { componenteforSearch } from '../../../../proforma/interface/componente.interface';
import { medida } from '../../../../proforma/interface/medida.interface';
import { marca } from '../../../../proforma/interface/marca.interface';
import { product } from '../../../../proforma/interface/product.interface';
import { SearchServiceService } from '../search.service.service';

@Component({
  selector: 'shared-searchProduct-item-search',
  standalone: false,
  templateUrl: './item-search.component.html',
  styles: ``
})
export class ItemSearchComponent implements OnInit {
  constructor(private servicio:SearchServiceService){

  }
  ngOnInit(): void {
  
    this.medidas= this.componentes.medidas
    this.marcas=this.componentes.marcas
    this.productos=this.componentes.productos
  }
  @Input()
  componentes!: componenteforSearch

  public medidas:medida[]=  [];
  public marcas:marca[]= [];
  public productos:product[] =[];
  public resultadoSearch :product[]=[]



  
  searchProduct(marcaSelect:string,medidaSelect:string,searchInput:string):void{
    // aca te tienes que identificar de los dos indicadores
    let resultado = this.productos;
    if (marcaSelect !== "0") {
      resultado = resultado.filter((product) => product.Marca === marcaSelect);
    }
    if (medidaSelect !== "0") {
      resultado = resultado.filter((product) => product.medida === medidaSelect);
    }
    if (searchInput !== '') {
      resultado = resultado.filter(product => product.name.includes(searchInput));
    }
     this.resultadoSearch =resultado
/*      console.log(resultado)
 */     
   // aca te vas a encargar de enviar la lista del nuevo 
   this.servicio.updateProducts(resultado)

    }
   

    
}
