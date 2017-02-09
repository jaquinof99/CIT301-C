import { Component, OnInit, Input } from '@angular/core';
import {Message} from '../message'; //added
@Component({
  selector: 'ca-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {
  @Input() message: Message; //added
  constructor() { }

  ngOnInit() {
  }

}
