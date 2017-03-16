import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'ca-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent implements OnInit {
  @Input() oldDoc: Document;
  constructor() { }

  ngOnInit() {
  }

}
