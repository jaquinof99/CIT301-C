import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import { Contact } from "../contact"
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {ContactsService} from "../contacts.service";

@Component({
  selector: 'ca-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit, OnDestroy {
  //@Input() selectedContact: Contact;
  subscription: Subscription;
  contactIndex: string;
  selectedContact: Contact;
  contactGroup: Contact[]=[];

  constructor(
              private route: ActivatedRoute,
              private contactsService: ContactsService,
              private router: Router
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any)=>{
        this.contactIndex = params['id'];
        this.selectedContact = this.contactsService.getContact(this.contactIndex);
        console.log(this.selectedContact);
        this.contactGroup = this.selectedContact.group;

      }
    );
  }
  // onEdit(){
  //   this.router.navigate(['/contacts',this.contactIndex,'edit'])
  // }

  onDelete(){
     this.contactsService.deleteContact(this.selectedContact);
     this.router.navigate(['/contacts']);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
