import { Component, OnInit } from '@angular/core';
import { Product } from '../data/interfaces/product';
import { gen_pholders } from '../data/interfaces/product';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor() { }

  cartitems:Product[] = gen_pholders(4)
  ngOnInit(): void {
  }

  remove(id:number)
  {
    delete this.cartitems[id]
  }

}
