import { product } from './../../../../proforma/interface/product.interface';
import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../search.service.service';

@Component({
  selector: 'shared-searchProduct-list-search',
  standalone: false,
  templateUrl: './list-search.component.html',
  styles: ``
})
export class ListSearchComponent  implements OnInit{
  

  public resultadoSearch :product[]=[]
  public productSelects : product[]=[]
 constructor(private servicio:SearchServiceService){}

  ngOnInit(): void {
    this.servicio.dataStream.subscribe(products=>{
        this.resultadoSearch=products;

    }) 
  }
 /// 
 registrarProductSearch(name:string,sale:string,cantidad:string){
  // 1. tengo que capturar toda la informacion que nesetio 
  console.log({name,sale,cantidad})
 }
 

}
