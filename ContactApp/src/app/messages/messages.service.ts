import {Injectable, EventEmitter} from '@angular/core';
import { Message} from './message';
import { MOCKMESSAGES} from './MOCKMESSAGES';
import {Contact} from "../contacts/contact";
import {Response, Http, Headers} from "@angular/http";
@Injectable()
export class MessagesService {
  messages: Message[]=[];
  currentMessageId: string;
  getMessagesEmitter = new EventEmitter<Message[]>();


  constructor(private http: Http) {
    this.initMessages();
    this.currentMessageId = '1';
  }

  getMessages(){
    this.messages = MOCKMESSAGES;//added
    return this.messages;//added
  }

  getMessage(idx: number){
    if(idx < 0 || idx > this.messages.length){
      throw "Index out of bounds"
    }
    return this.messages[idx];
  }

  addMessage (message: Message){
    if(message === null)
      return;
    this.messages.push(message);
    this.storeMessages();
  }

  initMessages(){
    return this.http.get('https://contactapp-c84d3.firebaseio.com/messages.json')
    .map((response: Response) => response.json())
      .subscribe(
        (data: Message[]) => {
          this.messages = data;
          this.getMessagesEmitter.emit(this.messages);
        }
      );

  }

  storeMessages(){
    const body = JSON.stringify(this.messages);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://contactapp-c84d3.firebaseio.com/messages.json',body, {headers: headers}).toPromise();
  }

}
