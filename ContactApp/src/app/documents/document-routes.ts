import {Routes} from "@angular/router";
import {DocumentsViewComponent} from "./documents-view/documents-view.component"; //dont forget 'S'
import {DocumentEditComponent} from "./document-edit/document-edit.component";


export const DOCUMENT_ROUTES: Routes = [

  {path: ':idx', component: DocumentsViewComponent},
  {path:':id/edit', component: DocumentEditComponent},
  {path: 'new', component: DocumentEditComponent}
]
