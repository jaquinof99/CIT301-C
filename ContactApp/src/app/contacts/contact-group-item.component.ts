import { Component, Input } from '@angular/core';
import {Contact} from "./contact";
@Component({
  selector: 'ca-contact-group-item',
  template: `
    <a routerLinkActive="active" [routerLink]="['/contacts',selectedcontact.name, 'detail']" class="list-group-item clearfix">
        <div class="pull-left">
          <span class="list-group-item-heading" style="font-size: 2rem">{{selectedcontact?.description}}</span>
        </div>
        <span class="pull-right">
            <img class="img-responsive"
                 src="{{selectedcontact?.imagePath}}"
                 style="max-height: 50px;"/>
        </span>
      </a>
  `,
  styles: []
})
export class ContactGroupItemComponent{
  @Input() selectedcontact: Contact;
  constructor() { }

  ngOnInit() {
  }

}
