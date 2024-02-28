import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
   imagecart: string ="../../../assets/images/rose.jpg";
  public products: any = [];
  p: number = 1;
  // public products='http://localhost:3000/products';;
  public grandtotal !: number;

  constructor(private cart: CartService) { }
  ngOnInit(): void {
    this.cart.getproducts().subscribe(res => {
      this.products = res;
      this.grandtotal = this.cart.gettotalprice();
    })
  }


/*
  proceed(){
    document.write("PAYMENT SUCCESFULL")
  }*/
}
