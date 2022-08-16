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

  language = {
    home: 'Home',
    products: 'Products',
    categories: 'Categories',
    employees: 'Employees',
    contacts: 'Contact',
    login: 'Login',
  }

  converter(): boolean {
    let localStorageLogged = localStorage.getItem('ifLogged')
    if (localStorageLogged === 'true') {
      return true;
    }
    else {
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
    
    if (this.lang === 'en') {
      this.language = {
        home: 'Home',
        products: 'Products',
        categories: 'Categories',
        employees: 'Employees',
        contacts: 'Contact',
        login: 'Login'
      }
    }
    else{
      this.language = {
        home: 'Anasayfa',
        products: 'Ürünler',
        categories: 'Kategoriler',
        employees: 'Çalışanlar',
        contacts: 'İletişim',
        login: 'Giriş'
      }
    }
    
  }

  changeLang(lang) {
    localStorage.setItem('lang', lang);
    window.location.reload();
  }
}
