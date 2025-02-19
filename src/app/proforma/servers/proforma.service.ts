import { Injectable } from '@angular/core';
import { product } from '../interface/product.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { marca } from '../interface/marca.interface';
import { medida } from '../interface/medida.interface';

@Injectable({providedIn: 'root'})



export class ProformaService {

  constructor(private http: HttpClient) { }


  getProducts():Observable<product[]>{
    return this.http.get<product[]>('/json/products.json');

  }
  getMarcas():Observable<marca[]>{
    return this.http.get<marca[]>('/json/marcas.json');
  }

  getMedida():Observable<medida[]>{
    return this.http.get<medida[]>('/json/medidas.json');
  }



}
