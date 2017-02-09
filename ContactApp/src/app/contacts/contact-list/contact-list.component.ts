import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Contact } from '../contact'
import {ContactsService} from "../contacts.service";
@Component({
  selector: 'ca-contact-list',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  @Output() selectedContact = new EventEmitter<Contact>();
  // contact: Contact = null;


  constructor(private contactService: ContactsService) {
  }

  ngOnInit() {
    this.contacts=this.contactService.getContacts();
  }

  onSelected(contact: Contact) {
    this.selectedContact.emit(contact);
  }




}
