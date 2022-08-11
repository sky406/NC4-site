import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { Product } from '../data/interfaces/product';
import { gen_pholders } from '../data/interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  prod:Product[] = gen_pholders(60)
  banner:string = ''
  slideroutput:number = 0
  constructor() { }

  ngOnInit(): void {
  }

}
