import { Component, OnInit } from '@angular/core';
import { gen_pholders, Product } from '../data/interfaces/product';// temporary remove later
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  prod:Product[] = gen_pholders(30)
  featured:Product[] = []
  banner:string = "https://images.pexels.com/photos/1138155/pexels-photo-1138155.png?auto=compress&cs=tinysrgb&w=1600"
  constructor() { }

  ngOnInit(): void {
  this.get_featured()
  console.log(this.featured)
  }

  get_featured()
  {
    for(let i = 0 ; i < this.prod.length;i++)
    {
      if(this.prod[i].isfeatured == true)this.featured.push(this.prod[i])
    }
  }
}
