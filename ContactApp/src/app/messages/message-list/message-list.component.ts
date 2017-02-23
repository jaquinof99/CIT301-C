import { Component, OnInit } from '@angular/core';
import {MessagesService} from "../messages.service";
import {Message} from "../message";
@Component({
  selector: 'ca-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [];
  constructor(private ms: MessagesService ) {

  }

  ngOnInit() {
    this.messages=this.ms.getMessages();
  }


}
