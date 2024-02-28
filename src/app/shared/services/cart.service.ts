import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartitemlist: any = []
  public productlist = new BehaviorSubject<any>([]);

  constructor() { }

  //get
  getproducts() {
    return this.productlist.asObservable();
  }


  setproduct(product: any) {
    this.cartitemlist.push(product);
    this.productlist.next(product);

  }



  addtocart(product: any) {
    const existingProduct = this.cartitemlist.find((item: { id: any; }) => item.id === product.id);

    if (existingProduct) {
      // Check if adding the quantity will exceed the limit (5)
      if (existingProduct.quantity + product.quantity <= 5) {
        existingProduct.quantity += product.quantity;
        existingProduct.total = existingProduct.price * existingProduct.quantity;
      } else {
        // If adding the quantity exceeds the limit, set the quantity to the limit (5)
        existingProduct.quantity = 5;
        existingProduct.total = existingProduct.price * existingProduct.quantity;
      }
    } else {
      // If the product is not in the cart, add it with the quantity (up to the limit)
      product.quantity = Math.min(product.quantity, 5);
      this.cartitemlist.push(product);
    }

    this.productlist.next(this.cartitemlist);
    this.gettotalprice();
  }



  gettotalprice(): number {
    let grandtotal = 0;
    this.cartitemlist.map((a: any) => {
      grandtotal += a.total;
    })
    return grandtotal;
  }

  removeallcart() {
    this.cartitemlist = []
    this.productlist.next(this.cartitemlist);
  }

  
  removecartitem(product: any) {
    this.cartitemlist.map((a:any,index:any) => {
      if (product.id === a.id) {
        this.cartitemlist.splice(index,1);
      }
    })
    this.productlist.next(this.cartitemlist);
  }



}
