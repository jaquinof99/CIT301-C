import {Injectable, EventEmitter} from '@angular/core';
import {Document} from './document'
import {MOCKDOCUMENTS} from "./MOCKDOCUMENTS";
import {Http, Response, Headers} from "@angular/http";
import "rxjs/Rx";

@Injectable()
export class DocumentsService {
  currentDocumentObj: Document;
  currentDocumentId: string;
  documents: Document[] =[];
  getDocumentsEmmiter = new EventEmitter<Document[]>();

  constructor(private http: Http) {
    this.initDocuments();
    this.currentDocumentId = '1';
  }

  initDocuments(){
    return this.http.get('https://contactapp-c84d3.firebaseio.com/documents.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Document[]) => {
          this.documents = data;
          this.getDocumentsEmmiter.emit(this.documents);
        }
      );
  }

  getDocuments(){
    return this.documents; //added
  }

  getDocument(idx: number){
    if(idx<0 || idx>= this.documents.length){
      throw "Index out of bounds";
    }
    return this.documents[idx];
  }

  deleteDocument(document: Document){
    if(!document){
      return;
    }

    const pos = this.documents.indexOf(document);
    if (pos<0){
      return;
    }
    this.documents.splice(pos,1);
    this.storeDocuments();
  }

  storeDocuments(){
    const body = JSON.stringify(this.documents);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://contactapp-c84d3.firebaseio.com/documents.json', body, {headers:headers}).toPromise();
  }

  addDocument(document: Document){
    if(document === null)
      return;
    this.documents.push(document);
    this.storeDocuments();
  }

  updateDocument(oldDoc: Document, newDoc: Document){
    this.documents[this.documents.indexOf(oldDoc)] = newDoc;
    this.storeDocuments();
  }
}
