import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import { ProductInterface } from 'src/app/product-list/productInterface';
@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private readonly http: HttpClient) { }
  getProducts(): Observable<ProductInterface[]> {
    document.getElementById("loading-products")!.style.display = "unset";
    return this.http.get<ProductInterface[]>('http://localhost:8080/api/v1/products');
  }

  createProduct(data:Object):Observable<any>{
    document.getElementById("loading-create")!.style.display = "unset";
    return this.http.post('http://localhost:8080/api/v1/create',data);

  }

  deleteProduct(id:number):Observable<any>{
    document.getElementById("loading-delete")!.style.display = "unset";

    return this.http.delete('http://localhost:8080/api/v1/delete/'+id);
  }
  
  editProduct(id:number,data:Object):Observable<any>{
    document.getElementById("loading-edit")!.style.display = "unset";

    return this.http.put('http://localhost:8080/api/v1/edit/'+id,data);
  }
  
}
