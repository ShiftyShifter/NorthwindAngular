import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  displayStatus: boolean = false;
  lang;

  closeNav() {
    this.displayStatus = !this.displayStatus;
  }

  constructor() {
    
  }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
  }

  changeLang(lang){
    localStorage.setItem('lang', lang);
    window.location.reload();
  }
}
