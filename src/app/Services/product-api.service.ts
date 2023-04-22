import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../Models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductAPIService {
  private HttpOptions;

  constructor(private HttpClientService: HttpClient) { 
    this.HttpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
       //, 'Authorization': 'Token'
      })
    }
  }
  GetAllProducts(): Observable<IProduct[]>
  {
    return this.HttpClientService.get<IProduct[]>(`${environment.APIBaseURL}/api/Product`);
  }
  getProductByID(ProductID: number): Observable<IProduct>
  {
    return this.HttpClientService.get<IProduct>(`${environment.APIBaseURL}/api/Product/${ProductID}`);
  }

  AddNewProduct(newProduct: IProduct): Observable<IProduct>
  {
    return this.HttpClientService.post<IProduct>(`${environment.APIBaseURL}/api/Product`, JSON.stringify(newProduct),this.HttpOptions);
  }

  updateProduct(ProductID: number, newProduct: IProduct) :Observable<IProduct>
  {
    return this.HttpClientService.put<IProduct>(`${environment.APIBaseURL}/api/Product/${ProductID}`,JSON.stringify(newProduct),this.HttpOptions);
  }

  deleteProduct(ProductID:number) :Observable<IProduct>
  {
    return this.HttpClientService.delete<IProduct>(`${environment.APIBaseURL}/api/Product/${ProductID}`);
  }

}
