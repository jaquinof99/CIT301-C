import { Component, OnInit, Input } from '@angular/core';
import {Contact} from "../contact";

@Component({
  selector: 'ca-contact-item',
  templateUrl: './contact-item.component.html'
})
export class ContactItemComponent implements OnInit {
  @Input() contact: Contact;
  contactID: number;
  constructor() { }

  ngOnInit() {
  }

}
