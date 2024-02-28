import { Component } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public totalitem = 0;
  constructor(private cart:CartService) { }
  //ngOnInit(): void {
 //   throw new Error('Method not implemented.');
 // }

  ngOnInit(): void {
    this.cart.getproducts().subscribe(res => {
      this.totalitem = res.length;
    })
  }

}

