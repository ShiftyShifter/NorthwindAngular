import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lang;
  
  
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

  language = {
    bio: 'I completed my education in English Language Teaching at Trakya University. I started learning coding in 2020 with C# language then I had an interest in frontend development. I learned Javascript, HTML, CSS and took professional certificates. My aim is to pursue a career in frontend development and web design.'
  }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
    
    if (this.lang === 'en') {
      this.language = {
        bio: 'I completed my education in English Language Teaching at Trakya University. I started learning coding in 2020 with C# language then I had an interest in frontend development. I learned Javascript, HTML, CSS and took professional certificates. My aim is to pursue a career in frontend development and web design.'
      }
    }
    else{
      this.language = {
        bio: 'Eğitimimi Trakya Üniversitesi İngilizce Öğretmenliğinde tamamladım. Yazılıma 2020 yılında C# dili ile başladım ve sonradan frontend alanına ilgim başladı. Javascript, HTML ve CSS öğrenip online profesyonel sertifikalar aldım. Kariyer hedefim kendimi frontend alanında geliştirmek ve bu konuda uzmanlaşmak.'
      }
    }
  }

}
