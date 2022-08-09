import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  images = [{
    imageSrc:
    '../assets/images/beverages.png',
    imageAlt: 'product1',
  },
  {
    imageSrc: 
    '../assets/images/meat.png',
    imageAlt: 'product2',
  },
  {
    imageSrc: 
    '../assets/images/seafood.png',
    imageAlt: 'product3',
  },
  {
    imageSrc: 
    '../assets/images/confection.png',
    imageAlt: 'product4',
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
