import { Component, OnInit } from '@angular/core';
import {ChatService} from '../chat.service';

@Component({
  selector: 'app-websocket-cockpit',
  templateUrl: './websocket-cockpit.component.html',
  styleUrls: ['./websocket-cockpit.component.css']
})
export class WebsocketCockpitComponent implements OnInit {

  title = 'websocket-app';

  json: string = '{"name": "Filip", "age": 4}';

  object;

  constructor(private chatService: ChatService) {
    this.object = JSON.parse(this.json);
    console.log('object.name: ', this.object['name']);
    console.log('object.age: ', this.object['age']);


    this.chatService.messages.subscribe( msg => {
      console.log('Response from websocket: ', msg);
    });

  }

  ngOnInit() {

  }

  private message = {
    author: 'Filip',
    message: 'This is a remix message'
  }

  sendMsg() {
    console.log('new message from client to websocket', this.message);
    this.chatService.messages.next(this.message);
    this.message.message = '';
  }
}
