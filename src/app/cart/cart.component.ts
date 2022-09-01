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
  usercart:object[]=[]
  ngOnInit(): void {
    for(let i = 0; i> this.cartitems.length;i++)
    {
      // this.usercart.push({:})
    }
  }

  remove(id:number)
  {
    delete this.cartitems[id]
  }

  totalprice()
  {
    let sum = 0
    for(let i = 0; i < this.cartitems.length;i++)
    {
      sum += this.cartitems[i].price
    }
    return sum.toFixed(2)
  }

}
