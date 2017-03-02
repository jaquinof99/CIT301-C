import {Routes} from "@angular/router";
//import {RecipeStartComponent} from "./recipe-start.component";

import { MessageNewComponent}from "./message-new/message-new.component";


export const MESSAGE_ROUTES: Routes = [
  //{path: '', component: RecipeStartComponent},
  {path: 'new', component: MessageNewComponent}

]
