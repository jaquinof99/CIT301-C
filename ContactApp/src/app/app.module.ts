import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactItemComponent } from './contacts/contact-list/contact-item.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { DropdownDirective } from './dropdown.directive';
import {ContactsService} from "./contacts/contacts.service";
import { MessagesComponent } from './messages/messages.component';

import { MessageListComponent } from './messages/message-list/message-list.component';
import { MessageItemComponent } from './messages/message-list/message-item.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentListComponent } from './documents/document-list/document-list.component';
import { DocumentItemComponent } from './documents/document-list/document-item.component';
import {DocumentsService} from "./documents/documents.service";
import {MessagesService} from "./messages/messages.service";
import {routing} from "./app-routing";
import {MessageNewComponent} from "./messages/message-new/message-new.component";
import { DocumentEditComponent } from './documents/document-edit/document-edit.component';
import {DocumentsViewComponent} from "./documents/documents-view/documents-view.component";
import {WindRefService} from "./wind-ref.service";
import { ContactGroupItemComponent } from './contacts/contact-group-item.component';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';
import {DndModule} from 'ng2-dnd';
import { ContactsFilterPipe } from './contacts/contacts-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    ContactListComponent,
    ContactItemComponent,
    ContactDetailComponent,
    DropdownDirective,
    MessagesComponent,
    MessageListComponent,
    MessageItemComponent,
    DocumentsComponent,
    DocumentListComponent,
    DocumentItemComponent,
    MessageNewComponent,
    DocumentEditComponent,
    DocumentsViewComponent,
    ContactGroupItemComponent,
    ContactEditComponent,
    MessageNewComponent,
    ContactsFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DndModule.forRoot(),
    routing
  ],
  providers: [ContactsService, DocumentsService, MessagesService, WindRefService],
  bootstrap: [AppComponent]
})
export class AppModule { }
