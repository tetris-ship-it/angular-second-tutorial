import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'//this is showing service can be injected anywhere but we can restrict a service to a specific module
})//if there are no configurations then Angular can inject the service anywhere in the application
export class MessageService {//for the methods of this service to be used they have to be instantiated
  messages : string[] = [];

  add(message: string) : void {
    this.messages.push(message);//push the message onto the messages string array.
  }
  clear(){
    this.messages=[];//re-assigns a value to the messages property giving it null when the method is used.
  }
  constructor() { }//constructor is empty with nothing to do inside
}
