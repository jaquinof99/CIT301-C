import { browser, element, by } from 'protractor';

export class ContactAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ca-root h1')).getText();
  }
}
