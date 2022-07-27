import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('navSelector') closeButton: ElementRef;

  closeNav(){
    this.closeButton.nativeElement.style.display = "none";
  }

  openNav(){
    this.closeButton.nativeElement.style.display = "flex";
  }

  constructor() {

   }

  ngOnInit(): void {

  }
}
