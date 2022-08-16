import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  displayStatus: boolean = false;
  ifLogged: boolean = this.converter();
  lang;

  converter(): boolean{
    let localStorageLogged = localStorage.getItem('ifLogged')
    if (localStorageLogged === 'true'){
      return true;
    }
    else{
      return false
    }
  }

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
