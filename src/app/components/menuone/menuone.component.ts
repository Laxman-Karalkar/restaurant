import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-menuone',
  templateUrl: './menuone.component.html',
  styleUrls: ['./menuone.component.css']
})
export class MenuoneComponent implements OnInit {

  public productlist: any;
  //products = "products"
  constructor(private api: DataService, private cart: CartService) { }

  ngOnInit(): void {
    this.api.getproducts().subscribe(res => {
      this.productlist = res;


      this.productlist.forEach((a: any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }


  addtocart(item: any) {
    this.cart.addtocart(item);
    console.log(item);
  }
}

