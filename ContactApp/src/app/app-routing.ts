import {Routes, RouterModule} from "@angular/router";
import {DocumentsComponent} from "./documents/documents.component";
import {MessagesComponent} from "./messages/messages.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {MESSAGE_ROUTES} from "./messages/message-routes";
import {DOCUMENT_ROUTES} from "./documents/document-routes";
import {CONTACT_ROUTES} from "./contacts/contact-routes";
//import {DOCUMENT_ROUTES} from "./documents/document-routes";
//import { RECIPE_ROUTES } from "./recipes/recipes.routes";

const APP_ROUTES: Routes =[
  {path:'', redirectTo: '/contacts', pathMatch: 'full'},
  { path: 'documents', component: DocumentsComponent, children: DOCUMENT_ROUTES},
  { path: 'messages', component: MessagesComponent, children: MESSAGE_ROUTES},
  { path: 'contacts', component: ContactsComponent, children: CONTACT_ROUTES}
];

export const routing = RouterModule.forRoot(APP_ROUTES);

