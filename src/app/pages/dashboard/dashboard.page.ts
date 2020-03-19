import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { User } from 'src/app/models/user';
import { AuthentificationService } from 'src/app/shared/authentification.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  user: User;
  constructor(private menu: MenuController,
              public authenticationService: AuthentificationService,
              private storage: Storage) { 
                this.menu.enable(true);
              }

  ngOnInit() {
  }

  ionViewWillEnter() {

    this.storage.get('token').then((val) => {
      const data=val;
      if(data!=undefined){
        this.authenticationService.Getuser(data.token).subscribe(
          user => {
            this.user = user;
          }
        );
      }
    });
  
  }


}
