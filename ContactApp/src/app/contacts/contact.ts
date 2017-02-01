import {Injectable} from "@angular/core";
/**
 * Created by Jordan on 1/24/2017.
 */
@Injectable()
export class Contact {
  constructor(public name, public description, public email, public phone, public imagePath, public group: Contact[]){

  }
}
