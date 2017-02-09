import { Component, OnInit } from '@angular/core';
import { Document} from '../document'; //added
import {DocumentsService} from '../documents.service';

@Component({
  selector: 'ca-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  documents: Document[]=[]; //added
  constructor(private documentService: DocumentsService) { }

  ngOnInit() {
    this.documents = this.documentService.getDocuments();
  }

}
