import { Injectable } from '@angular/core';
import { product } from '../interface/product.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})



export class ProformaService {

  constructor(private http: HttpClient) { }


  getProducts():Observable<any>{
    return this.http.get('/json/products.json');

  }



}
