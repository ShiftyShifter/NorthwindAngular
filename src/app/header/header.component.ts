import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  displayStatus: boolean = false;

  closeNav(){
    this.displayStatus = !this.displayStatus;
  }

  constructor() {

   }

  ngOnInit(): void {

  }
}
