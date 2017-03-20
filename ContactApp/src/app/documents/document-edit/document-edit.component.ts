import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {DocumentsService} from "../documents.service";
import {Document} from "../document";

@Component({
  selector: 'ca-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent implements OnInit,OnDestroy {

  private subscription: Subscription;
  private oldDocument: Document;
  private editMode: boolean = false;
  private documentIdx: number;

  constructor(private route: ActivatedRoute,
              private documentsService: DocumentsService,
              private router: Router
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any)=>{
        if(params.hasOwnProperty('idx')){
          this.editMode=true;
          this.documentIdx = +params['idx'];
          this.oldDocument = this.documentsService.getDocument(this.documentIdx);
        }else{
          this.editMode = false;
          this.oldDocument = null;
        }
        //this.initForm();
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onSubmit(value){
    let newDocument = new Document(null,
                                    value.documentTitle,
                                    value.documentDescription,
                                    value.documentURL, null);
    console.log(newDocument);
    if (this.editMode){
      newDocument.id = this.oldDocument.id;
      this.documentsService.updateDocument(this.oldDocument, newDocument);
    }else{
      this.documentsService.addDocument(newDocument);
    }
    this.router.navigate(['documents']);
  }

  onCancel(){
    this.router.navigate(['../']);
  }
}
