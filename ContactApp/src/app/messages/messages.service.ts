import { Injectable } from '@angular/core';
import { Message} from './message';
import { MOCKMESSAGES} from './MOCKMESSAGES';
@Injectable()
export class MessagesService {
  messages: Message[]=[];

  constructor() { }

  getMessages(){
    this.messages = MOCKMESSAGES;//added
    return this.messages;//added
  }

  getMessage(idx: number){

  }
}
