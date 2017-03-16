import {Component, OnInit, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Message} from "../message";
import {Contact} from "../../contacts/contact";
import {ContactsService} from "../../contacts/contacts.service";
import {MessagesService} from "../messages.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'ca-message-new',
  templateUrl: './message-new.component.html',
  styleUrls: ['./message-new.component.css']
})
export class MessageNewComponent implements OnInit {
  sender: Contact;

  constructor(private cs: ContactsService,
              private route: ActivatedRoute,
              private ms: MessagesService,
              private router: Router) {

   this.sender= cs.getCurrentContact();
  }

  onSubmit (value){
    const newMessage = new Message("",this.sender.description,"",value.message);
    this.ms.addMessage(newMessage);
    this.router.navigate(['messages']);
  }

  onCancel(){
    this.navigateBack();
  }

  ngOnInit() {
  }

  private navigateBack(){
    this.router.navigate(['messages']);
  }
}
