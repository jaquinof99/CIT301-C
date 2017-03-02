"use strict";
/**
 * Created by Jordan on 2/8/2017.
 */
var Message = (function () {
    function Message(id, sender, subject, text) {
        this.id = id;
        this.sender = sender;
        this.subject = subject;
        this.text = text;
    }
    ;
    return Message;
}());
exports.Message = Message;
