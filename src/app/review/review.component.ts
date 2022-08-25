import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../data/interfaces/review';

@Component({
  selector: 'review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  @Input() review:Review = {
    id:0,
    title:"error",
    username:"none",
    userimage:"null",
    review:"you shouldn't be seeing this",
    rating:0
  }
  @Input() rating:number[] = [0,0,0,0,0]

  expanded = false
  constructor() { }

  ngOnInit(): void {
  }
  expand()
  {
    this.expanded = !this.expanded
  }

  checkOverflow (element:any) {
    return element.offsetHeight < element.scrollHeight ||
           element.offsetWidth < element.scrollWidth;
  }
}
