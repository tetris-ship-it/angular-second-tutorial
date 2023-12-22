import { Component } from '@angular/core';
import { MessageService } from '../message.service';
@Component({//@Component decorator for defining a component properly
  selector: 'app-messages',//the name of the custom tag would be "app-messages"
  templateUrl: './messages.component.html',//specifying a path for the html
  styleUrls: ['./messages.component.css']//specifying a path for the html
})
export class MessagesComponent {
  constructor(public messageService : MessageService){}//instantiation of the messageService class to use the methods included inside the service.
}

