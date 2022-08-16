import { Component, OnInit } from '@angular/core';
import { IContact } from '../models/IContact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contacts: IContact[];

  lang;
  language = {
    name: 'Name',
    message: 'Message',
    email: 'Email',
    phone: 'Phone'
  }

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe(
      data => this.contacts = data
    );

    this.lang = localStorage.getItem('lang') || 'en';

    if (this.lang === 'en') {
      this.language = {
        name: 'Name',
        message: 'Message',
        email: 'Email',
        phone: 'Phone'
      }
    }
    else {
      this.language = {
        name: 'İsim',
        message: 'Mesaj',
        email: 'Email',
        phone: 'Telefon'
      }
    }
  }

}
