import { Injectable } from '@angular/core';
import { HeroesModule } from "./heroes.module";


export class MessageService {
  messages: string[] = []
  add (message: string):void {
    this.messages.push(message)
  }
  clear ():void {
    this.messages = []
  }
}
