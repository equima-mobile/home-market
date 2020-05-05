import { Component, OnInit } from '@angular/core';
import { Notification } from 'src/app/models/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  notifications: Notification[];
  onenotifications: Notification[];
  authId: any;
  font_weight: string = '';
  NotificationSeenNoseen : any;
  notificationNoseen: Notification[];
  read;
  spinner: boolean = false;
  message : boolean = false;
  aucunmessage: string = "";
  constructor(
    private router: Router) { }

  ngOnInit() {
    
  }

  updatefondNotification(id){
    console.log(id);
  }

}
