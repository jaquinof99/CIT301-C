/**
 * Created by Jordan on 2/8/2017.
 */
"use strict";
var Document = (function () {
    function Document(id, name, description, url, children) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.url = url;
        this.children = children;
    }
    return Document;
}());
exports.Document = Document;
