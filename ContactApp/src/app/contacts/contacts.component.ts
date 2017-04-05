import { Component, OnInit } from '@angular/core';
import { Contact } from './contact'

@Component({
  selector: 'ca-contacts',
  templateUrl: './contacts.component.html'
})
export class ContactsComponent implements OnInit {
  selectedContact: Contact = null;
  constructor() { }

  ngOnInit() {
  }

}
