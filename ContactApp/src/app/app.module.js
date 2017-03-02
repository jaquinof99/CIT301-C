"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var header_component_1 = require('./header.component');
var contacts_component_1 = require('./contacts/contacts.component');
var contact_list_component_1 = require('./contacts/contact-list/contact-list.component');
var contact_item_component_1 = require('./contacts/contact-list/contact-item.component');
var contact_detail_component_1 = require('./contacts/contact-detail/contact-detail.component');
var dropdown_directive_1 = require('./dropdown.directive');
var contacts_service_1 = require("./contacts/contacts.service");
var messages_component_1 = require('./messages/messages.component');
var message_list_component_1 = require('./messages/message-list/message-list.component');
var message_item_component_1 = require('./messages/message-list/message-item.component');
var documents_component_1 = require('./documents/documents.component');
var document_list_component_1 = require('./documents/document-list/document-list.component');
var document_item_component_1 = require('./documents/document-list/document-item.component');
var documents_service_1 = require("./documents/documents.service");
var messages_service_1 = require("./messages/messages.service");
var app_routing_1 = require("./app-routing");
var message_new_component_1 = require('./messages/message-new/message-new.component');
var document_view_component_1 = require('./documents/document-view/document-view.component');
var document_edit_component_1 = require('./documents/document-edit/document-edit.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                contacts_component_1.ContactsComponent,
                contact_list_component_1.ContactListComponent,
                contact_item_component_1.ContactItemComponent,
                contact_detail_component_1.ContactDetailComponent,
                dropdown_directive_1.DropdownDirective,
                messages_component_1.MessagesComponent,
                message_list_component_1.MessageListComponent,
                message_item_component_1.MessageItemComponent,
                documents_component_1.DocumentsComponent,
                document_list_component_1.DocumentListComponent,
                document_item_component_1.DocumentItemComponent,
                message_new_component_1.MessageNewComponent,
                document_view_component_1.DocumentViewComponent,
                document_edit_component_1.DocumentEditComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing
            ],
            providers: [contacts_service_1.ContactsService, documents_service_1.DocumentsService, messages_service_1.MessagesService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
