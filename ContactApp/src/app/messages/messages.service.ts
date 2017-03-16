import { Injectable } from '@angular/core';
import { Message} from './message';
import { MOCKMESSAGES} from './MOCKMESSAGES';
import {Contact} from "../contacts/contact";
@Injectable()
export class MessagesService {
  messages: Message[]=[];


  constructor() {

  }

  getMessages(){
    this.messages = MOCKMESSAGES;//added
    return this.messages;//added
  }

  getMessage(idx: number){

  }

  addMessage (message: Message){
    this.messages.push(message);
  }


}
