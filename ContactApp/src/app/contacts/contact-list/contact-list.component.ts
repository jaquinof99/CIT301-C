import {Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
import { Contact } from '../contact'
import {ContactsService} from "../contacts.service";
import {Subscription} from "rxjs";
@Component({
  selector: 'ca-contact-list',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent implements OnInit, OnDestroy {

  @Output() selectedContact = new EventEmitter<Contact>();
  contacts: Contact[] = [];
  // contact: Contact = null;
  term: string = "";
  private subscription: Subscription;

  constructor(private contactService: ContactsService) {
    this.subscription = this.contactService.getContactsEmitter.subscribe(
      (contacts: Contact[]) => {this.contacts = contacts;}
    );
  }

  ngOnInit() {
    //this.contacts=this.contactService.getContacts();
    // console.log(this.contacts);
  }

  onSelected(contact: Contact) {
    this.selectedContact.emit(contact);
  }

  onKeyPress(value: string){
    this.term = value;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
