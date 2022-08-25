import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../data/interfaces/product';
import { gen_reviews, Review } from '../data/interfaces/review';
import { gen_pholders } from '../data/interfaces/product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products:Product[] = gen_pholders(60)// only for placeholders remove later
  reviews:Review[] = gen_reviews(Math.round(Math.random()*12+1))//placeholder
  prod:any
  num_pics:number = Math.round(Math.random()*5) // another placeholder variable remove later
  pics:string[] = []
  quantity:number = 1



  constructor(prod:ActivatedRoute) {

    const prod_id = prod.snapshot.params["id"]
    // console.log(prod_id)
    const product = this.products[prod_id]
    this.prod = product

  }
  starify(rating:number)
  {
    let stars:number[] = []
    if(rating%2 != 0 )
    {
      for(let i = 0; i < (rating-1)/2; i++)
      {
        stars.push(2)
      }
      stars.push(1)

    }
    else
    {
      for(let i = 0; i < rating/2;i++)
      {
        stars.push(2)
      }
    }
    while(stars.length < 5)
    {
      stars.push(0)
    }
    return stars
  }

  ngOnInit(): void {
    for(let i = 0; i<this.num_pics;i++)
    {
      this.pics.push(this.prod.image)
      // temporary remove later

      // this.stars = st
    }

  }
  addmore()
    {
      this.quantity++
    }
  addless()
  {
    if(this.quantity>1)
    {
      this.quantity--
    }
  }
}
