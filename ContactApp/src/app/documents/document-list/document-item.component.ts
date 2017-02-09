import { Component, OnInit, Input } from '@angular/core';
import { Document} from '../document';

@Component({
  selector: 'ca-document-item',
  templateUrl: './document-item.component.html',
  styleUrls: ['./document-item.component.css']
})
export class DocumentItemComponent implements OnInit {
  @Input() document:Document; //added
  constructor() { }

  ngOnInit() {
  }

}
