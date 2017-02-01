import { Component, OnChanges, Input } from '@angular/core';
import { Contact } from '../contact';
@Component({
  selector: 'ca-contact-group',
  templateUrl: './contact-group.component.html'
})
export class ContactGroupComponent implements OnChanges{
  @Input() selectedContact : Contact;
  contactGroup: Contact[] =[];

  constructor() { }

  ngOnChanges() {
    this.contactGroup = this.selectedContact.group;
  }

}
