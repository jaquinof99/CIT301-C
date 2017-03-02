"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var MOCKDOCUMENTS_1 = require("./MOCKDOCUMENTS");
var DocumentsService = (function () {
    function DocumentsService() {
        this.documents = [];
    }
    DocumentsService.prototype.getDocuments = function () {
        return this.documents = MOCKDOCUMENTS_1.MOCKDOCUMENTS; //added
    };
    DocumentsService.prototype.getDocument = function (idx) {
    };
    DocumentsService = __decorate([
        core_1.Injectable()
    ], DocumentsService);
    return DocumentsService;
}());
exports.DocumentsService = DocumentsService;
