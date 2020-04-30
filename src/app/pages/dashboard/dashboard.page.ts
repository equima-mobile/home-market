import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { User, User_base } from 'src/app/models/user';
import { AuthentificationService } from 'src/app/shared/authentification.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/alert.service';
import { PropertiesService } from 'src/app/shared/properties.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  users: User[];
  users_base;
  oneUser:User_base;
  lengthNotification=1;
  spinner: boolean = false;
  constructor(private menu: MenuController,
              public authenticationService: AuthentificationService,
              private storage: Storage,
              private router: Router,
              private alertService: AlertService,
              public propertyService: PropertiesService,) { 
                
              }

  ngOnInit() {
    this.spinner=true;
    this.storage.get('token').then((val) => {
      const session=val;
      console.log('Data',session);
      if(session!=undefined){
        let user_display_name=session.user_display_name;
        console.log('Nom',user_display_name);
        let user_email=session.user_email;
        let user_nicename=session.user_nicename;

        let email_admin=environment.email_admin;
        let password_admin=environment.pwd_admin;
        this.authenticationService.generetoken(email_admin, password_admin)
          .subscribe(res => {
            console.log('token admin',res);
            let token_string=JSON.stringify(res);
            let token_json=JSON.parse(token_string);
            console.log('Json',token_json);
            let token_admin=token_json.token;
        this.authenticationService.Getuser(token_admin).subscribe(
          data => {
            this.spinner;
            console.log(data);
            this.users_base=[];
            this.users_base = Object.keys(data).map(key => ({ id: key, ...data[key] }));
            console.log('User base',this.users_base);
            for (let i = 0; i < this.users_base.length; i++) {
              if(user_display_name==this.users_base[i].name){
                this.oneUser = {'id':this.users_base[i].id,'username': user_nicename,'avatar_urls': this.users_base[i].avatar_urls[ '96' ],'user_display_name':user_display_name,'email':user_email}
                console.log('User',this.oneUser);
              }
            }
          }
        );

      },
      err => {
          console.log(err);
      });


      }
    });
  }

  ionViewWillEnter() {

  }

  logout() {
    this.authenticationService.logout().then(
      (data) => {
        this.alertService.presentToast('Déconnécté');   
        this.router.navigateByUrl('search-property');
      }
    ).catch(error=>{
      console.log(error);
    });
  }

  openNotifications(){
    console.log('Aucune notification')
  }

  mesinfo(){
    this.propertyService.setData(2, this.oneUser);
    this.router.navigateByUrl('mesinfos');
  }


}
