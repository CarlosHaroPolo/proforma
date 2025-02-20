import { Injectable } from '@angular/core';
import { product } from '../../../proforma/interface/product.interface';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  constructor() { }
 
  private dataSource = new BehaviorSubject<product[]>([]);

  // Observable stream
  dataStream = this.dataSource.asObservable();

  public productos!:product[]
// Método para actualizar los productos
updateProducts(products: product[]) {
  this.dataSource.next(products);
}

}
