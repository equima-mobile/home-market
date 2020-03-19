import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthentificationService } from './shared/authentification.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AlertService } from './shared/alert.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'home'
    },
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
  ];


    rootPage:any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public authenticationService: AuthentificationService,
    private router: Router,
    private alertService: AlertService,
    private storage: Storage,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

     // Commenting splashScreen Hide, so it won't hide splashScreen before auth check
      //this.splashScreen.hide();
      this.authenticationService.getToken();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }


  logout() {
    this.authenticationService.logout().then(
      (data) => {
        this.alertService.presentToast('Déconnécté');    
        this.router.navigateByUrl('landing');
      }
    ).catch(error=>{
      console.log(error);
    });
  }


}
