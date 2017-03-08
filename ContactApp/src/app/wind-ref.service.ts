import { Injectable } from '@angular/core';

@Injectable()
export class WindRefService {

  constructor() { }

  getNaviteWindow(){
    return window;
  }
}
