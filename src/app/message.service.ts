import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages : string[] = [];

  add(message: string) : void {
    this.messages.push(message);//push the message onto the messages string array.
  }
  clear(){
    this.messages=[];//re-assigns a value to the messages property giving it null when the method is used.
  }
  constructor() { }
}
