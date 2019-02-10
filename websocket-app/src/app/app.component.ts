import {Component, OnInit} from '@angular/core';
import { WebsocketService} from "./websocket.service";
import { ChatService} from "./chat.service";

import { UserService} from './user.service';
import { IUser } from './IUsers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WebsocketService, ChatService]
})

export class AppComponent implements OnInit{

  users$: Observable<IUser[]>;

  constructor(private userService: UserService) {
 }


 ngOnInit() {
   this.userService.getUsers().subscribe(res => {
     console.log('res: ', res);
   });
 }


}
