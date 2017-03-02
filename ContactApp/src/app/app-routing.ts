import {Routes, RouterModule} from "@angular/router";
import {DocumentsComponent} from "./documents/documents.component";
import {MessagesComponent} from "./messages/messages.component";
import {ContactsComponent} from "./contacts/contacts.component";
//import { RECIPE_ROUTES } from "./recipes/recipes.routes";

const APP_ROUTES: Routes =[
  {path:'', redirectTo: '/contacts', pathMatch: 'full'},
  { path: 'documents', component: DocumentsComponent},
  { path: 'messages', component: MessagesComponent},
  { path: 'contacts', component: ContactsComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
holahvb kjhbjhbhjk
