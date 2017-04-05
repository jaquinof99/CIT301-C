import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {Subscription} from "rxjs";
import {Contact} from "../contact";
import {ActivatedRoute, Router} from "@angular/router";
import {ContactsService} from "../contacts.service";

@Component({
  selector: 'ca-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private editMode: boolean = false;
  private hasGroup: boolean = false;
  private contactIdx: number;
  private contact: Contact;
  private groupContacts: Contact[] = [];
  private invalidGroupContact: boolean = true

  constructor(private route: ActivatedRoute,
              private contactsService: ContactsService,
              private router: Router

  ) { }

  ngOnInit() {
    this.editMode=false;
    this.hasGroup=false;
    this.invalidGroupContact=false;

    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if(params.hasOwnProperty('id')) {
          this.editMode = true;
          this.contactIdx = params['id'];
          this.contact = this.contactsService.getContact(this.contactIdx.toString());
          if(this.contact.group && this.contact.group.length > 0){
            this.hasGroup = true;
            this.groupContacts = this.contact.group;
          }
        }

      }
    )

  }

  ngOnDestroy(){
   this.subscription.unsubscribe();
  }

  onSubmit(value){
    let newContact = new Contact(null,
      value.name,
      value.email,
      value.phone,
      value.imagePath, this.groupContacts);


    if (this.editMode){
      newContact.name = this.contact.name;
      this.contactsService.updateContact(this.contact, newContact);
    }else{
      this.contactsService.addContact(newContact);
    }
    this.router.navigate(['contacts']);
  }

  onCancel(){
    this.router.navigate(['contacts']);
  }

  isInvalidContact(newContact: Contact){
    if(!newContact){ //newContact has no value?
      return true;
    }

    if(newContact.name === this.contact.name){
      return true;
    }

    for(let i=0; i<this.groupContacts.length; i++){
      if(newContact.name === this.groupContacts[i].name){
        return true;
      }
    }
    return false;
  }

  addToGroup($event: any){
    let selectedContact: Contact = $event.dragData;
    this.invalidGroupContact = this.isInvalidContact(selectedContact);
    if(this.invalidGroupContact){
      return;
    }
    this.groupContacts.push(selectedContact);
    this.invalidGroupContact = false;
  }

  onRemoveItem(id: number){
    //If contact is outsides the bounds of the array
    if(id < 0 || id >= this.groupContacts.length){
      return;
    }
    this.groupContacts.splice(id, 1);
    this.invalidGroupContact = false;
  }
}
