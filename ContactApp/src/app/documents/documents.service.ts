import { Injectable } from '@angular/core';
import {Document} from './document'
import {MOCKDOCUMENTS} from "./MOCKDOCUMENTS";

@Injectable()
export class DocumentsService {
  documents: Document[] =[];

  constructor() { }

  getDocuments(){
    return this.documents=MOCKDOCUMENTS; //added
  }

  getDocument(idx: number){
    return this.documents[idx];
  }

  deleteDocument(document: Document){
    this.documents.splice(this.documents.indexOf(document));
  }
}
