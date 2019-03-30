import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  @Input() imgurl;
  constructor() { }

  ngOnInit() {
  }
  product = [
    {
      "image": "assets/01.jpg"
    },
    {
      "image": "assets/02.jpg"
    },
    {
      "image": "assets/03.jpg"
    },
    {
      "image": "assets/04.jpg"
    },
    {
      "image": "assets/05.jpg"
    },
    {
      "image": "assets/06.jpg"
    },
    {
      "image": "assets/07.jpg"
    },
    {
      "image": "assets/08.jpg"
    },
    {
      "image": "assets/09.jpg"
    },
    {
      "image": "assets/10.jpg"
    },
    {
      "image": "assets/11.jpg"
    },
    {
      "image": "assets/12.jpg"
    }
  ]

}
