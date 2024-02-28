import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

//apiUrl = 'http://localhost:3000/products';
constructor(private http: HttpClient) { }

getproducts() {
  return this.http.get<any>("http://localhost:3000/products")
    .pipe(map((res: any) => {
      return res;
    }))
}

//

getprod() {
  return this.http.get<any>("http://localhost:3000/prod")
    .pipe(map((res: any) => {
      return res;
    }))
}

}
