import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from "rxjs";
import {DocumentsService} from "../documents.service";
import {Document} from '../document';
import {WindRefService} from "../../wind-ref.service";

@Component({
  selector: 'ca-documents-view',
  templateUrl: './documents-view.component.html',
  styleUrls: ['./documents-view.component.css']
})
export class DocumentsViewComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private documentIdx: number;
  document: Document;
  nativeWindow:any;

  constructor(private WindRef: WindRefService,
              private route: ActivatedRoute,
              private documentsService: DocumentsService,
              private router: Router
  ) {
     this.nativeWindow= this.WindRef.getNaviteWindow();
  }
  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any)=>{
        this.documentIdx = params['idx'];
        this.document = this.documentsService.getDocument(this.documentIdx);
      }
    );
  }

  onEdit(){
    this.router.navigate(['/documents', this.documentIdx, 'edit'])
  }

  onDelete(){
    this.documentsService.deleteDocument(this.document);
    this.router.navigate(['/documents']);
  }

  onAddDocumentList(){

  }

  ngOnDestroy(){
   this.subscription.unsubscribe();
  }

  onView(){

    this.nativeWindow.open(this.document.url);
  }
}
