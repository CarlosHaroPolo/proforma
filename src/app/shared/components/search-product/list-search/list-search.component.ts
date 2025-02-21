import { product } from './../../../../proforma/interface/product.interface';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchServiceService } from '../search.service.service';

@Component({
  selector: 'shared-searchProduct-list-search',
  standalone: false,
  templateUrl: './list-search.component.html',
  styles: ``
})
export class ListSearchComponent implements OnInit {


  public resultadoSearch: product[] = []

  @Output()
  public aSelectedProduct: EventEmitter<product>= new EventEmitter<product>;

  constructor(private servicio: SearchServiceService) { }

  ngOnInit(): void {
    this.servicio.dataStream.subscribe(products => {
      this.resultadoSearch = products;

    })
  }
  /// 
  registrarProductSearch(name: string, sale: string, cantidad: string): void {
    // 1. tengo que capturar toda la informacion que nesetio 
    this.aSelectedProduct.emit({
      name: name,
      sale_price: sale,
      cantidad: cantidad
    })
    // NO TE OLVIDES DE LIMPIAR TODO 
  }


}

