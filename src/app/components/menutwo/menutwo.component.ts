import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { DataService } from 'src/app/shared/services/data.service';
@Component({
  selector: 'app-menutwo',
  templateUrl: './menutwo.component.html',
  styleUrls: ['./menutwo.component.css']
})
export class MenutwoComponent implements OnInit{

  public productlist: any;
  //products = "products"
  constructor(private api: DataService, private cart: CartService) { }

  ngOnInit(): void {
    this.api.getprod().subscribe(res => {
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


