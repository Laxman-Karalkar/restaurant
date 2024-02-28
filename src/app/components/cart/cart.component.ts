import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  //imagecart: string ="../../../assets/images/cart.jpg";

  public products: any = [];
  p: number = 1;

  // public products='http://localhost:3000/products';;
 
  public grandtotal !: number;
  constructor(private cart: CartService) { }
 
  prod: any = "";
  //quantity: any= "";

  ngOnInit(): void {
    this.cart.getproducts().subscribe(res => {
      this.products = res;
      this.grandtotal = this.cart.gettotalprice();
    })
  }
  emptycart() {
    this.cart.removeallcart();
  }

  delete(item: any) {
    this.cart.removecartitem(item);

  }


  increaseQuantity(item: any) {
    if (item.quantity != 5) {
      item.quantity += 1;
           item.total = item.price * item.quantity;
      this.cart.productlist.next(this.products); // Update the observable
      this.grandtotal = this.cart.gettotalprice();
    }
  }

  decreaseQuantity(item: any) {
    if (item.quantity != 0) {
      item.quantity -= 1;
      item.total = item.price * item.quantity;
      this.cart.productlist.next(this.products); // Update the observable
      this.grandtotal = this.cart.gettotalprice();
    }
  }
}


