import {Injectable} from "@angular/core";
/**
 * Created by Jordan on 1/24/2017.
 */
@Injectable()
export class Contact {
  constructor(public name: string, public description: string, public email: string, public phone: string, public imagePath: string, public group: Contact[]){

  }
}
